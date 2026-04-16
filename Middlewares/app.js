const express = require('express');
const app = express();
const port = 8080;

// // for every request, It will send the same response, and it can never reach the below specified routes
// app.use( (req, res, next) => { 
//     console.log("Hi, I'm middleware one");
//     next();
//     console.log("you can writ after next()"); // bad practice
// })

// app.use( (req, res, next) => { 
//     console.log("Hi, I'm middleware two");
//     return next(); // next means the end of the middleware
// })


// creating a utility based middleware
// we always write the middlewares on the top

// API token as query string
const checkToken = ("/api", (req, res, next) => {
    let {token} = req.query;
    if( token === "giveaccess"){
        return next();
    }
    res.status(403).send("ACCESS DENIED");
})

app.get("/api", checkToken, (req, res) => {
    res.send("data");
})

app.use("/random", (req, res) => {
    res.send("this middleware is only for /random path");
})

// // logger
// app.use( (req, res, next) => {
//     req.time = new Date().toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// })

app.use( (req, res) => {
    res.send("404 Error");
})

app.get("/", (req, res) => {
    res.send("Hi, I'm root");
})

app.get("/random", (req, res) => {
    res.send("This is a random page");
})

app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})