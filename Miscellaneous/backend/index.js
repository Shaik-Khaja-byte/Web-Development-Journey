const express = require("express")
const app = express()
const port = 8080;

app.get("/register", (req, res)=>{
    const {username, password} = req.query;
    res.send(`standard GET request, welcome ${username}`);
})

app.post("/request", (req, res)=>{
    res.send("standard POST request");
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})