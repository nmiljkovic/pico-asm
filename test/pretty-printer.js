const PrettyPrinter = require('../src/PrettyPrintVisitor');
const pico = require('../src/pico');
const glob = require('glob');
const fs = require('fs');
const expect = require('chai').expect;

describe('formatter', () => {
  it('should format valid programs', (done) => {
    glob(__dirname + '/examples/*.pca', (err, files) => {
      if (err) {
        return done(err);
      }

      files.forEach(file => {
        const input = fs.readFileSync(file, {encoding: 'utf-8'});
        const expected = fs.readFileSync(file + '.pretty', {encoding: 'utf-8'});
        const {ast, errors} = pico.parse(input);
        expect(errors).to.have.lengthOf(0);

        const formatted = pico.prettyPrint(ast);
        expect(formatted).to.equal(expected);

        const analysisErrors = pico.analyze(ast);
        expect(analysisErrors).to.have.lengthOf(0,
          `Errors while analyzing ${file} mismatch`
        );
      });
      done();
    });
  });

});
