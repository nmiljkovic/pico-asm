const PicoVisitor = require("./parser/PicoVisitor").PicoVisitor;

function PrettyPrintVisitor() {
  PicoVisitor.call(this);
  this.indent = "\t";
  return this;
}

PrettyPrintVisitor.prototype = Object.create(PicoVisitor.prototype);
PrettyPrintVisitor.prototype.constructor = PrettyPrintVisitor;

function visitChildren(ctx) {
  if (!ctx.children) {
    return "";
  }
  return ctx.children.map(child => {
    return child.accept(this);
  }).filter(x => x).join("\n");
}

function visitArguments(ctx) {
  const args = ctx.argument();
  const output = [];
  for (let i = 0; i < args.length; i++) {
    output.push(args[i].accept(this));
  }
  return output.join(", ");
}

PrettyPrintVisitor.prototype.visitProgram = function (ctx) {
  const symbols = ctx.symbols().accept(this);
  const origin = ctx.origin().accept(this);
  const instructions = ctx.instructions().accept(this);

  let output = [];
  if (symbols.length) {
    output.push(symbols + "\n");
  }
  output.push(origin + "\n");
  output.push(instructions + "\n");
  return output.join("\n");
};
PrettyPrintVisitor.prototype.visitSymbols = visitChildren;
PrettyPrintVisitor.prototype.visitInstructions = visitChildren;
PrettyPrintVisitor.prototype.visitLine = visitChildren;

PrettyPrintVisitor.prototype.visitSymbolDecl = function (ctx) {
  const identifier = ctx.identifier().accept(this);
  const value = ctx.constant().accept(this);
  return `${this.indent}${identifier} = ${value}`;
};

PrettyPrintVisitor.prototype.visitOrigin = function (ctx) {
  const address = ctx.constant().accept(this);
  return `${this.indent}org ${address}`;
};

PrettyPrintVisitor.prototype.visitLabel = function (ctx) {
  const labelName = ctx.identifier().accept(this);
  return `${labelName}:`;
};

PrettyPrintVisitor.prototype.visitIdentifier = function (ctx) {
  return ctx.getText();
};

PrettyPrintVisitor.prototype.visitConstant = function (ctx) {
  return ctx.getText();
};

PrettyPrintVisitor.prototype.visitInstruction = function (ctx) {
  return this.indent + ctx.children[0].accept(this);
};

PrettyPrintVisitor.prototype.visitMoveInstr = function (ctx) {
  const args = visitArguments.call(this, ctx);
  return `mov ${args}`;
};

PrettyPrintVisitor.prototype.visitIoInstr = function (ctx) {
  const instr = ctx.children[0].getText().toLowerCase();
  const args = visitArguments.call(this, ctx);
  return `${instr} ${args}`;
};

PrettyPrintVisitor.prototype.visitArithmeticInstr = function (ctx) {
  const mnemonic = ctx.children[0].getText().toLowerCase();
  const args = visitArguments.call(this, ctx);
  return `${mnemonic} ${args}`;
};

PrettyPrintVisitor.prototype.visitBranchInstr = function (ctx) {
  const mnemonic = ctx.children[0].getText().toLowerCase();
  const args = visitArguments.call(this, ctx);
  const branchTarget = ctx.branchTarget().accept(this);
  return `${mnemonic} ${args}, ${branchTarget}`;
};

PrettyPrintVisitor.prototype.visitBranchTarget = function (ctx) {
  const target = ctx.children[0].accept(this);
  return target;
};

PrettyPrintVisitor.prototype.visitStopInstr = function (ctx) {
  const args = visitArguments.call(this, ctx);
  if (args.length) {
    return `stop ${args}`;
  }
  return `stop`;
};

PrettyPrintVisitor.prototype.visitCallInstr = function (ctx) {
  const symbol = ctx.symbolDirectArg().accept(this);
  return `jsr ${symbol}`;
};

PrettyPrintVisitor.prototype.visitReturnInstr = function (ctx) {
  return `rts`;
};

PrettyPrintVisitor.prototype.visitArgument = function (ctx) {
  return ctx.children[0].accept(this);
};

PrettyPrintVisitor.prototype.visitSymbolConstantArg = function (ctx) {
  return "#" + ctx.identifier().accept(this);
};

PrettyPrintVisitor.prototype.visitSymbolDirectArg = function (ctx) {
  return ctx.identifier().accept(this);
};

PrettyPrintVisitor.prototype.visitConstantArg = function (ctx) {
  return ctx.constant().accept(this);
};

PrettyPrintVisitor.prototype.visitSymbolIndirectArg = function (ctx) {
  return "(" + ctx.identifier().accept(this) + ")";
};

exports.PrettyPrintVisitor = PrettyPrintVisitor;
