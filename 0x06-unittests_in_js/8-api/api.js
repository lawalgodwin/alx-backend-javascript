const app = require('express')()

app.get('/', (req, res) => {
    res.send("Welcome to the payment system")
})

app.listen(7865, () => {console.log("PI available on localhost port 7865")})
