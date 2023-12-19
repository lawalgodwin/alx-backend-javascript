const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('Test for the function calculateNumber', () => {
  it('Addition of 1 and 3 expects 4', () => {
    const actual = Math.ceil(calculateNumber(1, 3));
    const expected = 4;
    assert.equal(actual, expected);
  });
  it('Addition of 1 and 3.7 expects 5', () => {
    const actual = Math.ceil(calculateNumber(1, 3.7));
    const expected = 5;
    assert.equal(actual, expected);
  });
  it('Addition of 1.2 and 3.7 expects 5', () => {
    const actual = Math.ceil(calculateNumber(1.2, 3.7));
    const expected = 5;
    assert.equal(actual, expected);
  });
  it('Addition of 1.5 and 3.7 expects 6', () => {
    const actual = Math.ceil(calculateNumber(1.5, 3.7));
    const expected = 6;
    assert.equal(actual, expected);
  });
});
