const {Vm} = require("./Vm");

function DebugVm(code, io) {
  Vm.call(this, code, io);

  this.sourceMap = code.sourceMap;
  this.symbolMap = code.symbolMap;
  this.labels = code.labels;

  this.breakpoints = new Set();
  this.sourceLine = -1;
  this.muteBreakpoints = false;
}

DebugVm.prototype = Object.create(Vm.prototype);
DebugVm.prototype.constructor = DebugVm;

DebugVm.prototype.step = function () {
  // Workaround for breaking on the first line.
  if (this.sourceLine === -1) {
    this.sourceLine = this.sourceMap.get(this.pc) || -1;
    if (!this.muteBreakpoints && this.breakpoints.has(this.sourceLine)) {
      return Promise.resolve(false);
    }
  }
  return Vm.prototype.step.apply(this, arguments)
    .then((finished) => {
      if (!finished) {
        this.sourceLine = this.sourceMap.get(this.pc) || -1;
      } else {
        this.sourceLine = -1;
      }
      return finished;
    });
};

DebugVm.prototype.run = function () {
  return this.step().then(finished => {
    if (finished) {
      return true;
    }
    if (!this.muteBreakpoints && this.breakpoints.has(this.sourceLine)) {
      return false;
    }
    return this.run();
  });
};

DebugVm.prototype.inspectSymbol = function (symbol) {
  const addr = this.symbolMap.get(symbol);
  return this._readMem(addr);
};

DebugVm.prototype.setBreakpoint = function (sourceLine) {
  this.breakpoints.add(sourceLine);
};

DebugVm.prototype.removeBreakpoint = function (sourceLine) {
  this.breakpoints.delete(sourceLine);
};

DebugVm.prototype.clearBreakpoints = function (sourceLine) {
  this.breakpoints.clear();
};

exports.DebugVm = DebugVm;
