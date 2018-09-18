const {PicoVisitor} = require("../parser/PicoVisitor");
const {PicoParser} = require("../parser/PicoParser");
const {Argument} = require("./Argument");
const errorMessages = require("./ErrorMessages");

const {
  SymbolDirectArgContext,
  SymbolIndirectArgContext,
  SymbolConstantArgContext,
  ConstantArgContext
} = PicoParser;

const {fdaSize, maxConstant, minConstant} = require("../architecture");

function AnalysisVisitor() {
  PicoVisitor.call(this);
  return this;
}

function visitChildren(ctx) {
  if (!ctx.children) {
    return;
  }
  ctx.children.forEach(child => child.accept(this));
}

AnalysisVisitor.prototype = Object.create(PicoVisitor.prototype);
AnalysisVisitor.prototype.constructor = AnalysisVisitor;

AnalysisVisitor.prototype.newError = function (ctx, message) {
  this.errors.push({
    line: ctx.start.line,
    startColumn: ctx.start.column,
    endColumn: ctx.stop.column,
    message: message
  });
};

AnalysisVisitor.prototype._visitArgument = function (ctx) {
  return new Argument(this, ctx);
};

AnalysisVisitor.prototype.resolveArgumentTypes = function (ctx) {
  const args = ctx.argument();
  const resolved = [];
  for (let i = 0; i < args.length; i++) {
    resolved.push(args[i].accept(this));
  }
  return resolved;
};

// Errors are usually added in order as they occur. An exception to that rule
// are branch/jump errors, as labels might not exist yet (branching forward).
// They are added into the errors array at the end.
AnalysisVisitor.prototype.sortErrors = function (symbolName) {
  this.errors.sort((left, right) => {
    if (left.line === right.line) {
      return left.startColumn - right.endColumn;
    }
    return left.line - right.line;
  });
};

AnalysisVisitor.prototype.hasSymbol = function (symbolName) {
  return this.symbols.has(symbolName.toLowerCase());
};

AnalysisVisitor.prototype.getSymbol = function (symbolName) {
  return this.symbols.get(symbolName.toLowerCase());
};

AnalysisVisitor.prototype.setSymbol = function (symbolName, value) {
  return this.symbols.set(symbolName.toLowerCase(), value);
};

AnalysisVisitor.prototype.visitChildren = visitChildren;

AnalysisVisitor.prototype.visitProgram = function (ctx) {
  this.errors = [];
  this.symbols = new Map();

  ctx.symbols().accept(this);
  ctx.origin().accept(this);
  ctx.instructions().accept(this);

  this.sortErrors();

  return this.errors;
};

// Handle symbol declaration:
// * symbol must not exist
// * symbol value cannot be negative
AnalysisVisitor.prototype.visitSymbolDecl = function (ctx) {
  const identifier = ctx.identifier();
  const constant = ctx.constant();
  const name = identifier.accept(this);
  let value = constant.accept(this);
  // The symbol must not exist beforehand.
  if (this.hasSymbol(name)) {
    this.newError(identifier, errorMessages.symbolAlreadyDefined(name));
    return;
  }
  // Symbol's value must be inside bounds.
  if (value < minConstant || value > maxConstant) {
    this.newError(constant, errorMessages.symbolValueOutOfRange(name, value));
    value = 1;
  }
  this.setSymbol(name, value);
};

// Handle origin statement.
// Origin must start after fixed data area.
AnalysisVisitor.prototype.visitOrigin = function (ctx) {
  const constant = ctx.constant();
  const origin = constant.accept(this);
  if (origin <= fdaSize) {
    this.newError(constant, errorMessages.originInvalidValue(fdaSize + 1));
  }
};

AnalysisVisitor.prototype.visitInstructions = function (ctx) {
  // First visit all labels, then all instructions.
  // This ensures all labels are defined as symbols
  // before evaluating instructions.
  ctx.line().forEach(instruction => {
    if (instruction.label()) {
      instruction.label().accept(this);
    }
  });

  let instructionCount = 0;
  ctx.line().forEach(instruction => {
    if (instruction.instruction()) {
      instructionCount++;
      instruction.instruction().accept(this);
    }
  });

  if (instructionCount === 0) {
    this.newError(ctx, errorMessages.noInstructions());
  }
};

// Handle label declaration:
// * symbol must not be declared beforehand - no other label or symbol can
//   exist with the same name.
AnalysisVisitor.prototype.visitLabel = function (ctx) {
  const identifier = ctx.identifier();
  const name = identifier.accept(this);
  if (this.hasSymbol(name)) {
    this.newError(identifier, errorMessages.symbolAlreadyDefined(name));
    return;
  }
  // Symbol value is 8 so it ensures it cannot be used
  // in certain instructions which can only access FDA.
  this.setSymbol(name, 8);
};

// Verify move instruction arguments:
// * 1st argument must be a memory location
AnalysisVisitor.prototype.visitMoveInstr = function (ctx) {
  const args = this.resolveArgumentTypes(ctx);
  args.forEach(arg => arg.assertSymbolExists());

  if (args.length) {
    // First argument must be a memory location.
    const first = args[0];
    first.assertOfType(
      SymbolDirectArgContext,
      SymbolIndirectArgContext
    );
  }

  if (args.length === 3) {
    const third = args[2];
    third.assertOfType(
      ConstantArgContext,
      SymbolDirectArgContext,
      SymbolConstantArgContext,
    );
  }
};

AnalysisVisitor.prototype.visitArithmeticInstr = function (ctx) {
  const args = this.resolveArgumentTypes(ctx);
  const destination = args[0];
  const operands = args.slice(1);

  // Destination can only be a symbol reference
  // with direct or indirect addressing.
  destination.assertOfType(
    SymbolDirectArgContext,
    SymbolIndirectArgContext,
  );
  destination.assertSymbolExists();

  // Ensure that only a single operand can be a constant.
  const constants = operands.filter(operand => operand.isOfType(
    SymbolConstantArgContext,
    ConstantArgContext,
  ));
  // Range check constant operands.
  constants.forEach(operand => operand.assertSymbolExists());
  if (constants.length > 1) {
    this.newError(ctx, errorMessages.singleConstant());
  }

  // Ensure memory references cannot reference zero.
  operands
    .filter(operand => operand.isOfType(
      SymbolDirectArgContext,
      SymbolIndirectArgContext,
    ))
    .filter(operand => operand.assertSymbolExists([1, fdaSize]));
};

// Verify branch instruction arguments.
// * If any constants are provided, they must be 0
// * 3rd argument (branch target) must be a symbol direct or indirect memory access
AnalysisVisitor.prototype.visitBranchInstr = function (ctx) {
  const args = this.resolveArgumentTypes(ctx);
  const branchTarget = ctx.branchTarget().accept(this);

  const constantArgs = args
    .filter(arg => arg.isOfType(ConstantArgContext));

  if (constantArgs.length > 1) {
    this.newError(ctx, errorMessages.singleConstant());
  }

  constantArgs
    .filter(arg => arg.value !== 0)
    .forEach(arg => {
      this.newError(arg.ctx, errorMessages.constantMustBeZero());
    });

  args.forEach(arg => {
    arg.assertOfType(
      SymbolDirectArgContext,
      SymbolIndirectArgContext,
      ConstantArgContext
    );
    arg.assertSymbolExists();
  });

  // Verify that branch target is either a
  // memory direct or memory indirect access.
  branchTarget.assertOfType(
    SymbolDirectArgContext,
    SymbolIndirectArgContext,
  );
  branchTarget.assertBranchTargetExists();
};

AnalysisVisitor.prototype.visitIoInstr = function (ctx) {
  const args = this.resolveArgumentTypes(ctx);
  args.forEach(arg => arg.assertSymbolExists());

  const sourceOrDest = args[0];
  sourceOrDest.assertOfType(
    SymbolDirectArgContext,
    SymbolIndirectArgContext,
  );

  if (args.length !== 2) {
    return;
  }

  const length = args[1];
  const isConstant = length.isOfType(
    SymbolConstantArgContext,
    ConstantArgContext
  );
  if (!isConstant) {
    return;
  }

  // IO instructions have a different allowed constant range since
  // the value is encoded into the instruction instead of the next word.
  if (length.value < 1 || length.value > 127) {
    const message = errorMessages.constantRangeError(
      length.ctx.getText(), [1, 127]
    );
    this.newError(length.ctx, message);
  }
};

// Verify stop instruction arguments.
// Stop instruction receives 0, 1, 2 or 3 arguments of memory locations to print.
// These memory locations must be a symbol direct or indirect memory access and
// cannot address 0 in FDA.
AnalysisVisitor.prototype.visitStopInstr = function (ctx) {
  const args = this.resolveArgumentTypes(ctx);
  args
    .filter(arg => arg.assertOfType(
      SymbolDirectArgContext,
      SymbolIndirectArgContext
    ))
    .forEach(arg => arg.assertSymbolExists([1, fdaSize]));
};

AnalysisVisitor.prototype.visitCallInstr = function (ctx) {
  const subroutine = ctx.symbolDirectArg().accept(this);
  subroutine.assertBranchTargetExists();
};

// Returns identifier name.
AnalysisVisitor.prototype.visitIdentifier = function (ctx) {
  return ctx.getText();
};

// Parses constant as integer of base 10.
AnalysisVisitor.prototype.visitConstant = function (ctx) {
  return parseInt(ctx.getText(), 10);
};

// Type checks argument.
AnalysisVisitor.prototype.visitArgument = function (ctx) {
  return ctx.children[0].accept(this);
};

// Saves branch target reference for 2nd pass type checking.
AnalysisVisitor.prototype.visitBranchTarget = function (ctx) {
  const symbol = ctx.children[0].accept(this);
  return symbol;
};

AnalysisVisitor.prototype.visitSymbolDirectArg = AnalysisVisitor.prototype._visitArgument;
AnalysisVisitor.prototype.visitSymbolIndirectArg = AnalysisVisitor.prototype._visitArgument;
AnalysisVisitor.prototype.visitSymbolConstantArg = AnalysisVisitor.prototype._visitArgument;
AnalysisVisitor.prototype.visitConstantArg = AnalysisVisitor.prototype._visitArgument;

exports.AnalysisVisitor = AnalysisVisitor;
