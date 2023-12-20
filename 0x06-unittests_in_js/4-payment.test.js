const { expect } = require('chai')
const sinon = require('sinon')
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require('./utils')

describe("sendPaymentRequestToApi function", () => {
    
    const calculateNumber = sinon.spy(Utils, 'calculateNumber')

    it("Validate the usage of the Utils function", () => {

        sendPaymentRequestToApi(100, 20)
    
        expect(calculateNumber.calledOnce).to.be.true
    
        expect(calculateNumber.calledWith("SUM", 100, 20)).to.be.true
    
        calculateNumber.restore()        
    })
    it("Stub the calculateNumber to always return 10", () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber')
        const consoleSpy = sinon.spy(console, 'log')
        calculateNumberStub.returns(10)
        sendPaymentRequestToApi(100, 20)
        expect(consoleSpy.calledWith('The total is: 10'))
        expect(calculateNumberStub("SUM", 100, 20)).equal(10)
        calculateNumberStub.restore()
        consoleSpy.restore()
    })
})
