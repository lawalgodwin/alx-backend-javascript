const calculateNumber = require('./1-calcul');

const { expect } = require('chai')


describe(" calculateNumber function Test for SUM operation", () => {
    it("Test for first number rounded", () => {
        expect(calculateNumber('SUM', 1, 3)).equal(4);
    })
    it("Test for second number rounded", () => {
        expect(calculateNumber('SUM', 1, 3.7)).equal(5);
    })
    it("Test for both numbers rounded", () => {
        expect(calculateNumber('SUM', 1.5, 3.7)).equal(6);
    })
    it("Test for both numbers rounded", () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).equal(6);
    })
})
describe(" calculateNumber function Test for SUBTRACT operation", () => {
    it("Test for first number rounded and bigger", () => {
        expect(calculateNumber('SUBTRACT', 3, 1)).equal(2);
    })
    it("Test for first number rounded but smaller", () => {
        expect(calculateNumber('SUBTRACT', 1, 3)).equal(-2);
    })
    it("Test for second number rounded and bigger", () => {
        expect(calculateNumber('SUBTRACT', 1, 3.7)).equal(-3);
    })
    it("Test for second number rounded but smaller", () => {
        expect(calculateNumber('SUBTRACT', 3, 1.2)).equal(2);
    })
    it("Test for both numbers rounded", () => {
        expect(calculateNumber('SUBTRACT', 0.8, -0.4)).equal(1);
    })
    it("Test for both numbers rounded", () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).equal(-4);
    })
})
describe("calculateNumber function Test for DIVIDE operation", () => {
    it("Test for first number rounded and equals 0", () => {
        expect(calculateNumber('DIVIDE', 0, 1)).equal(0)
    })
    it("Test for first number rounded and negative", () => {
        expect(calculateNumber('DIVIDE', -0.8, 0.4)).equal('Error')
    })
    it("Test for first number rounded and positive", () => {
        expect(calculateNumber('DIVIDE', 0.8, 0.4)).equal('Error')
    })
    it("Test for second number rounded and equals 0", () => {
        expect(calculateNumber('DIVIDE', 0.8, 0)).equal('Error')
    })
    it("Test for second number rounded but negative", () => {
        expect(calculateNumber('DIVIDE', 1.2, -1.4)).equal(-1)
    })
    it("Test for both numbers rounded and positive", () => {
        expect(calculateNumber('DIVIDE', 8, 4)).equal(2)
    })
    it("Test for both numbers rounded and negative", () => {
        expect(calculateNumber('DIVIDE', -8, -4)).equal(2)
    })
    it("Test for numbers a=1.4 and b=0", () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).equal('Error')
    })
    it("Test for both numbers rounded", () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).equal(0.2);
    })
})
