const pico = require('../src/pico');
const {MockIO} = require('../src/vm/IO');
const {DebuggableCodegenVisitor} = require('../src/asm/DebuggableCodegenVisitor');
const {DebugVm} = require('../src/vm/DebugVm');
const glob = require('glob');
const fs = require('fs');
const expect = require('chai').expect;

describe('debugger', () => {

  it('should properly pause on breakpoints', (done) => {
    glob(__dirname + '/debugger/*.pca', (err, files) => {
      if (err) {
        done(err);
      }

      const promises = [];

      files.forEach(file => {
        const input = fs.readFileSync(file, {encoding: 'utf-8'});
        const testcaseJson = fs.readFileSync(file + '.json', {
          encoding: 'utf-8'
        });
        const testcase = JSON.parse(testcaseJson);
        const {ast, errors} = pico.parse(input);
        expect(errors).to.have.lengthOf(0);

        const analysisErrors = pico.analyze(ast);
        expect(analysisErrors).to.have.lengthOf(0);

        const codegenVisitor = new DebuggableCodegenVisitor();
        const code = codegenVisitor.visitProgram(ast);
        const mockIO = new MockIO(testcase.inputs);

        const debugVm = new DebugVm(code, mockIO);

        let stepIndex = 0;

        const run = () => {
          let breakpoint;
          if (stepIndex < testcase.breakpoints.length) {
            breakpoint = testcase.breakpoints[stepIndex];
            debugVm.clearBreakpoints();
            debugVm.setBreakpoint(breakpoint.sourceLine);
          }
          return debugVm.run().then(finished => {
            if (finished) {
              expect(stepIndex >= testcase.breakpoints.length).to.eql(true);
              return finished;
            }
            if (breakpoint) {
              breakpoint.expectedState.forEach(expected => {
                const value = debugVm.inspectSymbol(expected.symbol);
                expect(value).to.eql(expected.value);
              });
              stepIndex++;
            }
            return run();
          });
        };

        const promise = run().then(() => {
          expect(mockIO.output).to.eql(testcase.outputs,
            `Failed to execute program correctly: ${file}`
          );
        });

        promises.push(promise);
      });

      Promise.all(promises).then(() => done(), done);
    });
  });

});
