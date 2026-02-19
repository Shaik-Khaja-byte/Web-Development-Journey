const express = require("express")
const app = express()
const port = 8080;

// middlewares used to parse url encoded data and json data
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get("/register", (req, res)=>{
    let {username, password} = req.query;
    res.send(`standard GET request, welcome ${username}`);
})

app.post("/register", (req, res)=>{
    let {username, password} = req.body;
    console.log(req.body)
    res.send(`standard POST request, welcome ${username}`);
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})