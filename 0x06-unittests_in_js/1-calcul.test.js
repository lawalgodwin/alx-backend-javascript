const calculateNumber = require('./1-calcul');

const assert = require('assert')


describe("Test for calculateNumber function", () => {
    describe("Test for SUM operation", () => {
        it("Test for first number rounded", () => {
            assert.equal(calculateNumber('SUM', 1, 3), 4);
        })
        it("Test for second number rounded", () => {
            assert.equal(calculateNumber('SUM', 1, 3.7), 5);
        })
        it("Test for both numbers rounded", () => {
            assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
        })
        it("Test for both numbers rounded", () => {
            assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
        })
    })
    describe("Test for SUBTRACT operation", () => {
        it("Test for first number rounded and bigger", () => {
            assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
        })
        it("Test for first number rounded but smaller", () => {
            assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
        })
        it("Test for second number rounded and bigger", () => {
            assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
        })
        it("Test for second number rounded but smaller", () => {
            assert.equal(calculateNumber('SUBTRACT', 3, 1.2), 2);
        })
        it("Test for both numbers rounded", () => {
            assert.equal(calculateNumber('SUBTRACT', 0.8, -0.4), 1);
        })
        it("Test for both numbers rounded", () => {
            assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        })
    })
    describe("Test for DIVIDE operation", () => {
        it("Test for first number rounded and equals 0", () => {
            assert.equal(calculateNumber('DIVIDE', 0, 1), 0)
        })
        it("Test for first number rounded and negative", () => {
            assert.equal(calculateNumber('DIVIDE', -0.8, 0.4), 'Error')
        })
        it("Test for first number rounded and positive", () => {
            assert.equal(calculateNumber('DIVIDE', 0.8, 0.4), 'Error')
        })
        it("Test for second number rounded and equals 0", () => {
            assert.equal(calculateNumber('DIVIDE', 0.8, 0), 'Error')
        })
        it("Test for second number rounded but negative", () => {
            assert.equal(calculateNumber('DIVIDE', 1.2, -1.4), -1)
        })
        it("Test for both numbers rounded and positive", () => {
            assert.equal(calculateNumber('DIVIDE', 8, 4), 2)
        })
        it("Test for both numbers rounded and negative", () => {
            assert.equal(calculateNumber('DIVIDE', -8, -4), 2)
        })
        it("Test for numbers a=1.4 and b=0", () => {
            assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error')
        })
        it("Test for both numbers rounded", () => {
            assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        })
    })
})