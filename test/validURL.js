var assert = require('chai').assert;
var validURL = require('../lib/validURL');


describe('validURL', function(){
    this.timeout(30000);
      it('should should recognize valid url', function (done) {

            validURL('git://github.com/webfly/registry.git', function (status) {
                  assert.isTrue(status);

                  done();
            });

      });

      it('should should recognize invalid url', function (done) {

            validURL('git://github.com/webfly/lololo', function (status) {
                  assert.isFalse(status);

                  done();
            });

      });

      it('should should not allow script injection', function (done) {

            validURL('git://github.com/webfly/lololo; true', function (status) {
                  assert.isFalse(status);

                  done();
            });

      });
});
