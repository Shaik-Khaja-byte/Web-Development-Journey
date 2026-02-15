const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res)=>{
    res.render("home.ejs");
})

app.get("/home", (req, res)=>{
    res.send("Hello...");
})

// adding a new route to test rollDice
app.get("/rollDice", (req, res)=>{
    res.render("rollDice.ejs");
})

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`)
})