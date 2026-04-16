const express = require('express');
const app = express()
const port = 8080;

middleware 

app.get("/", (req, res) => {
    res.send();
})

app.use(port, () => {
    console.log(`app is listening to port ${port}`);
})