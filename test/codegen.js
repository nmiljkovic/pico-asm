const pico = require("../src/pico");
const glob = require("glob");
const fs = require("fs");
const expect = require("chai").expect;

describe("code generator", () => {

  it("should generate code", (done) => {
    glob(__dirname + "/codegen/*.pca", (err, files) => {
      if (err) {
        done(err);
      }

      files.forEach(file => {
        const input = fs.readFileSync(file, {encoding: "utf-8"});
        const expectedBytecode = fs.readFileSync(file + ".bytecode", {
          encoding: "utf-8"
        });
        const {ast, errors} = pico.parse(input);
        expect(errors).to.have.lengthOf(0);

        const analysisErrors = pico.analyze(ast);
        expect(analysisErrors).to.have.lengthOf(0,
          `Errors while analyzing ${file} mismatch`
        );

        const code = pico.generate(ast);
        const actualBytecode = code.bytecode
          .map(line => {
            const hex = line.toString(16).padStart(4, "0");
            const binary4Bit = line.toString(2)
              .padStart(16, "0")
              .match(/.{4}/g).join(" ");
            return `0x${hex} ${binary4Bit}`;
          })
          .join("\n");
        expect(actualBytecode).to.equal(expectedBytecode.trim(),
          `Failed to match bytecode when generating code for ${file}`
        );
      });

      done();
    });
  });

});
