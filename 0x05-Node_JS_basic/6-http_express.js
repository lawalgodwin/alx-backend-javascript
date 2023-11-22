const app = require('express')()

app.get("/", (req, res) => {
    res.end("Hello Holberton School!")
})

app.listen(1245, () => console.log("app listening for connection"))

module.exports = app
