const pico = require('../src/pico');
const glob = require('glob');
const fs = require('fs');
const expect = require('chai').expect;

describe('parser', () => {

  it('should report errors', (done) => {
    glob(__dirname + '/parser/*.pca', (err, files) => {
      if (err) {
        done(err);
      }

      files.forEach(file => {
        const input = fs.readFileSync(file, {encoding: 'utf-8'});
        const expectedErrors = fs.readFileSync(file + '.errors', {
          encoding: 'utf-8'
        });
        const {errors} = pico.parse(input);
        const textErrors = errors.map(e =>
          `${e.line}:${e.startColumn}:${e.endColumn}:${e.message}`
        ).join('\n');
        expect(textErrors).to.equal(expectedErrors.trim(), `Errors while analyzing ${file} mismatch`);
      });

      done();
    });
  });

});
