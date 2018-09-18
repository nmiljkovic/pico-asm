module.exports = {
  noInstructions: function () {
    return `Program must have at least 1 instruction.`;
  },
  symbolNotDefined: function (symbolName) {
    return `Symbol '${symbolName}' has not been defined.`;
  },
  symbolAlreadyDefined: function (symbolName) {
    return `Symbol '${symbolName}' has already been defined.`;
  },
  symbolValueOutOfRange: function (symbolName, value) {
    return `Symbol '${symbolName}' value ${value} is out of range.`;
  },
  originInvalidValue: function (boundary) {
    return `Origin must be greater than or equal to ${boundary}.`;
  },
  constantMustBeZero: function () {
    return `Only constant 0 is allowed.`;
  },
  singleConstant: function () {
    return `Instruction supports only 1 constant argument.`;
  },
  addressError: function (argument, addressRange) {
    return `Address error in argument '${argument}'. Legal address [${addressRange.join("..")}].`;
  },
  constantRangeError: function (value, constantRange) {
    return `Constant '${value}' must be in range [${constantRange.join("..")}]`;
  },
  invalidArgumentType: function (expectedTypes) {
    return `Invalid argument type, expected one of {${expectedTypes.join(", ")}}`;
  }
};
