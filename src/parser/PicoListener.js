// Generated from Pico.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require("antlr4/index");

// This class defines a complete listener for a parse tree produced by PicoParser.
function PicoListener() {
  antlr4.tree.ParseTreeListener.call(this);
  return this;
}

PicoListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PicoListener.prototype.constructor = PicoListener;

// Enter a parse tree produced by PicoParser#program.
PicoListener.prototype.enterProgram = function (ctx) {
};

// Exit a parse tree produced by PicoParser#program.
PicoListener.prototype.exitProgram = function (ctx) {
};


// Enter a parse tree produced by PicoParser#symbols.
PicoListener.prototype.enterSymbols = function (ctx) {
};

// Exit a parse tree produced by PicoParser#symbols.
PicoListener.prototype.exitSymbols = function (ctx) {
};


// Enter a parse tree produced by PicoParser#symbolDeclLine.
PicoListener.prototype.enterSymbolDeclLine = function (ctx) {
};

// Exit a parse tree produced by PicoParser#symbolDeclLine.
PicoListener.prototype.exitSymbolDeclLine = function (ctx) {
};


// Enter a parse tree produced by PicoParser#symbolDecl.
PicoListener.prototype.enterSymbolDecl = function (ctx) {
};

// Exit a parse tree produced by PicoParser#symbolDecl.
PicoListener.prototype.exitSymbolDecl = function (ctx) {
};


// Enter a parse tree produced by PicoParser#origin.
PicoListener.prototype.enterOrigin = function (ctx) {
};

// Exit a parse tree produced by PicoParser#origin.
PicoListener.prototype.exitOrigin = function (ctx) {
};


// Enter a parse tree produced by PicoParser#instructions.
PicoListener.prototype.enterInstructions = function (ctx) {
};

// Exit a parse tree produced by PicoParser#instructions.
PicoListener.prototype.exitInstructions = function (ctx) {
};


// Enter a parse tree produced by PicoParser#line.
PicoListener.prototype.enterLine = function (ctx) {
};

// Exit a parse tree produced by PicoParser#line.
PicoListener.prototype.exitLine = function (ctx) {
};


// Enter a parse tree produced by PicoParser#instruction.
PicoListener.prototype.enterInstruction = function (ctx) {
};

// Exit a parse tree produced by PicoParser#instruction.
PicoListener.prototype.exitInstruction = function (ctx) {
};


// Enter a parse tree produced by PicoParser#moveInstr.
PicoListener.prototype.enterMoveInstr = function (ctx) {
};

// Exit a parse tree produced by PicoParser#moveInstr.
PicoListener.prototype.exitMoveInstr = function (ctx) {
};


// Enter a parse tree produced by PicoParser#arithmeticInstr.
PicoListener.prototype.enterArithmeticInstr = function (ctx) {
};

// Exit a parse tree produced by PicoParser#arithmeticInstr.
PicoListener.prototype.exitArithmeticInstr = function (ctx) {
};


// Enter a parse tree produced by PicoParser#branchInstr.
PicoListener.prototype.enterBranchInstr = function (ctx) {
};

// Exit a parse tree produced by PicoParser#branchInstr.
PicoListener.prototype.exitBranchInstr = function (ctx) {
};


// Enter a parse tree produced by PicoParser#branchTarget.
PicoListener.prototype.enterBranchTarget = function (ctx) {
};

// Exit a parse tree produced by PicoParser#branchTarget.
PicoListener.prototype.exitBranchTarget = function (ctx) {
};


// Enter a parse tree produced by PicoParser#ioInstr.
PicoListener.prototype.enterIoInstr = function (ctx) {
};

// Exit a parse tree produced by PicoParser#ioInstr.
PicoListener.prototype.exitIoInstr = function (ctx) {
};


// Enter a parse tree produced by PicoParser#callInstr.
PicoListener.prototype.enterCallInstr = function (ctx) {
};

// Exit a parse tree produced by PicoParser#callInstr.
PicoListener.prototype.exitCallInstr = function (ctx) {
};


// Enter a parse tree produced by PicoParser#returnInstr.
PicoListener.prototype.enterReturnInstr = function (ctx) {
};

// Exit a parse tree produced by PicoParser#returnInstr.
PicoListener.prototype.exitReturnInstr = function (ctx) {
};


// Enter a parse tree produced by PicoParser#stopInstr.
PicoListener.prototype.enterStopInstr = function (ctx) {
};

// Exit a parse tree produced by PicoParser#stopInstr.
PicoListener.prototype.exitStopInstr = function (ctx) {
};


// Enter a parse tree produced by PicoParser#label.
PicoListener.prototype.enterLabel = function (ctx) {
};

// Exit a parse tree produced by PicoParser#label.
PicoListener.prototype.exitLabel = function (ctx) {
};


// Enter a parse tree produced by PicoParser#identifier.
PicoListener.prototype.enterIdentifier = function (ctx) {
};

// Exit a parse tree produced by PicoParser#identifier.
PicoListener.prototype.exitIdentifier = function (ctx) {
};


// Enter a parse tree produced by PicoParser#constant.
PicoListener.prototype.enterConstant = function (ctx) {
};

// Exit a parse tree produced by PicoParser#constant.
PicoListener.prototype.exitConstant = function (ctx) {
};


// Enter a parse tree produced by PicoParser#constantArg.
PicoListener.prototype.enterConstantArg = function (ctx) {
};

// Exit a parse tree produced by PicoParser#constantArg.
PicoListener.prototype.exitConstantArg = function (ctx) {
};


// Enter a parse tree produced by PicoParser#symbolConstantArg.
PicoListener.prototype.enterSymbolConstantArg = function (ctx) {
};

// Exit a parse tree produced by PicoParser#symbolConstantArg.
PicoListener.prototype.exitSymbolConstantArg = function (ctx) {
};


// Enter a parse tree produced by PicoParser#symbolDirectArg.
PicoListener.prototype.enterSymbolDirectArg = function (ctx) {
};

// Exit a parse tree produced by PicoParser#symbolDirectArg.
PicoListener.prototype.exitSymbolDirectArg = function (ctx) {
};


// Enter a parse tree produced by PicoParser#symbolIndirectArg.
PicoListener.prototype.enterSymbolIndirectArg = function (ctx) {
};

// Exit a parse tree produced by PicoParser#symbolIndirectArg.
PicoListener.prototype.exitSymbolIndirectArg = function (ctx) {
};


// Enter a parse tree produced by PicoParser#argument.
PicoListener.prototype.enterArgument = function (ctx) {
};

// Exit a parse tree produced by PicoParser#argument.
PicoListener.prototype.exitArgument = function (ctx) {
};


// Enter a parse tree produced by PicoParser#comment.
PicoListener.prototype.enterComment = function (ctx) {
};

// Exit a parse tree produced by PicoParser#comment.
PicoListener.prototype.exitComment = function (ctx) {
};


exports.PicoListener = PicoListener;
