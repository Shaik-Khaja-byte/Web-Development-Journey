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

app.use( (req, res, next) => {
    req.time = new Date().toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
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