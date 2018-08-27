const PicoParser = require("../parser/PicoParser").PicoParser;
const errorMessages = require("./ErrorMessages");
const {
  SymbolDirectArgContext,
  SymbolIndirectArgContext,
  SymbolConstantArgContext,
  ConstantArgContext
} = PicoParser;

const {fdaSize, memorySize} = require("../architecture");
const maxAddress = memorySize - 1;

function Argument(analyzer, ctx) {
  this.analyzer = analyzer;
  this.ctx = ctx;
  this.value = 1;
  this.isBranchTarget = false;
  if (ctx.identifier) {
    this.identifier = ctx.identifier().accept(this.analyzer);
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
    types.push(arguments[i].name.replace("ArgContext", ""));
  }
  this.analyzer.newError(
    this.ctx,
    errorMessages.invalidArgumentType(types)
  );
  return false;
};

Argument.prototype.assertSymbolExists = function () {
  if (this.isOfType(ConstantArgContext)) {
    this.value = this.ctx.constant().accept(this.analyzer);
    return true;
  }

  const symbolName = this.identifier;
  if (!this.analyzer.hasSymbol(symbolName)) {
    this.newError(
      errorMessages.symbolNotDefined(symbolName)
    );
    return false;
  }

  this.value = this.analyzer.getSymbol(symbolName);
  if (this.isBranchTarget) {
    this._assertBranchTargetInRange();
    return this.value;
  }

  this._assertSymbolInRange();
  return this.value;
};

Argument.prototype._assertBranchTargetInRange = function () {
  const supportedBranchType = this.assertOfType(
    SymbolDirectArgContext,
    SymbolIndirectArgContext,
  );
  if (!supportedBranchType) {
    return;
  }

  if (this.isOfType(SymbolDirectArgContext) &&
    this.value <= fdaSize) {
    this.newError(
      errorMessages.addressError(this.getText(), [fdaSize + 1, maxAddress])
    );
  }

  if (this.isOfType(SymbolIndirectArgContext) && this.value > fdaSize) {
    this.newError(
      errorMessages.addressError(this.getText(), [0, fdaSize])
    );
  }
};

Argument.prototype._assertSymbolInRange = function () {
  let maxAllowedSize = maxAddress;
  if (this.isOfType(SymbolDirectArgContext, SymbolIndirectArgContext)) {
    maxAllowedSize = fdaSize;
  }

  if (this.value > maxAllowedSize) {
    this.newError(
      errorMessages.addressError(this.getText(), [0, maxAllowedSize])
    );
  }
};

Argument.prototype.getText = function () {
  return this.ctx.getText();
};

Argument.prototype.newError = function (message) {
  return this.analyzer.newError(this.ctx, message);
};

exports.Argument = Argument;
