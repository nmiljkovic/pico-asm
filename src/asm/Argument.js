function MemoryReferenceArgument(isIndirect, symbolName, value) {
  this.isIndirect = isIndirect;
  this.symbolName = symbolName;
  this.value = value;
}

MemoryReferenceArgument.prototype.atIndex = function (index) {
  let arg = this.isIndirect << 3;
  arg |= this.value;
  return arg << ((2 - index) * 4);
};

function ConstantArgument(value) {
  this.value = value;
}

ConstantArgument.prototype.asHalfWord = function () {
  // special case for instructions like IN/OUT which feature
  // the constant in the lowest 7 bits of the word
  if (this.value < 0 || this.value > 0x7F) {
    throw new Error(`Value ${this.value} cannot be converted to a half-word constant.`);
  }
  return this.value;
};

exports.MemoryReferenceArgument = MemoryReferenceArgument;
exports.ConstantArgument = ConstantArgument;
