const { expect } = require('chai')
const sinon = require('sinon')
const sendPaymentRequestToApi = require('./5-payment')

describe("#sendPaymentRequestToApi function", () => {
    let consoleSpy

    beforeEach(() => {
        consoleSpy = sinon.spy(console, "log")
    })
    afterEach(() => {
        consoleSpy.restore()
    })
    it("Test for calling sendPaymentRequestToAPI with 100, and 20", () => {
        sendPaymentRequestToApi(100, 20)
        expect(consoleSpy.calledWith("The total is: 120")).to.be.true
        expect(consoleSpy.calledOnce).to.be.true
    })
    it("Test for calling sendPaymentRequestToAPI with 10, and 10", () => {
        sendPaymentRequestToApi(10, 10)
        expect(consoleSpy.calledWith("The total is: 20")).to.be.true
        expect(consoleSpy.calledOnce).to.be.true
    })
})
