const {
  memorySize,
  fdaSize,
  opCodes,
  minConstant,
} = require("../architecture");

function Vm(code, io) {
  this.pendingIO = false;
  this.stackPointer = memorySize - 1;
  this.origin = this.pc = code.origin;
  this.memory = Array(memorySize).fill(0);
  this.io = io;

  // initialize memory
  code.bytecode.forEach((word, index) => {
    this.memory[this.origin + index] = word;
  });
}

Vm.prototype.run = function () {
  return this.step().then(finished => {
    if (finished) {
      return true;
    }
    return this.run();
  });
};

Vm.prototype.step = function () {
  if (this.pendingIO) {
    return Promise.reject(new Error("Cannot step with pending IO"));
  }

  const word = this._nextWord();

  // isolate opcode
  const opcode = (word & 0xF000) >> 12;

  // read all arguments
  // not all instructions use them but this is the general layout
  const args = [];
  for (let i = 2; i >= 0; i--) {
    const value = (word >> (i * 4)) & 0xF;
    args.push(value);
  }

  switch (opcode) {
    case opCodes.IN:
    case opCodes.OUT:
      return this._io(opcode, args);
    case opCodes.MOV:
      return this._mov(args);
    case opCodes.ADD:
    case opCodes.ADDC:
    case opCodes.SUB:
    case opCodes.SUBC:
    case opCodes.DIV:
    case opCodes.DIVC:
    case opCodes.MUL:
    case opCodes.MULC:
      return this._arith(opcode, args);
    case opCodes.BEQ:
    case opCodes.BGT:
      return this._branch(opcode, args);
    case opCodes.JSR:
      return this._call();
    case opCodes.RTS:
      return this._rts();
    case opCodes.STOP:
      return this._stop(args);
    default:
      return Promise.reject(new Error(`Illegal opcode: 0x${opcode.toString(16)}`));
  }
};

Vm.prototype._truncateArithResult = function (result) {
  const truncated = result & 0xFFFF;
  if (truncated & 0x8000) {
    return 2 * minConstant + truncated;
  }
  return truncated;
};

Vm.prototype._io = function (opcode, args) {
  const arrayAddr = this._readAddr(args[0]);
  // i2 determines if the length is in a memory location or encoded
  // as a constant in the instruction.
  const i2 = args[1] & 0x8;
  let length = 0;
  if (i2 !== 0) {
    // The length is in a memory location determined by the third argument.
    length = this._readArg(args[2]);
  } else {
    // Extract the constant encoded in the 8 lowest bits.
    length = (args[1] << 4) | args[2];
  }

  let promise = Promise.resolve();
  this.pendingIO = true;
  switch (opcode) {
    case opCodes.IN:
      for (let i = 0; i < length; i++) {
        const addr = arrayAddr + i;
        promise = promise
          .then(() => this.io.in(addr))
          .then(value => {
            this.pendingIO = false;
            this._writeMem(addr, value);
          });
      }
      break;
    case opCodes.OUT:
      for (let i = 0; i < length; i++) {
        const addr = arrayAddr + i;
        promise = promise
          .then(() => {
            this.pendingIO = false;
            const value = this._readMem(addr);
            return this.io.out(value, addr);
          });
      }
      break;
  }

  return promise.then(() => false);
};

Vm.prototype._mov = function (args) {
  // Type 1
  if (args[2] === 0) {
    const dest = args[0];
    const source = this._readArg(args[1]);
    this._writeArg(dest, source);
    return Promise.resolve(false);
  }

  // Type 2
  if (args[2] === 0x8) {
    const dest = args[0];
    const source = this._nextWord();
    this._writeArg(dest, source);
    return Promise.resolve(false);
  }

  // Type 3 or 4
  const destAddr = this._readAddr(args[0]);
  const sourceAddr = this._readAddr(args[1]);
  let length = 0;
  if (args[2] === 0xF) {
    // Type 3
    length = this._nextWord();
  } else {
    length = this._readArg(args[2]);
  }
  for (let i = 0; i < length; i++) {
    const value = this._readMem(sourceAddr + i);
    this._writeMem(destAddr + i, value);
  }
  return Promise.resolve(false);
};

Vm.prototype._arith = function (opcode, args) {
  const destination = args[0];
  let constant = 0;

  // Arithmetic instructions start with a leading 1 if
  // the instruction has a constant encoded in the next word.
  if ((opcode & 0x8) !== 0) {
    constant = this._nextWord();
  }

  const operands = args.slice(1)
    .map(arg => {
      // Empty arguments indicate that constant should be in its place.
      if (arg === 0) {
        return constant;
      }
      return this._readArg(arg);
    });

  let result = 0;
  // Discard the leading bit.
  opcode = opcode & 0x7;
  switch (opcode) {
    case opCodes.ADD:
      result = operands[0] + operands[1];
      break;
    case opCodes.SUB:
      result = operands[0] - operands[1];
      break;
    case opCodes.MUL:
      result = operands[0] * operands[1];
      break;
    case opCodes.DIV:
      if (operands[1] === 0) {
        return Promise.reject(new Error(`Division by zero`));
      }
      result = (operands[0] / operands[1]) >>> 0;
      break;
  }

  this._writeArg(destination, this._truncateArithResult(result));
  return Promise.resolve(false);
};

Vm.prototype._call = function () {
  const subroutineAddr = this._nextWord();
  this._push(this.pc);
  this.pc = subroutineAddr;
  return Promise.resolve(false);
};

Vm.prototype._rts = function () {
  this.pc = this._pop();
  return Promise.resolve(false);
};

Vm.prototype._branch = function (opcode, args) {
  const operands = args
    .slice(0, -1)
    .map(arg => {
      // 0 values represent a 0 constant.
      if (arg === 0) {
        return 0;
      }
      return this._readArg(arg);
    });

  // If branch target is a constant, read the next word.
  let branchTarget;
  if ((args[2] & 0x8) !== 0) {
    branchTarget = this._nextWord();
  } else {
    branchTarget = this._readArg(args[2]);
  }

  let conditionMet = false;
  switch (opcode) {
    case opCodes.BEQ:
      conditionMet = operands[0] === operands[1];
      break;
    case opCodes.BGT:
      conditionMet = operands[0] > operands[1];
      break;
  }

  if (conditionMet) {
    this.pc = branchTarget;
  }
  return Promise.resolve(false);
};

Vm.prototype._stop = function (args) {
  let promise = Promise.resolve();
  args.forEach(arg => {
    // 0 values represent empty arguments.
    if (arg === 0) {
      return;
    }

    this.pendingIO = true;
    promise = promise.then(() => {
      const address = this._readAddr(arg);
      this.io.out(this._readMem(address), address);
    });
  });
  return promise.then(() => true);
};

// _nextWord reads the next word and increments the program counter.
Vm.prototype._nextWord = function () {
  if (this.pc >= memorySize ||
    this.pc <= fdaSize) {
    throw new Error(`Program counter ${this.pc} out of bounds.`);
  }
  return this.memory[this.pc++];
};

// _readAddr reads the address of the argument.
Vm.prototype._readAddr = function (arg) {
  const addressing = arg & 0x8;
  const register = arg & 0x7;
  if (addressing === 0) {
    return register;
  }
  const address = this._readMem(register);
  return address;
};

// _readArg reads word from a memory location described by the argument.
Vm.prototype._readArg = function (arg) {
  const address = this._readAddr(arg);
  return this._readMem(address);
};

// _writeArg writes word to a memory location described by the argument.
Vm.prototype._writeArg = function (arg, word) {
  const address = this._readAddr(arg);
  return this._writeMem(address, word);
};

// _readMem returns the word in memory at specified address.
Vm.prototype._readMem = function (address) {
  if (address < 0 || address >= memorySize) {
    throw new Error(`Cannot read memory at ${address}: out of bounds`);
  }
  return this.memory[address];
};

// _writeMem writes the word into memory at specified address.
Vm.prototype._writeMem = function (address, word) {
  if (address < 0 || address >= memorySize) {
    throw new Error(`Cannot read memory at ${address}: out of bounds`);
  }
  this.memory[address] = word;
};

// _push pushes a value onto the stack.
Vm.prototype._push = function (value) {
  this._writeMem(this.stackPointer--, value);
};

// _pop pops a value from the stack.
Vm.prototype._pop = function () {
  return this._readMem(++this.stackPointer);
};

exports.Vm = Vm;
