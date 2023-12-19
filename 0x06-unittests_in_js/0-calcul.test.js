const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('Test for the function calculateNumber', () => {
    it('round the first argument', () => {
        assert.equal(calculateNumber(1.0, 0), 1);
        assert.equal(calculateNumber(3.7, 1), 5);
        assert.equal(calculateNumber(1.7, 0), 2);
      });
    
      it('round the second argument', () => {
        assert.equal(calculateNumber(0, 1.0), 1);
        assert.equal(calculateNumber(0, 1.3), 1);
        assert.equal(calculateNumber(1, 3.7), 5);
      });
    
      it('should return the right number', () => {
        assert.equal(calculateNumber(1.5, 3.7), 6);
        assert.equal(calculateNumber(1.2, 3.7), 5);
      });
});
