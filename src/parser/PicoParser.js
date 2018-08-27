// Generated from Pico.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require("antlr4/index");
var PicoListener = require("./PicoListener").PicoListener;
var PicoVisitor = require("./PicoVisitor").PicoVisitor;

var grammarFileName = "Pico.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
  "\u0003\u001b\u00ac\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
  "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
  "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
  "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
  "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
  "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
  "\u0004\u0018\t\u0018\u0003\u0002\u0005\u00022\n\u0002\u0003\u0002\u0003",
  "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0005\u00039\n\u0003\u0003",
  "\u0003\u0007\u0003<\n\u0003\f\u0003\u000e\u0003?\u000b\u0003\u0003\u0004",
  "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
  "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006L\n\u0006",
  "\f\u0006\u000e\u0006O\u000b\u0006\u0003\u0007\u0005\u0007R\n\u0007\u0003",
  "\u0007\u0005\u0007U\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
  "\u0003\b\u0003\b\u0005\b^\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
  "\t\u0003\t\u0005\tf\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
  "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
  "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0005\fx\n\f\u0003\r\u0003",
  "\r\u0003\r\u0003\r\u0005\r~\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
  "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
  "\u0003\u0010\u0003\u0010\u0005\u0010\u008b\n\u0010\u0005\u0010\u008d",
  "\n\u0010\u0005\u0010\u008f\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
  "\u0003\u0012\u0003\u0012\u0003\u0013\u0005\u0013\u0097\n\u0013\u0003",
  "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
  "\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
  "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u00aa",
  "\n\u0018\u0003\u0018\u0002\u0002\u0019\u0002\u0004\u0006\b\n\f\u000e",
  "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.\u0002\u0005",
  "\u0003\u0002\u000b\u000e\u0003\u0002\u0011\u0012\u0003\u0002\u000f\u0010",
  "\u0002\u00aa\u00021\u0003\u0002\u0002\u0002\u0004=\u0003\u0002\u0002",
  "\u0002\u0006@\u0003\u0002\u0002\u0002\bD\u0003\u0002\u0002\u0002\nM",
  "\u0003\u0002\u0002\u0002\fQ\u0003\u0002\u0002\u0002\u000e]\u0003\u0002",
  "\u0002\u0002\u0010_\u0003\u0002\u0002\u0002\u0012g\u0003\u0002\u0002",
  "\u0002\u0014n\u0003\u0002\u0002\u0002\u0016w\u0003\u0002\u0002\u0002",
  "\u0018y\u0003\u0002\u0002\u0002\u001a\u007f\u0003\u0002\u0002\u0002",
  "\u001c\u0082\u0003\u0002\u0002\u0002\u001e\u0084\u0003\u0002\u0002\u0002",
  " \u0090\u0003\u0002\u0002\u0002\"\u0093\u0003\u0002\u0002\u0002$\u0096",
  "\u0003\u0002\u0002\u0002&\u009a\u0003\u0002\u0002\u0002(\u009c\u0003",
  "\u0002\u0002\u0002*\u009f\u0003\u0002\u0002\u0002,\u00a1\u0003\u0002",
  "\u0002\u0002.\u00a9\u0003\u0002\u0002\u000202\u0007\u0019\u0002\u0002",
  "10\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
  "\u000234\u0005\u0004\u0003\u000245\u0005\b\u0005\u000256\u0005\n\u0006",
  "\u00026\u0003\u0003\u0002\u0002\u000279\u0005\u0006\u0004\u000287\u0003",
  "\u0002\u0002\u000289\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002",
  ":<\u0007\u0019\u0002\u0002;8\u0003\u0002\u0002\u0002<?\u0003\u0002\u0002",
  "\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>\u0005\u0003",
  "\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@A\u0005\"\u0012\u0002A",
  "B\u0007\u0003\u0002\u0002BC\u0005$\u0013\u0002C\u0007\u0003\u0002\u0002",
  "\u0002DE\u0007\t\u0002\u0002EF\u0005$\u0013\u0002FG\u0007\u0019\u0002",
  "\u0002G\t\u0003\u0002\u0002\u0002HI\u0005\f\u0007\u0002IJ\u0007\u0019",
  "\u0002\u0002JL\u0003\u0002\u0002\u0002KH\u0003\u0002\u0002\u0002LO\u0003",
  "\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002",
  "N\u000b\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002PR\u0005 \u0011",
  "\u0002QP\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RT\u0003\u0002",
  "\u0002\u0002SU\u0005\u000e\b\u0002TS\u0003\u0002\u0002\u0002TU\u0003",
  "\u0002\u0002\u0002U\r\u0003\u0002\u0002\u0002V^\u0005\u0010\t\u0002",
  "W^\u0005\u0012\n\u0002X^\u0005\u0014\u000b\u0002Y^\u0005\u0018\r\u0002",
  "Z^\u0005\u001a\u000e\u0002[^\u0005\u001c\u000f\u0002\\^\u0005\u001e",
  "\u0010\u0002]V\u0003\u0002\u0002\u0002]W\u0003\u0002\u0002\u0002]X\u0003",
  "\u0002\u0002\u0002]Y\u0003\u0002\u0002\u0002]Z\u0003\u0002\u0002\u0002",
  "][\u0003\u0002\u0002\u0002]\\\u0003\u0002\u0002\u0002^\u000f\u0003\u0002",
  "\u0002\u0002_`\u0007\n\u0002\u0002`a\u0005.\u0018\u0002ab\u0007\u0004",
  "\u0002\u0002be\u0005.\u0018\u0002cd\u0007\u0004\u0002\u0002df\u0005",
  ".\u0018\u0002ec\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002f\u0011",
  "\u0003\u0002\u0002\u0002gh\t\u0002\u0002\u0002hi\u0005.\u0018\u0002",
  "ij\u0007\u0004\u0002\u0002jk\u0005.\u0018\u0002kl\u0007\u0004\u0002",
  "\u0002lm\u0005.\u0018\u0002m\u0013\u0003\u0002\u0002\u0002no\t\u0003",
  "\u0002\u0002op\u0005.\u0018\u0002pq\u0007\u0004\u0002\u0002qr\u0005",
  ".\u0018\u0002rs\u0007\u0004\u0002\u0002st\u0005\u0016\f\u0002t\u0015",
  "\u0003\u0002\u0002\u0002ux\u0005*\u0016\u0002vx\u0005,\u0017\u0002w",
  "u\u0003\u0002\u0002\u0002wv\u0003\u0002\u0002\u0002x\u0017\u0003\u0002",
  "\u0002\u0002yz\t\u0004\u0002\u0002z}\u0005.\u0018\u0002{|\u0007\u0004",
  "\u0002\u0002|~\u0005.\u0018\u0002}{\u0003\u0002\u0002\u0002}~\u0003",
  "\u0002\u0002\u0002~\u0019\u0003\u0002\u0002\u0002\u007f\u0080\u0007",
  "\u0013\u0002\u0002\u0080\u0081\u0005*\u0016\u0002\u0081\u001b\u0003",
  "\u0002\u0002\u0002\u0082\u0083\u0007\u0014\u0002\u0002\u0083\u001d\u0003",
  "\u0002\u0002\u0002\u0084\u008e\u0007\u0015\u0002\u0002\u0085\u008c\u0005",
  ".\u0018\u0002\u0086\u0087\u0007\u0004\u0002\u0002\u0087\u008a\u0005",
  ".\u0018\u0002\u0088\u0089\u0007\u0004\u0002\u0002\u0089\u008b\u0005",
  ".\u0018\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003",
  "\u0002\u0002\u0002\u008b\u008d\u0003\u0002\u0002\u0002\u008c\u0086\u0003",
  "\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008f\u0003",
  "\u0002\u0002\u0002\u008e\u0085\u0003\u0002\u0002\u0002\u008e\u008f\u0003",
  "\u0002\u0002\u0002\u008f\u001f\u0003\u0002\u0002\u0002\u0090\u0091\u0005",
  "\"\u0012\u0002\u0091\u0092\u0007\u0005\u0002\u0002\u0092!\u0003\u0002",
  "\u0002\u0002\u0093\u0094\u0007\u0016\u0002\u0002\u0094#\u0003\u0002",
  "\u0002\u0002\u0095\u0097\u0007\u0018\u0002\u0002\u0096\u0095\u0003\u0002",
  "\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002",
  "\u0002\u0002\u0098\u0099\u0007\u0017\u0002\u0002\u0099%\u0003\u0002",
  "\u0002\u0002\u009a\u009b\u0005$\u0013\u0002\u009b\'\u0003\u0002\u0002",
  "\u0002\u009c\u009d\u0007\u0006\u0002\u0002\u009d\u009e\u0005\"\u0012",
  "\u0002\u009e)\u0003\u0002\u0002\u0002\u009f\u00a0\u0005\"\u0012\u0002",
  "\u00a0+\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\u0007\u0002\u0002",
  "\u00a2\u00a3\u0005\"\u0012\u0002\u00a3\u00a4\u0007\b\u0002\u0002\u00a4",
  "-\u0003\u0002\u0002\u0002\u00a5\u00aa\u0005&\u0014\u0002\u00a6\u00aa",
  "\u0005(\u0015\u0002\u00a7\u00aa\u0005*\u0016\u0002\u00a8\u00aa\u0005",
  ",\u0017\u0002\u00a9\u00a5\u0003\u0002\u0002\u0002\u00a9\u00a6\u0003",
  "\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00a8\u0003",
  "\u0002\u0002\u0002\u00aa/\u0003\u0002\u0002\u0002\u001118=MQT]ew}\u008a",
  "\u008c\u008e\u0096\u00a9"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, "'='", "','", "':'", "'#'", "'('", "')'"];

var symbolicNames = [null, null, null, null, null, null, null, "ORG", "MOV",
  "ADD", "SUB", "MUL", "DIV", "IN", "OUT", "BEQ", "BGT",
  "JSR", "RTS", "STOP", "IDENTIFIER", "NUMBER", "SIGN",
  "EOL", "COMMENT", "WS"];

var ruleNames = ["program", "symbols", "symbolDecl", "origin", "instructions",
  "line", "instruction", "moveInstr", "arithmeticInstr",
  "branchInstr", "branchTarget", "ioInstr", "callInstr",
  "returnInstr", "stopInstr", "label", "identifier", "constant",
  "constantArg", "symbolConstantArg", "symbolDirectArg",
  "symbolIndirectArg", "argument"];

function PicoParser(input) {
  antlr4.Parser.call(this, input);
  this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
  this.ruleNames = ruleNames;
  this.literalNames = literalNames;
  this.symbolicNames = symbolicNames;
  return this;
}

PicoParser.prototype = Object.create(antlr4.Parser.prototype);
PicoParser.prototype.constructor = PicoParser;

Object.defineProperty(PicoParser.prototype, "atn", {
  get: function () {
    return atn;
  }
});

PicoParser.EOF = antlr4.Token.EOF;
PicoParser.T__0 = 1;
PicoParser.T__1 = 2;
PicoParser.T__2 = 3;
PicoParser.T__3 = 4;
PicoParser.T__4 = 5;
PicoParser.T__5 = 6;
PicoParser.ORG = 7;
PicoParser.MOV = 8;
PicoParser.ADD = 9;
PicoParser.SUB = 10;
PicoParser.MUL = 11;
PicoParser.DIV = 12;
PicoParser.IN = 13;
PicoParser.OUT = 14;
PicoParser.BEQ = 15;
PicoParser.BGT = 16;
PicoParser.JSR = 17;
PicoParser.RTS = 18;
PicoParser.STOP = 19;
PicoParser.IDENTIFIER = 20;
PicoParser.NUMBER = 21;
PicoParser.SIGN = 22;
PicoParser.EOL = 23;
PicoParser.COMMENT = 24;
PicoParser.WS = 25;

PicoParser.RULE_program = 0;
PicoParser.RULE_symbols = 1;
PicoParser.RULE_symbolDecl = 2;
PicoParser.RULE_origin = 3;
PicoParser.RULE_instructions = 4;
PicoParser.RULE_line = 5;
PicoParser.RULE_instruction = 6;
PicoParser.RULE_moveInstr = 7;
PicoParser.RULE_arithmeticInstr = 8;
PicoParser.RULE_branchInstr = 9;
PicoParser.RULE_branchTarget = 10;
PicoParser.RULE_ioInstr = 11;
PicoParser.RULE_callInstr = 12;
PicoParser.RULE_returnInstr = 13;
PicoParser.RULE_stopInstr = 14;
PicoParser.RULE_label = 15;
PicoParser.RULE_identifier = 16;
PicoParser.RULE_constant = 17;
PicoParser.RULE_constantArg = 18;
PicoParser.RULE_symbolConstantArg = 19;
PicoParser.RULE_symbolDirectArg = 20;
PicoParser.RULE_symbolIndirectArg = 21;
PicoParser.RULE_argument = 22;

function ProgramContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_program;
  return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.symbols = function () {
  return this.getTypedRuleContext(SymbolsContext, 0);
};

ProgramContext.prototype.origin = function () {
  return this.getTypedRuleContext(OriginContext, 0);
};

ProgramContext.prototype.instructions = function () {
  return this.getTypedRuleContext(InstructionsContext, 0);
};

ProgramContext.prototype.EOL = function () {
  return this.getToken(PicoParser.EOL, 0);
};

ProgramContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterProgram(this);
  }
};

ProgramContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitProgram(this);
  }
};

ProgramContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitProgram(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.ProgramContext = ProgramContext;

PicoParser.prototype.program = function () {

  var localctx = new ProgramContext(this, this._ctx, this.state);
  this.enterRule(localctx, 0, PicoParser.RULE_program);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 47;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 0, this._ctx);
    if (la_ === 1) {
      this.state = 46;
      this.match(PicoParser.EOL);

    }
    this.state = 49;
    this.symbols();
    this.state = 50;
    this.origin();
    this.state = 51;
    this.instructions();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function SymbolsContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_symbols;
  return this;
}

SymbolsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolsContext.prototype.constructor = SymbolsContext;

SymbolsContext.prototype.EOL = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(PicoParser.EOL);
  } else {
    return this.getToken(PicoParser.EOL, i);
  }
};


SymbolsContext.prototype.symbolDecl = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(SymbolDeclContext);
  } else {
    return this.getTypedRuleContext(SymbolDeclContext, i);
  }
};

SymbolsContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterSymbols(this);
  }
};

SymbolsContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitSymbols(this);
  }
};

SymbolsContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitSymbols(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.SymbolsContext = SymbolsContext;

PicoParser.prototype.symbols = function () {

  var localctx = new SymbolsContext(this, this._ctx, this.state);
  this.enterRule(localctx, 2, PicoParser.RULE_symbols);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 59;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === PicoParser.IDENTIFIER || _la === PicoParser.EOL) {
      this.state = 54;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === PicoParser.IDENTIFIER) {
        this.state = 53;
        this.symbolDecl();
      }

      this.state = 56;
      this.match(PicoParser.EOL);
      this.state = 61;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function SymbolDeclContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_symbolDecl;
  return this;
}

SymbolDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolDeclContext.prototype.constructor = SymbolDeclContext;

SymbolDeclContext.prototype.identifier = function () {
  return this.getTypedRuleContext(IdentifierContext, 0);
};

SymbolDeclContext.prototype.constant = function () {
  return this.getTypedRuleContext(ConstantContext, 0);
};

SymbolDeclContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterSymbolDecl(this);
  }
};

SymbolDeclContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitSymbolDecl(this);
  }
};

SymbolDeclContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitSymbolDecl(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.SymbolDeclContext = SymbolDeclContext;

PicoParser.prototype.symbolDecl = function () {

  var localctx = new SymbolDeclContext(this, this._ctx, this.state);
  this.enterRule(localctx, 4, PicoParser.RULE_symbolDecl);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 62;
    this.identifier();
    this.state = 63;
    this.match(PicoParser.T__0);
    this.state = 64;
    this.constant();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function OriginContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_origin;
  return this;
}

OriginContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OriginContext.prototype.constructor = OriginContext;

OriginContext.prototype.ORG = function () {
  return this.getToken(PicoParser.ORG, 0);
};

OriginContext.prototype.constant = function () {
  return this.getTypedRuleContext(ConstantContext, 0);
};

OriginContext.prototype.EOL = function () {
  return this.getToken(PicoParser.EOL, 0);
};

OriginContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterOrigin(this);
  }
};

OriginContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitOrigin(this);
  }
};

OriginContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitOrigin(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.OriginContext = OriginContext;

PicoParser.prototype.origin = function () {

  var localctx = new OriginContext(this, this._ctx, this.state);
  this.enterRule(localctx, 6, PicoParser.RULE_origin);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 66;
    this.match(PicoParser.ORG);
    this.state = 67;
    this.constant();
    this.state = 68;
    this.match(PicoParser.EOL);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function InstructionsContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_instructions;
  return this;
}

InstructionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstructionsContext.prototype.constructor = InstructionsContext;

InstructionsContext.prototype.line = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(LineContext);
  } else {
    return this.getTypedRuleContext(LineContext, i);
  }
};

InstructionsContext.prototype.EOL = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(PicoParser.EOL);
  } else {
    return this.getToken(PicoParser.EOL, i);
  }
};


InstructionsContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterInstructions(this);
  }
};

InstructionsContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitInstructions(this);
  }
};

InstructionsContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitInstructions(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.InstructionsContext = InstructionsContext;

PicoParser.prototype.instructions = function () {

  var localctx = new InstructionsContext(this, this._ctx, this.state);
  this.enterRule(localctx, 8, PicoParser.RULE_instructions);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 75;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PicoParser.MOV) | (1 << PicoParser.ADD) | (1 << PicoParser.SUB) | (1 << PicoParser.MUL) | (1 << PicoParser.DIV) | (1 << PicoParser.IN) | (1 << PicoParser.OUT) | (1 << PicoParser.BEQ) | (1 << PicoParser.BGT) | (1 << PicoParser.JSR) | (1 << PicoParser.RTS) | (1 << PicoParser.STOP) | (1 << PicoParser.IDENTIFIER) | (1 << PicoParser.EOL))) !== 0)) {
      this.state = 70;
      this.line();
      this.state = 71;
      this.match(PicoParser.EOL);
      this.state = 77;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function LineContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_line;
  return this;
}

LineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineContext.prototype.constructor = LineContext;

LineContext.prototype.label = function () {
  return this.getTypedRuleContext(LabelContext, 0);
};

LineContext.prototype.instruction = function () {
  return this.getTypedRuleContext(InstructionContext, 0);
};

LineContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterLine(this);
  }
};

LineContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitLine(this);
  }
};

LineContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitLine(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.LineContext = LineContext;

PicoParser.prototype.line = function () {

  var localctx = new LineContext(this, this._ctx, this.state);
  this.enterRule(localctx, 10, PicoParser.RULE_line);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 79;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === PicoParser.IDENTIFIER) {
      this.state = 78;
      this.label();
    }

    this.state = 82;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PicoParser.MOV) | (1 << PicoParser.ADD) | (1 << PicoParser.SUB) | (1 << PicoParser.MUL) | (1 << PicoParser.DIV) | (1 << PicoParser.IN) | (1 << PicoParser.OUT) | (1 << PicoParser.BEQ) | (1 << PicoParser.BGT) | (1 << PicoParser.JSR) | (1 << PicoParser.RTS) | (1 << PicoParser.STOP))) !== 0)) {
      this.state = 81;
      this.instruction();
    }

  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function InstructionContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_instruction;
  return this;
}

InstructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstructionContext.prototype.constructor = InstructionContext;

InstructionContext.prototype.moveInstr = function () {
  return this.getTypedRuleContext(MoveInstrContext, 0);
};

InstructionContext.prototype.arithmeticInstr = function () {
  return this.getTypedRuleContext(ArithmeticInstrContext, 0);
};

InstructionContext.prototype.branchInstr = function () {
  return this.getTypedRuleContext(BranchInstrContext, 0);
};

InstructionContext.prototype.ioInstr = function () {
  return this.getTypedRuleContext(IoInstrContext, 0);
};

InstructionContext.prototype.callInstr = function () {
  return this.getTypedRuleContext(CallInstrContext, 0);
};

InstructionContext.prototype.returnInstr = function () {
  return this.getTypedRuleContext(ReturnInstrContext, 0);
};

InstructionContext.prototype.stopInstr = function () {
  return this.getTypedRuleContext(StopInstrContext, 0);
};

InstructionContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterInstruction(this);
  }
};

InstructionContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitInstruction(this);
  }
};

InstructionContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitInstruction(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.InstructionContext = InstructionContext;

PicoParser.prototype.instruction = function () {

  var localctx = new InstructionContext(this, this._ctx, this.state);
  this.enterRule(localctx, 12, PicoParser.RULE_instruction);
  try {
    this.state = 91;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case PicoParser.MOV:
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.moveInstr();
        break;
      case PicoParser.ADD:
      case PicoParser.SUB:
      case PicoParser.MUL:
      case PicoParser.DIV:
        this.enterOuterAlt(localctx, 2);
        this.state = 85;
        this.arithmeticInstr();
        break;
      case PicoParser.BEQ:
      case PicoParser.BGT:
        this.enterOuterAlt(localctx, 3);
        this.state = 86;
        this.branchInstr();
        break;
      case PicoParser.IN:
      case PicoParser.OUT:
        this.enterOuterAlt(localctx, 4);
        this.state = 87;
        this.ioInstr();
        break;
      case PicoParser.JSR:
        this.enterOuterAlt(localctx, 5);
        this.state = 88;
        this.callInstr();
        break;
      case PicoParser.RTS:
        this.enterOuterAlt(localctx, 6);
        this.state = 89;
        this.returnInstr();
        break;
      case PicoParser.STOP:
        this.enterOuterAlt(localctx, 7);
        this.state = 90;
        this.stopInstr();
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function MoveInstrContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_moveInstr;
  return this;
}

MoveInstrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MoveInstrContext.prototype.constructor = MoveInstrContext;

MoveInstrContext.prototype.MOV = function () {
  return this.getToken(PicoParser.MOV, 0);
};

MoveInstrContext.prototype.argument = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ArgumentContext);
  } else {
    return this.getTypedRuleContext(ArgumentContext, i);
  }
};

MoveInstrContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterMoveInstr(this);
  }
};

MoveInstrContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitMoveInstr(this);
  }
};

MoveInstrContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitMoveInstr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.MoveInstrContext = MoveInstrContext;

PicoParser.prototype.moveInstr = function () {

  var localctx = new MoveInstrContext(this, this._ctx, this.state);
  this.enterRule(localctx, 14, PicoParser.RULE_moveInstr);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 93;
    this.match(PicoParser.MOV);

    this.state = 94;
    this.argument();
    this.state = 95;
    this.match(PicoParser.T__1);
    this.state = 96;
    this.argument();
    this.state = 99;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === PicoParser.T__1) {
      this.state = 97;
      this.match(PicoParser.T__1);
      this.state = 98;
      this.argument();
    }

  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ArithmeticInstrContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_arithmeticInstr;
  return this;
}

ArithmeticInstrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArithmeticInstrContext.prototype.constructor = ArithmeticInstrContext;

ArithmeticInstrContext.prototype.argument = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ArgumentContext);
  } else {
    return this.getTypedRuleContext(ArgumentContext, i);
  }
};

ArithmeticInstrContext.prototype.ADD = function () {
  return this.getToken(PicoParser.ADD, 0);
};

ArithmeticInstrContext.prototype.SUB = function () {
  return this.getToken(PicoParser.SUB, 0);
};

ArithmeticInstrContext.prototype.DIV = function () {
  return this.getToken(PicoParser.DIV, 0);
};

ArithmeticInstrContext.prototype.MUL = function () {
  return this.getToken(PicoParser.MUL, 0);
};

ArithmeticInstrContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterArithmeticInstr(this);
  }
};

ArithmeticInstrContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitArithmeticInstr(this);
  }
};

ArithmeticInstrContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitArithmeticInstr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.ArithmeticInstrContext = ArithmeticInstrContext;

PicoParser.prototype.arithmeticInstr = function () {

  var localctx = new ArithmeticInstrContext(this, this._ctx, this.state);
  this.enterRule(localctx, 16, PicoParser.RULE_arithmeticInstr);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 101;
    _la = this._input.LA(1);
    if (!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PicoParser.ADD) | (1 << PicoParser.SUB) | (1 << PicoParser.MUL) | (1 << PicoParser.DIV))) !== 0))) {
      this._errHandler.recoverInline(this);
    }
    else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
    this.state = 102;
    this.argument();
    this.state = 103;
    this.match(PicoParser.T__1);
    this.state = 104;
    this.argument();
    this.state = 105;
    this.match(PicoParser.T__1);
    this.state = 106;
    this.argument();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function BranchInstrContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_branchInstr;
  return this;
}

BranchInstrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BranchInstrContext.prototype.constructor = BranchInstrContext;

BranchInstrContext.prototype.argument = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ArgumentContext);
  } else {
    return this.getTypedRuleContext(ArgumentContext, i);
  }
};

BranchInstrContext.prototype.branchTarget = function () {
  return this.getTypedRuleContext(BranchTargetContext, 0);
};

BranchInstrContext.prototype.BEQ = function () {
  return this.getToken(PicoParser.BEQ, 0);
};

BranchInstrContext.prototype.BGT = function () {
  return this.getToken(PicoParser.BGT, 0);
};

BranchInstrContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterBranchInstr(this);
  }
};

BranchInstrContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitBranchInstr(this);
  }
};

BranchInstrContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitBranchInstr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.BranchInstrContext = BranchInstrContext;

PicoParser.prototype.branchInstr = function () {

  var localctx = new BranchInstrContext(this, this._ctx, this.state);
  this.enterRule(localctx, 18, PicoParser.RULE_branchInstr);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 108;
    _la = this._input.LA(1);
    if (!(_la === PicoParser.BEQ || _la === PicoParser.BGT)) {
      this._errHandler.recoverInline(this);
    }
    else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
    this.state = 109;
    this.argument();
    this.state = 110;
    this.match(PicoParser.T__1);
    this.state = 111;
    this.argument();
    this.state = 112;
    this.match(PicoParser.T__1);
    this.state = 113;
    this.branchTarget();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function BranchTargetContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_branchTarget;
  return this;
}

BranchTargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BranchTargetContext.prototype.constructor = BranchTargetContext;

BranchTargetContext.prototype.symbolDirectArg = function () {
  return this.getTypedRuleContext(SymbolDirectArgContext, 0);
};

BranchTargetContext.prototype.symbolIndirectArg = function () {
  return this.getTypedRuleContext(SymbolIndirectArgContext, 0);
};

BranchTargetContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterBranchTarget(this);
  }
};

BranchTargetContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitBranchTarget(this);
  }
};

BranchTargetContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitBranchTarget(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.BranchTargetContext = BranchTargetContext;

PicoParser.prototype.branchTarget = function () {

  var localctx = new BranchTargetContext(this, this._ctx, this.state);
  this.enterRule(localctx, 20, PicoParser.RULE_branchTarget);
  try {
    this.state = 117;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case PicoParser.IDENTIFIER:
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.symbolDirectArg();
        break;
      case PicoParser.T__4:
        this.enterOuterAlt(localctx, 2);
        this.state = 116;
        this.symbolIndirectArg();
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function IoInstrContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_ioInstr;
  return this;
}

IoInstrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IoInstrContext.prototype.constructor = IoInstrContext;

IoInstrContext.prototype.argument = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ArgumentContext);
  } else {
    return this.getTypedRuleContext(ArgumentContext, i);
  }
};

IoInstrContext.prototype.IN = function () {
  return this.getToken(PicoParser.IN, 0);
};

IoInstrContext.prototype.OUT = function () {
  return this.getToken(PicoParser.OUT, 0);
};

IoInstrContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterIoInstr(this);
  }
};

IoInstrContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitIoInstr(this);
  }
};

IoInstrContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitIoInstr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.IoInstrContext = IoInstrContext;

PicoParser.prototype.ioInstr = function () {

  var localctx = new IoInstrContext(this, this._ctx, this.state);
  this.enterRule(localctx, 22, PicoParser.RULE_ioInstr);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 119;
    _la = this._input.LA(1);
    if (!(_la === PicoParser.IN || _la === PicoParser.OUT)) {
      this._errHandler.recoverInline(this);
    }
    else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
    this.state = 120;
    this.argument();
    this.state = 123;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === PicoParser.T__1) {
      this.state = 121;
      this.match(PicoParser.T__1);
      this.state = 122;
      this.argument();
    }

  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function CallInstrContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_callInstr;
  return this;
}

CallInstrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CallInstrContext.prototype.constructor = CallInstrContext;

CallInstrContext.prototype.JSR = function () {
  return this.getToken(PicoParser.JSR, 0);
};

CallInstrContext.prototype.symbolDirectArg = function () {
  return this.getTypedRuleContext(SymbolDirectArgContext, 0);
};

CallInstrContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterCallInstr(this);
  }
};

CallInstrContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitCallInstr(this);
  }
};

CallInstrContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitCallInstr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.CallInstrContext = CallInstrContext;

PicoParser.prototype.callInstr = function () {

  var localctx = new CallInstrContext(this, this._ctx, this.state);
  this.enterRule(localctx, 24, PicoParser.RULE_callInstr);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 125;
    this.match(PicoParser.JSR);
    this.state = 126;
    this.symbolDirectArg();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ReturnInstrContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_returnInstr;
  return this;
}

ReturnInstrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnInstrContext.prototype.constructor = ReturnInstrContext;

ReturnInstrContext.prototype.RTS = function () {
  return this.getToken(PicoParser.RTS, 0);
};

ReturnInstrContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterReturnInstr(this);
  }
};

ReturnInstrContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitReturnInstr(this);
  }
};

ReturnInstrContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitReturnInstr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.ReturnInstrContext = ReturnInstrContext;

PicoParser.prototype.returnInstr = function () {

  var localctx = new ReturnInstrContext(this, this._ctx, this.state);
  this.enterRule(localctx, 26, PicoParser.RULE_returnInstr);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 128;
    this.match(PicoParser.RTS);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function StopInstrContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_stopInstr;
  return this;
}

StopInstrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StopInstrContext.prototype.constructor = StopInstrContext;

StopInstrContext.prototype.STOP = function () {
  return this.getToken(PicoParser.STOP, 0);
};

StopInstrContext.prototype.argument = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(ArgumentContext);
  } else {
    return this.getTypedRuleContext(ArgumentContext, i);
  }
};

StopInstrContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterStopInstr(this);
  }
};

StopInstrContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitStopInstr(this);
  }
};

StopInstrContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitStopInstr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.StopInstrContext = StopInstrContext;

PicoParser.prototype.stopInstr = function () {

  var localctx = new StopInstrContext(this, this._ctx, this.state);
  this.enterRule(localctx, 28, PicoParser.RULE_stopInstr);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 130;
    this.match(PicoParser.STOP);
    this.state = 140;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PicoParser.T__3) | (1 << PicoParser.T__4) | (1 << PicoParser.IDENTIFIER) | (1 << PicoParser.NUMBER) | (1 << PicoParser.SIGN))) !== 0)) {
      this.state = 131;
      this.argument();
      this.state = 138;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === PicoParser.T__1) {
        this.state = 132;
        this.match(PicoParser.T__1);
        this.state = 133;
        this.argument();
        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PicoParser.T__1) {
          this.state = 134;
          this.match(PicoParser.T__1);
          this.state = 135;
          this.argument();
        }

      }

    }

  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function LabelContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_label;
  return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.identifier = function () {
  return this.getTypedRuleContext(IdentifierContext, 0);
};

LabelContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterLabel(this);
  }
};

LabelContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitLabel(this);
  }
};

LabelContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitLabel(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.LabelContext = LabelContext;

PicoParser.prototype.label = function () {

  var localctx = new LabelContext(this, this._ctx, this.state);
  this.enterRule(localctx, 30, PicoParser.RULE_label);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 142;
    this.identifier();
    this.state = 143;
    this.match(PicoParser.T__2);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_identifier;
  return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.IDENTIFIER = function () {
  return this.getToken(PicoParser.IDENTIFIER, 0);
};

IdentifierContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterIdentifier(this);
  }
};

IdentifierContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitIdentifier(this);
  }
};

IdentifierContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitIdentifier(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.IdentifierContext = IdentifierContext;

PicoParser.prototype.identifier = function () {

  var localctx = new IdentifierContext(this, this._ctx, this.state);
  this.enterRule(localctx, 32, PicoParser.RULE_identifier);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 145;
    this.match(PicoParser.IDENTIFIER);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ConstantContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_constant;
  return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.NUMBER = function () {
  return this.getToken(PicoParser.NUMBER, 0);
};

ConstantContext.prototype.SIGN = function () {
  return this.getToken(PicoParser.SIGN, 0);
};

ConstantContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterConstant(this);
  }
};

ConstantContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitConstant(this);
  }
};

ConstantContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitConstant(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.ConstantContext = ConstantContext;

PicoParser.prototype.constant = function () {

  var localctx = new ConstantContext(this, this._ctx, this.state);
  this.enterRule(localctx, 34, PicoParser.RULE_constant);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 148;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (_la === PicoParser.SIGN) {
      this.state = 147;
      this.match(PicoParser.SIGN);
    }

    this.state = 150;
    this.match(PicoParser.NUMBER);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ConstantArgContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_constantArg;
  return this;
}

ConstantArgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantArgContext.prototype.constructor = ConstantArgContext;

ConstantArgContext.prototype.constant = function () {
  return this.getTypedRuleContext(ConstantContext, 0);
};

ConstantArgContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterConstantArg(this);
  }
};

ConstantArgContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitConstantArg(this);
  }
};

ConstantArgContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitConstantArg(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.ConstantArgContext = ConstantArgContext;

PicoParser.prototype.constantArg = function () {

  var localctx = new ConstantArgContext(this, this._ctx, this.state);
  this.enterRule(localctx, 36, PicoParser.RULE_constantArg);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 152;
    this.constant();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function SymbolConstantArgContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_symbolConstantArg;
  return this;
}

SymbolConstantArgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolConstantArgContext.prototype.constructor = SymbolConstantArgContext;

SymbolConstantArgContext.prototype.identifier = function () {
  return this.getTypedRuleContext(IdentifierContext, 0);
};

SymbolConstantArgContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterSymbolConstantArg(this);
  }
};

SymbolConstantArgContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitSymbolConstantArg(this);
  }
};

SymbolConstantArgContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitSymbolConstantArg(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.SymbolConstantArgContext = SymbolConstantArgContext;

PicoParser.prototype.symbolConstantArg = function () {

  var localctx = new SymbolConstantArgContext(this, this._ctx, this.state);
  this.enterRule(localctx, 38, PicoParser.RULE_symbolConstantArg);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 154;
    this.match(PicoParser.T__3);
    this.state = 155;
    this.identifier();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function SymbolDirectArgContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_symbolDirectArg;
  return this;
}

SymbolDirectArgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolDirectArgContext.prototype.constructor = SymbolDirectArgContext;

SymbolDirectArgContext.prototype.identifier = function () {
  return this.getTypedRuleContext(IdentifierContext, 0);
};

SymbolDirectArgContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterSymbolDirectArg(this);
  }
};

SymbolDirectArgContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitSymbolDirectArg(this);
  }
};

SymbolDirectArgContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitSymbolDirectArg(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.SymbolDirectArgContext = SymbolDirectArgContext;

PicoParser.prototype.symbolDirectArg = function () {

  var localctx = new SymbolDirectArgContext(this, this._ctx, this.state);
  this.enterRule(localctx, 40, PicoParser.RULE_symbolDirectArg);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 157;
    this.identifier();
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function SymbolIndirectArgContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_symbolIndirectArg;
  return this;
}

SymbolIndirectArgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolIndirectArgContext.prototype.constructor = SymbolIndirectArgContext;

SymbolIndirectArgContext.prototype.identifier = function () {
  return this.getTypedRuleContext(IdentifierContext, 0);
};

SymbolIndirectArgContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterSymbolIndirectArg(this);
  }
};

SymbolIndirectArgContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitSymbolIndirectArg(this);
  }
};

SymbolIndirectArgContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitSymbolIndirectArg(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.SymbolIndirectArgContext = SymbolIndirectArgContext;

PicoParser.prototype.symbolIndirectArg = function () {

  var localctx = new SymbolIndirectArgContext(this, this._ctx, this.state);
  this.enterRule(localctx, 42, PicoParser.RULE_symbolIndirectArg);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 159;
    this.match(PicoParser.T__4);
    this.state = 160;
    this.identifier();
    this.state = 161;
    this.match(PicoParser.T__5);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ArgumentContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PicoParser.RULE_argument;
  return this;
}

ArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentContext.prototype.constructor = ArgumentContext;

ArgumentContext.prototype.constantArg = function () {
  return this.getTypedRuleContext(ConstantArgContext, 0);
};

ArgumentContext.prototype.symbolConstantArg = function () {
  return this.getTypedRuleContext(SymbolConstantArgContext, 0);
};

ArgumentContext.prototype.symbolDirectArg = function () {
  return this.getTypedRuleContext(SymbolDirectArgContext, 0);
};

ArgumentContext.prototype.symbolIndirectArg = function () {
  return this.getTypedRuleContext(SymbolIndirectArgContext, 0);
};

ArgumentContext.prototype.enterRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.enterArgument(this);
  }
};

ArgumentContext.prototype.exitRule = function (listener) {
  if (listener instanceof PicoListener) {
    listener.exitArgument(this);
  }
};

ArgumentContext.prototype.accept = function (visitor) {
  if (visitor instanceof PicoVisitor) {
    return visitor.visitArgument(this);
  } else {
    return visitor.visitChildren(this);
  }
};


PicoParser.ArgumentContext = ArgumentContext;

PicoParser.prototype.argument = function () {

  var localctx = new ArgumentContext(this, this._ctx, this.state);
  this.enterRule(localctx, 44, PicoParser.RULE_argument);
  try {
    this.state = 167;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case PicoParser.NUMBER:
      case PicoParser.SIGN:
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.constantArg();
        break;
      case PicoParser.T__3:
        this.enterOuterAlt(localctx, 2);
        this.state = 164;
        this.symbolConstantArg();
        break;
      case PicoParser.IDENTIFIER:
        this.enterOuterAlt(localctx, 3);
        this.state = 165;
        this.symbolDirectArg();
        break;
      case PicoParser.T__4:
        this.enterOuterAlt(localctx, 4);
        this.state = 166;
        this.symbolIndirectArg();
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};


exports.PicoParser = PicoParser;
