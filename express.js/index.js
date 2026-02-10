const express = require("express")
const app = express()

// console.dir(app)

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening to the port ${port}`)
})

// app.use((req, res) => {
//     console.log("request received")
//     console.log(req.method, req.url)
//     // res.send("This is a basic response")

//     // res.send({
//     //     name : "Shaik Khaja",
//     //     age : 20,
//     //     pet : "Ladoo"
//     // })

//     code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>"
//     res.send(code)
// })

// the problem with the use method was it listens to all the requests and it doesn't do anything with the changing routes
// hence we are using different express methods with the app

// app.get(path, callback)

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/search", (req, res) => {
    res.send("you contacted search path");
});

app.get("/home", (req, res) => {
    res.send("you contacted home path");
});

app.get(/.*/, (req, res) => {  // '*' is a wildcard
    res.status(404).send("requested route does not exist");
});

app.post("/", (req, res) => {
    res.send("you sent a post request");
});