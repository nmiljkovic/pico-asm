// Generated from Pico.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require("antlr4/index");

// This class defines a complete generic visitor for a parse tree produced by PicoParser.

function PicoVisitor() {
  antlr4.tree.ParseTreeVisitor.call(this);
  return this;
}

PicoVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PicoVisitor.prototype.constructor = PicoVisitor;

// Visit a parse tree produced by PicoParser#program.
PicoVisitor.prototype.visitProgram = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#symbols.
PicoVisitor.prototype.visitSymbols = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#symbolDeclLine.
PicoVisitor.prototype.visitSymbolDeclLine = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#symbolDecl.
PicoVisitor.prototype.visitSymbolDecl = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#origin.
PicoVisitor.prototype.visitOrigin = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#instructions.
PicoVisitor.prototype.visitInstructions = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#line.
PicoVisitor.prototype.visitLine = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#instruction.
PicoVisitor.prototype.visitInstruction = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#moveInstr.
PicoVisitor.prototype.visitMoveInstr = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#arithmeticInstr.
PicoVisitor.prototype.visitArithmeticInstr = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#branchInstr.
PicoVisitor.prototype.visitBranchInstr = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#branchTarget.
PicoVisitor.prototype.visitBranchTarget = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#ioInstr.
PicoVisitor.prototype.visitIoInstr = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#callInstr.
PicoVisitor.prototype.visitCallInstr = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#returnInstr.
PicoVisitor.prototype.visitReturnInstr = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#stopInstr.
PicoVisitor.prototype.visitStopInstr = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#label.
PicoVisitor.prototype.visitLabel = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#identifier.
PicoVisitor.prototype.visitIdentifier = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#constant.
PicoVisitor.prototype.visitConstant = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#constantArg.
PicoVisitor.prototype.visitConstantArg = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#symbolConstantArg.
PicoVisitor.prototype.visitSymbolConstantArg = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#symbolDirectArg.
PicoVisitor.prototype.visitSymbolDirectArg = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#symbolIndirectArg.
PicoVisitor.prototype.visitSymbolIndirectArg = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#argument.
PicoVisitor.prototype.visitArgument = function (ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PicoParser#comment.
PicoVisitor.prototype.visitComment = function (ctx) {
  return this.visitChildren(ctx);
};


exports.PicoVisitor = PicoVisitor;
