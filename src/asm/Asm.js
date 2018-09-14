const {
  MemoryReferenceArgument,
  ConstantArgument,
} = require("./Argument");

const {
  maxConstant,
  minConstant,
  opCodes,
} = require("../architecture");

function Asm(origin) {
  this.origin = origin;
  this.pc = origin;
  this.code = [];
}

Asm.prototype._put = function (word) {
  this.code.push(word);
  this.pc++;
};

Asm.prototype._putC = function (constant) {
  if (constant > maxConstant) {
    throw new Error(`Constant ${constant} is out of range [${minConstant}..${maxConstant}].`);
  }
  if (constant < minConstant) {
    throw new Error(`Constant ${constant} is out of range [${minConstant}..${maxConstant}]`);
  }

  this._put(constant & 0xFFFF);
};

Asm.prototype._io = function (opcode, args) {
  let word = opcode << 12;
  if (args.length === 1) {
    args.push(new ConstantArgument(1));
  }

  const dest = args[0];
  const source = args[1];

  word |= dest.atIndex(0);
  if (source instanceof MemoryReferenceArgument) {
    word |= 0x80;
    word |= source.atIndex(2);
  } else {
    word |= source.asHalfWord();
  }
  this._put(word);
};

Asm.prototype._mov2 = function (args) {
  const dest = args[0];
  const source = args[1];
  let word = opCodes.MOV << 12;
  word |= dest.atIndex(0);

  if (source instanceof MemoryReferenceArgument) {
    word |= source.atIndex(1);
    this._put(word);
  } else if (source instanceof ConstantArgument) {
    word |= 8;
    this._put(word);
    this._putC(source.value);
    if (source.symbolName) {
      return this._newLabelReference(source.symbolName);
    }
  }
};

Asm.prototype._mov3 = function (args) {
  const dest = args[0];
  const source = args[1];
  const length = args[2];

  let word = opCodes.MOV << 12;

  word |= dest.atIndex(0);
  word |= source.atIndex(1);

  if (length instanceof ConstantArgument) {
    word |= 0xF;
    this._put(word);
    this._putC(length.value);
  } else {
    word |= length.atIndex(2);
    this._put(word);
  }
};

Asm.prototype.in = function (args) {
  this._io(opCodes.IN, args);
};

Asm.prototype.out = function (args) {
  this._io(opCodes.OUT, args);
};

Asm.prototype.mov = function (args) {
  if (args.length === 2) {
    return this._mov2(args);
  }
  return this._mov3(args);
};

Asm.prototype.add = function (args) {
  this._arith(opCodes.ADD, args);
};

Asm.prototype.sub = function (args) {
  this._arith(opCodes.SUB, args);
};

Asm.prototype.mul = function (args) {
  this._arith(opCodes.MUL, args);
};

Asm.prototype.div = function (args) {
  this._arith(opCodes.DIV, args);
};

Asm.prototype.bgt = function (args, branchTarget) {
  return this._branchCond(opCodes.BGT, args, branchTarget);
};

Asm.prototype.beq = function (args, branchTarget) {
  return this._branchCond(opCodes.BEQ, args, branchTarget);
};

Asm.prototype.jsr = function (branchTarget) {
  let word = opCodes.JSR << 12;
  this._put(word);
  this._putC(0x7FFF);
  return this._newLabelReference(branchTarget.symbolName);
};

Asm.prototype.rts = function () {
  this._put(opCodes.RTS << 12);
};

Asm.prototype._branchCond = function (opcode, args, branchTarget) {
  let word = opcode << 12;
  args
    .forEach((arg, index) => {
      if (arg instanceof MemoryReferenceArgument) {
        word |= arg.atIndex(index);
      }
    });

  // Constant 0 is allowed as an argument, but there's no need to handle
  // it in any special way as it will be properly set.

  // The logic for branch target addressing is the opposite:
  // If indirect addressing is used i3 should equal 0!
  if (branchTarget.isIndirect) {
    branchTarget.isIndirect = false;
    word |= branchTarget.atIndex(2);
    this._put(word);
    return null;
  }


  // Set i3 to 1 - constant should follow.
  word |= 0x8;
  this._put(word);
  this._putC(0x7FFF);
  return this._newLabelReference(branchTarget.symbolName);
};

Asm.prototype._arith = function (opcode, args) {
  let word = opcode << 12;
  const hasConstant = args
    .filter(arg => arg instanceof ConstantArgument)
    .length > 0;

  // Merge memory reference arguments.
  args
    .forEach((arg, index) => {
      if (arg instanceof MemoryReferenceArgument) {
        word |= arg.atIndex(index);
      }
    });

  // Modify opcode for constant specific instructions.
  if (hasConstant) {
    word |= 0x8000;
  }

  this._put(word);

  args
    .filter(arg => arg instanceof ConstantArgument)
    .forEach(arg => this._putC(arg.value));
};

Asm.prototype.stop = function (args) {
  let word = opCodes.STOP << 12;
  args.forEach((arg, index) => {
    word |= arg.atIndex(index);
  });
  this._put(word);
};

Asm.prototype._newLabelReference = function (symbolName) {
  const addr = this.code.length - 1;
  return {
    symbolName: symbolName,
    patch: (value) => {
      this.code[addr] = value;
    }
  };
};

exports.Asm = Asm;
