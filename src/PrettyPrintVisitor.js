const PicoVisitor = require("./parser/PicoVisitor").PicoVisitor;
const PicoLexer = require("./parser/PicoLexer").PicoLexer;

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
  return ctx.children
    .map(child => child.accept(this))
    .join("\n");
}

function visitArguments(ctx) {
  const args = ctx.argument();
  const output = [];
  for (let i = 0; i < args.length; i++) {
    output.push(args[i].accept(this));
  }
  return output.join(", ");
}

PrettyPrintVisitor.prototype.visitChildren = visitChildren;

PrettyPrintVisitor.prototype._normalizeSymbolName = function (name) {
  if (this.symbolMap.has(name.toLowerCase())) {
    return this.symbolMap.get(name.toLowerCase());
  }
  return name;
};

PrettyPrintVisitor.prototype.visitProgram = function (ctx) {
  this.symbolMap = new Map();
  const symbols = ctx.symbols().accept(this);
  const origin = ctx.origin().accept(this);
  const instructions = ctx.instructions().accept(this);

  let output = [];
  if (symbols.length) {
    output.push(symbols);
  }
  output.push(origin);
  output.push(instructions + "\n");
  return output.join("\n");
};

PrettyPrintVisitor.prototype.visitComment = function (ctx) {
  return ctx.getText();
};

PrettyPrintVisitor.prototype.visitLine = function (ctx) {
  let output = "";
  if (ctx.label()) {
    output += ctx.label().accept(this);
  }
  if (ctx.instruction()) {
    if (output.length) {
      output += "\n";
    }
    output += "\t" + ctx.instruction().accept(this);
  }
  if (ctx.comment()) {
    output += "\t" + ctx.comment().accept(this);
  }
  return output;
};

PrettyPrintVisitor.prototype.visitSymbolDeclLine = function (ctx) {
  let output = "";
  if (ctx.symbolDecl()) {
    output += this.indent + ctx.symbolDecl().accept(this);
  }
  if (ctx.comment()) {
    output += this.indent + ctx.comment().accept(this);
  }
  return output;
};

PrettyPrintVisitor.prototype.visitSymbolDecl = function (ctx) {
  const identifier = ctx.identifier().accept(this);
  const value = ctx.constant().accept(this);
  this.symbolMap.set(identifier.toLowerCase(), identifier);
  return `${identifier} = ${value}`;
};

PrettyPrintVisitor.prototype.visitOrigin = function (ctx) {
  const address = ctx.constant().accept(this);
  const comment = ctx.comment() ? this.indent + ctx.comment().accept(this) : "";
  return `${this.indent}org ${address}${comment}`;
};

PrettyPrintVisitor.prototype.visitLabel = function (ctx) {
  const labelName = ctx.identifier().accept(this);
  this.symbolMap.set(labelName.toLowerCase(), labelName);
  return `${labelName}:`;
};

PrettyPrintVisitor.prototype.visitIdentifier = function (ctx) {
  return ctx.getText();
};

PrettyPrintVisitor.prototype.visitConstant = function (ctx) {
  return ctx.getText();
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

PrettyPrintVisitor.prototype.visitSymbolConstantArg = function (ctx) {
  const symbolName = ctx.identifier().accept(this);
  return `#${this._normalizeSymbolName(symbolName)}`;
};

PrettyPrintVisitor.prototype.visitSymbolDirectArg = function (ctx) {
  const symbolName = ctx.identifier().accept(this);
  return this._normalizeSymbolName(symbolName);
};

PrettyPrintVisitor.prototype.visitConstantArg = function (ctx) {
  return ctx.constant().accept(this);
};

PrettyPrintVisitor.prototype.visitSymbolIndirectArg = function (ctx) {
  const symbolName = ctx.identifier().accept(this);
  return `(${this._normalizeSymbolName(symbolName)})`;
};

exports.PrettyPrintVisitor = PrettyPrintVisitor;
