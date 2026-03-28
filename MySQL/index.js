require('dotenv').config(); // LOAD THE SECRETS FIRST!

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');

const app = express();
const port = 8080;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // This pulls from .env
    database: process.env.DB_NAME
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ]
}


app.get("/", (req, res) => {
    // console.log("welcome to the home page");
    res.send("welcome to the home page");
})

app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`);
})


// try {
//     connection.query(q, [data], (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     })
// } catch(err) {
//     console.log(err);
// }

// connection.end();