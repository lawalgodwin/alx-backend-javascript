const { expect } = require('chai')
const { spy } = require('sinon')
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require('./utils')

describe("sendPaymentRequestToApi function", () => {
    
    const calculateNumber = spy(Utils, 'calculateNumber')

    it("Validate the usage of the Utils function", () => {

        sendPaymentRequestToApi(100, 20)
    
        expect(calculateNumber.calledOnce).to.be.true
    
        expect(calculateNumber.calledWith("SUM", 100, 20)).to.be.true
    
        calculateNumber.restore()        
    })
})
