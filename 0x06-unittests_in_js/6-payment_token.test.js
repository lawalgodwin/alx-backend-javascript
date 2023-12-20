const { expect } = require('chai')
const getPaymentTokenFromAPI = require("./6-payment_token")

describe("getPaymentTokenFromAPI function", () => {

    it("Async test for getPaymentTokenFromAPI", async () => {
        const result = await getPaymentTokenFromAPI(true)
        expect(result).to.contains({data: 'Successful response from the API'})
    })
})