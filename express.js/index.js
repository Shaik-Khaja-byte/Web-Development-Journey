const express = require("express")
const app = express()

// console.dir(app)

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening to the port ${port}`)
})

app.use((req, res) => {
    console.log("request received")
    console.log(req.method, req.url)
    // res.send("This is a basic response")

    // res.send({
    //     name : "Shaik Khaja",
    //     age : 20,
    //     pet : "Ladoo"
    // })

    code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>"
    res.send(code)
})