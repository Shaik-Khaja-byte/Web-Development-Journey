const express = require('express');
const app = express();
const port = 8080;

// for every request, It will send the same response, and it can never reach the below specified routes
app.use( (req, res) => { 
    let {query} = req.query;
    console.log(query);
    console.log("Hi, I'm a middleware");
    res.send("Middleware finished");
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