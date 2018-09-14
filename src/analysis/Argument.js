const PicoParser = require("../parser/PicoParser").PicoParser;
const errorMessages = require("./ErrorMessages");
const {
  SymbolDirectArgContext,
  SymbolIndirectArgContext,
  SymbolConstantArgContext,
  ConstantArgContext
} = PicoParser;

function getArgumentName(klass) {
  if (klass === SymbolDirectArgContext) {
    return "SymbolDirect";
  }
  if (klass === SymbolIndirectArgContext) {
    return "SymbolIndirect";
  }
  if (klass === SymbolConstantArgContext) {
    return "SymbolConstant";
  }
  if (klass === ConstantArgContext) {
    return "Constant";
  }
  throw new Error("unknown argument type provided");
}

const {
  fdaSize, memorySize,
  minConstant, maxConstant
} = require("../architecture");
const maxAddress = memorySize - 1;

function Argument(analyzer, ctx) {
  this.analyzer = analyzer;
  this.ctx = ctx;
  this.value = 1;
  if (ctx.identifier) {
    this.identifier = ctx.identifier().accept(this.analyzer);
  }
  if (this.isOfType(ConstantArgContext)) {
    this.value = ctx.constant().accept(analyzer);
  }
}

Argument.prototype.isOfType = function () {
  for (let i = 0; i < arguments.length; i++) {
    if (this.ctx instanceof arguments[i]) {
      return true;
    }
  }
  return false;
};

Argument.prototype.assertOfType = function () {
  if (this.isOfType.apply(this, arguments)) {
    return true;
  }

  const types = [];
  for (let i = 0; i < arguments.length; i++) {
    types.push(getArgumentName(arguments[i]));
  }
  this.analyzer.newError(
    this.ctx,
    errorMessages.invalidArgumentType(types)
  );
  return false;
};

Argument.prototype.assertSymbolExists = function (allowedRange) {
  if (this.isOfType(ConstantArgContext)) {
    this._assertConstantInRange();
    return true;
  }

  if (!this._assertSymbolExists()) {
    return false;
  }

  this.value = this.analyzer.getSymbol(this.identifier);

  this._assertSymbolInRange(allowedRange);
  return this.value;
};

Argument.prototype.assertBranchTargetExists = function () {
  const symbolName = this.identifier;
  if (!this.analyzer.hasSymbol(symbolName)) {
    this.newError(
      errorMessages.symbolNotDefined(symbolName)
    );
    return false;
  }
};

Argument.prototype._assertSymbolExists = function () {
  const symbolName = this.identifier;
  if (!this.analyzer.hasSymbol(symbolName)) {
    this.newError(
      errorMessages.symbolNotDefined(symbolName)
    );
    return false;
  }
  return true;
};

Argument.prototype._assertSymbolInRange = function (allowedRange) {
  if (!allowedRange) {
    allowedRange = [0, maxAddress];
  }

  if (this.isOfType(SymbolDirectArgContext, SymbolIndirectArgContext)) {
    allowedRange[1] = fdaSize;
  }

  if (this.value < allowedRange[0] || this.value > allowedRange[1]) {
    this.newError(
      errorMessages.addressError(this.getText(), allowedRange)
    );
  }
};

Argument.prototype._assertConstantInRange = function () {
  if (this.value >= minConstant && this.value <= maxConstant) {
    return;
  }

  this.newError(
    errorMessages.constantRangeError(
      this.ctx.getText(),
      [minConstant, maxConstant]
    )
  );
};

Argument.prototype.getText = function () {
  return this.ctx.getText();
};

Argument.prototype.newError = function (message) {
  return this.analyzer.newError(this.ctx, message);
};

exports.Argument = Argument;
