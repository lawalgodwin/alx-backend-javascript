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