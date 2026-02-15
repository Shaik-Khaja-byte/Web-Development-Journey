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
    // data actuall comes from index.js so instead of hardcoring we pu the data in a variable and use it in ejs file
    let rollDice = Math.floor(Math.random()*6) + 1;
    res.render("rollDice.ejs", {rollDice});
})

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    res.render("instagram.ejs", {username});
})

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`)
})