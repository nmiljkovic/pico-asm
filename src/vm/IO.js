function IO(inputFn, outputFn) {
  this.inputFn = inputFn;
  this.outputFn = outputFn;
  this._promise = Promise.resolve();
}

IO.prototype.in = function (addr) {
  this._promise = this._promise.then(() => {
    return this.inputFn(addr)
      .then((result) => {
        return Promise.resolve(result);
      }, (err) => {
        return Promise.reject(err);
      });
  });
  return this._promise;
};

IO.prototype.out = function (value, addr) {
  this.outputFn(value, addr);
};

function MockIO(inputArray) {
  this.output = [];

  let inputIndex = 0;
  const inputFn = () => {
    if (inputIndex >= inputArray.length) {
      return Promise.reject(new Error("EOF"));
    }
    return Promise.resolve(inputArray[inputIndex++]);
  };

  const outputFn = (value) => {
    this.output.push(value);
  };

  IO.call(this, inputFn, outputFn);
}

MockIO.prototype = Object.create(IO.prototype);
MockIO.prototype.constructor = MockIO;

exports.IO = IO;
exports.MockIO = MockIO;
