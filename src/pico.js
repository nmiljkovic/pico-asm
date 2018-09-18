const {InputStream, CommonTokenStream} = require("antlr4");
const {PicoLexer} = require("./parser/PicoLexer");
const {PicoParser} = require("./parser/PicoParser");
const {PicoErrorListener} = require("./parser/PicoErrorListener");
const {AnalysisVisitor} = require("./analysis/AnalysisVisitor");
const {PrettyPrintVisitor} = require("./PrettyPrintVisitor");
const {CodegenVisitor} = require("./asm/CodegenVisitor");
const {Vm} = require("./vm/Vm");
const {ConsoleIO} = require("./vm/IO");

module.exports = {
  parse: function (input, opts) {
    const stream = new InputStream(input);
    const lexer = new PicoLexer(stream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new PicoParser(tokens);
    const errorListener = new PicoErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.buildParseTrees = true;
    if (opts) {
      opts(parser);
    }
    const ast = parser.program();
    return {
      ast: ast,
      errors: errorListener.errors,
    };
  },
  prettyPrint: function (ast) {
    const visitor = new PrettyPrintVisitor();
    const output = visitor.visitProgram(ast);
    return output;
  },
  analyze: function (ast) {
    const visitor = new AnalysisVisitor();
    const errors = visitor.visitProgram(ast);
    return errors;
  },
  generate: function (ast) {
    const visitor = new CodegenVisitor();
    const code = visitor.visitProgram(ast);
    return code;
  },
  run: function (code, io) {
    if (!io) {
      io = new ConsoleIO();
    }
    const vm = new Vm(code, io);
    return vm.run();
  }
};

