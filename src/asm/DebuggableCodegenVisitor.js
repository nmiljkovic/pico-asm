const {CodegenVisitor} = require("./CodegenVisitor");
const {DebuggableAsm} = require("./DebuggableAsm");

function DebuggableCodegenVisitor() {
  CodegenVisitor.call(this);
}

DebuggableCodegenVisitor.prototype = Object.create(CodegenVisitor.prototype);
DebuggableCodegenVisitor.prototype.constructor = DebuggableCodegenVisitor;

DebuggableCodegenVisitor.prototype.visitProgram = function (ctx) {
  const result = CodegenVisitor.prototype.visitProgram.apply(this, arguments);
  result.symbolMap = this.symbols;
  result.sourceMap = this.asm.sourceMap;
  return result;
};

DebuggableCodegenVisitor.prototype.visitOrigin = function (ctx) {
  CodegenVisitor.prototype.visitOrigin.apply(this, arguments);
  this.asm = new DebuggableAsm(this.origin);
};

DebuggableCodegenVisitor.prototype.visitLine = function (ctx) {
  this.asm.mapLine(ctx.start.line);
  CodegenVisitor.prototype.visitLine.apply(this, arguments);
};

exports.DebuggableCodegenVisitor = DebuggableCodegenVisitor;
