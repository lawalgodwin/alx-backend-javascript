const { expect } = require('chai');
const request = require('request')
const {promisify} = require('util')

describe("Index page", () => {
    it("Test a GET request to the index page | Correct status code and result", async () => {
        const result = await promisify(request)('http://0.0.0.0:7865/')
        expect(result.statusCode).to.equal(200)
        expect(result.body).to.equal("Welcome to the payment system")
    })
})

describe("TestSuite for cart resources", () => {

    it("Test a GET request to the cart resource | using interger id", async () => {
        const result = await promisify(request)('http://0.0.0.0:7865/cart/12')
        expect(result.statusCode).to.equal(200)
        expect(result.body).to.equal("Payment methods for cart 12")
    })

    it("Test a GET request to the cart resource | using string id", async () => {
        const result = await promisify(request)('http://0.0.0.0:7865/cart/hello')
        expect(result.statusCode).to.equal(404)
    })
})