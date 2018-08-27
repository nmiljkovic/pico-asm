const pico = require('../src/pico');
const glob = require('glob');
const fs = require('fs');
const expect = require('chai').expect;

describe('analyzer', () => {

  it('should report errors', (done) => {
    glob(__dirname + '/analysis/*.pca', (err, files) => {
      if (err) {
        done(err);
      }

      files.forEach(file => {
        const input = fs.readFileSync(file, {encoding: 'utf-8'});
        const expectedErrors = fs.readFileSync(file + '.errors', {
          encoding: 'utf-8'
        });
        const {ast, errors} = pico.parse(input);
        expect(errors).to.have.lengthOf(0);

        const analysisErrors = pico.analyze(ast);
        const textErrors = analysisErrors.map(e =>
          `${e.line}:${e.startColumn}:${e.endColumn}:${e.message}`
        ).join('\n');
        expect(textErrors).to.equal(expectedErrors.trim(),
          `Errors while analyzing ${file} mismatch`
        );
      });

      done();
    });
  });

});
