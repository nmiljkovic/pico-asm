const ErrorListener = require("antlr4").error.ErrorListener;

function PicoErrorListener() {
  ErrorListener.call(this);
  this.errors = [];
}

PicoErrorListener.prototype = Object.create(ErrorListener.prototype);
PicoErrorListener.prototype.constructor = PicoErrorListener;

PicoErrorListener.prototype.syntaxError = function (
  recognizer, offendingSymbol,
  line, column, msg, e
) {
  this.errors.push({
    line,
    startColumn: column,
    endColumn: column + 1,
    message: msg,
  });
};

exports.PicoErrorListener = PicoErrorListener;
