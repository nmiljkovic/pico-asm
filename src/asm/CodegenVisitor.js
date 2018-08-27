const {PicoVisitor} = require("../parser/PicoVisitor");
const {PicoParser} = require("../parser/PicoParser");
const {Asm} = require("./Asm");
const {
  MemoryReferenceArgument,
  ConstantArgument,
} = require("./Argument");

const {
  SymbolDirectArgContext,
  SymbolIndirectArgContext,
  SymbolConstantArgContext,
  ConstantArgContext
} = PicoParser;

function visitChildren(ctx) {
  if (!ctx.children) {
    return;
  }
  ctx.children.forEach(child => child.accept(this));
}

function CodegenVisitor() {
  PicoVisitor.call(this);
  this.symbols = new Map();
  this.labels = [];
  this.branches = [];
  return this;
}

CodegenVisitor.prototype = Object.create(PicoVisitor.prototype);
CodegenVisitor.prototype.constructor = CodegenVisitor;

CodegenVisitor.prototype._getSymbol = function (symbol) {
  return this.symbols.get(symbol.toLowerCase());
};

CodegenVisitor.prototype._setSymbol = function (symbol, value) {
  return this.symbols.set(symbol.toLowerCase(), value);
};

CodegenVisitor.prototype._setLabel = function (name, value) {
  name = name.toLowerCase();
  this.labels = this.labels.filter(label => label !== name);
  this.labels.push(name);
  return this._setSymbol(name, value);
};

CodegenVisitor.prototype.resolveArgumentTypes = function (ctx) {
  const args = ctx.argument();
  const resolved = [];
  for (let i = 0; i < args.length; i++) {
    resolved.push(args[i].accept(this));
  }
  return resolved;
};

CodegenVisitor.prototype.patchBranchAddresses = function () {
  this.branches.forEach(target => {
    const destination = this._getSymbol(target.symbolName);
    target.patch(destination);
  });
};

CodegenVisitor.prototype.visitProgram = function (ctx) {
  ctx.symbols().accept(this);
  ctx.origin().accept(this);
  ctx.instructions().accept(this);

  this.patchBranchAddresses();

  return {
    origin: this.origin,
    bytecode: this.asm.code,
    labels: this.labels,
  };
};

CodegenVisitor.prototype.visitLine = visitChildren;
CodegenVisitor.prototype.visitSymbols = visitChildren;
CodegenVisitor.prototype.visitInstructions = visitChildren;

CodegenVisitor.prototype.visitOrigin = function (ctx) {
  const constant = ctx.constant();
  const origin = constant.accept(this);
  this.origin = origin;
  this.asm = new Asm(origin);
};

CodegenVisitor.prototype.visitSymbolDecl = function (ctx) {
  const identifier = ctx.identifier();
  const constant = ctx.constant();
  const name = identifier.accept(this);
  const value = constant.accept(this);
  this._setSymbol(name, value);
};

CodegenVisitor.prototype.visitArithmeticInstr = function (ctx) {
  const mnemonic = ctx.children[0].getText().toLowerCase();
  const args = this.resolveArgumentTypes(ctx);
  this.asm[mnemonic](args);
};

CodegenVisitor.prototype.visitMoveInstr = function (ctx) {
  const args = this.resolveArgumentTypes(ctx);
  this.asm.mov(args);
};

CodegenVisitor.prototype.visitIoInstr = function (ctx) {
  const mnemonic = ctx.children[0].getText().toLowerCase();
  const args = this.resolveArgumentTypes(ctx);
  this.asm[mnemonic](args);
};

CodegenVisitor.prototype.visitBranchInstr = function (ctx) {
  const mnemonic = ctx.children[0].getText().toLowerCase();
  const args = this.resolveArgumentTypes(ctx);
  const branchTarget = ctx.branchTarget().accept(this);
  const branchToFix = this.asm[mnemonic](args, branchTarget);
  if (branchToFix) {
    this.branches.push(branchToFix);
  }
};

CodegenVisitor.prototype.visitBranchTarget = function (ctx) {
  return ctx.children[0].accept(this);
};

CodegenVisitor.prototype.visitCallInstr = function (ctx) {
  const branchTarget = ctx.symbolDirectArg().accept(this);
  const branchToFix = this.asm.jsr(branchTarget);
  this.branches.push(branchToFix);
};

CodegenVisitor.prototype.visitReturnInstr = function (ctx) {
  this.asm.rts();
};

CodegenVisitor.prototype.visitStopInstr = function (ctx) {
  const args = this.resolveArgumentTypes(ctx);
  this.asm.stop(args);
};

CodegenVisitor.prototype.visitIdentifier = function (ctx) {
  return ctx.getText();
};

CodegenVisitor.prototype.visitConstant = function (ctx) {
  const constant = parseInt(ctx.getText(), 10);
  return constant;
};

CodegenVisitor.prototype.visitLabel = function (ctx) {
  const identifier = ctx.identifier();
  const name = identifier.accept(this);
  this._setLabel(name, this.asm.pc);
};

CodegenVisitor.prototype.visitArgument = function (ctx) {
  return ctx.children[0].accept(this);
};

CodegenVisitor.prototype._visitMemoryReference = function (ctx) {
  const isIndirect = ctx instanceof SymbolIndirectArgContext;
  const symbolName = ctx.identifier().accept(this);
  const value = this._getSymbol(symbolName);
  return new MemoryReferenceArgument(isIndirect, symbolName, value || 0);
};

CodegenVisitor.prototype.visitSymbolDirectArg = CodegenVisitor.prototype._visitMemoryReference;
CodegenVisitor.prototype.visitSymbolIndirectArg = CodegenVisitor.prototype._visitMemoryReference;
CodegenVisitor.prototype.visitSymbolConstantArg = function (ctx) {
  const symbolName = ctx.identifier().accept(this);
  const value = this._getSymbol(symbolName);
  return new ConstantArgument(value);
};
CodegenVisitor.prototype.visitConstantArg = function (ctx) {
  const constant = ctx.constant().accept(this);
  return new ConstantArgument(constant);
};

exports.CodegenVisitor = CodegenVisitor;
