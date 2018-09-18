const PicoVisitor = require("./parser/PicoVisitor").PicoVisitor;
const PicoLexer = require("./parser/PicoLexer").PicoLexer;

function PrettyPrintVisitor() {
  PicoVisitor.call(this);
  // Instruction indent.
  this.indent = "    ";
  // Margin between line and comment.
  this.lineMargin = "  ";
  // A map of label to line length.
  this.indentMap = new Map();
  this.latestLabel = "";
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
  output.push(instructions.replace(/\s+$/, "") + "\n");
  return output.join("\n");
};

PrettyPrintVisitor.prototype.visitComment = function (ctx) {
  return ctx.getText();
};

// _setLineLength sets maximum line length for current label.
PrettyPrintVisitor.prototype._setLineLength = function (line) {
  const lineLength = this.indentMap.get(this.latestLabel) || 0;
  const max = lineLength > line.length ? lineLength : line.length;
  this.indentMap.set(this.latestLabel, max);
};

// Pad line
PrettyPrintVisitor.prototype._padLine = function (line, comment) {
  const maxLength = this.indentMap.get(this.latestLabel);
  if (comment) {
    return line.padEnd(maxLength, " ") + this.lineMargin + comment;
  }
  return line;
};

PrettyPrintVisitor.prototype.visitInstructions = function (ctx) {
  // First pass through all lines to find the maximum line length.
  // These lengths are separated per label.
  ctx.line().forEach(instruction => {
    if (instruction.label()) {
      const label = instruction.label().accept(this);
      this.latestLabel = label;
      this._setLineLength(label);
    }
    if (instruction.instruction()) {
      const instr = instruction.instruction().accept(this);
      this._setLineLength(this.indent + instr);
    }
  });

  // Use the information recovered from the previous pass to properly format
  // all labels, lines and comments.
  this.latestLabel = "";
  const output = [];

  ctx.line().forEach(ctx => {
    const label = ctx.label() ? ctx.label().accept(this) : "";
    const instruction = ctx.instruction() ? ctx.instruction().accept(this) : "";
    const comment = ctx.comment() ? ctx.comment().accept(this) : "";

    if (label.length) {
      this.latestLabel = label;
      // If the label doesn't have an instruction accompanied in the same line
      // format label + comment, otherwise format label on the first line
      // and instruction + comment on the second line.
      if (!instruction.length) {
        output.push(this._padLine(label, comment));
      } else {
        output.push(label);
        output.push(this._padLine(this.indent + instruction, comment));
      }
    } else if (instruction) {
      output.push(this._padLine(this.indent + instruction, comment));
    } else if (comment) {
      output.push(this._padLine(this.indent + comment));
    } else {
      output.push("");
    }
  });

  return output.join("\n");
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
