const {Asm} = require("./Asm");

function DebuggableAsm(origin) {
  Asm.call(this, origin);
  this.symbolMap = new Map();
  this.sourceMap = new Map();
}

DebuggableAsm.prototype = Object.create(Asm.prototype);
DebuggableAsm.prototype.constructor = DebuggableAsm;

DebuggableAsm.prototype.mapLine = function (line) {
  this.sourceMap.set(this.pc, line);
};

exports.DebuggableAsm = DebuggableAsm;
