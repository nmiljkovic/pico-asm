module.exports = {
  fdaSize: 7, // 2 ** 3 - 1
  memorySize: 65536,

  maxConstant: 2 ** 15 - 1,
  minConstant: -(2 ** 15),

  opCodes: {
    MOV: 0b0000,

    ADD: 0b0001,
    SUB: 0b0010,
    MUL: 0b0011,
    DIV: 0b0100,

    ADDC: 0b1001,
    SUBC: 0b1010,
    MULC: 0b1011,
    DIVC: 0b1100,

    BEQ: 0b0101,
    BGT: 0b0110,

    IN: 0b0111,
    OUT: 0b1000,

    JSR: 0b1101,
    RTS: 0b1110,

    STOP: 0b1111,
  },
};
