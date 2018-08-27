const pico = require('../src/pico');
const {MockIO} = require('../src/vm/IO');
const glob = require('glob');
const fs = require('fs');
const expect = require('chai').expect;

describe('vm', () => {

  it('should execute program', (done) => {
    glob(__dirname + '/examples/*.pca', (err, files) => {
      if (err) {
        done(err);
      }

      const promises = [];

      files.forEach(file => {
        const input = fs.readFileSync(file, {encoding: 'utf-8'});
        const ioJson = fs.readFileSync(file + '.json', {
          encoding: 'utf-8'
        });
        const io = JSON.parse(ioJson);
        const {ast, errors} = pico.parse(input);
        expect(errors).to.have.lengthOf(0);

        const analysisErrors = pico.analyze(ast);
        expect(analysisErrors).to.have.lengthOf(0);

        const code = pico.generate(ast);
        const mockIO = new MockIO(io.inputs);
        const promise = pico.run(code, mockIO)
          .then(() => {
            expect(mockIO.output).to.eql(io.outputs,
              `Failed to execute program correctly: ${file}`
            );
          });
        promises.push(promise);
      });

      Promise.all(promises).then(() => done(), done);
    });
  });

});
