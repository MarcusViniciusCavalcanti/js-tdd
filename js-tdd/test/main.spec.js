var expect = require('chai').expect;

describe('Main', function() {
  let arr;

  describe('Method a', function() {
    beforeEach(function() {
      arr = [ 1, 2, 3 ];
    });

    context('Case 1', function() {

      // testa tipos ou se existe (smoke test)
      it('should be an array', function() {
        expect(arr).to.be.a('array');
      });

      it('should have a size of 4 when push another value to the array', function() {
        arr.push(4);

        expect(arr).to.have.lengthOf(4);
      });

      it('should have a size of 2 when pop a value from the array', function() {
        arr.pop();

        expect(arr).to.not.include(3)
      });

      it('should remove the value 3 when use pop in the array', function() {
        arr.pop();

        expect(arr).to.have.lengthOf(2);
      });
    })
  })
});