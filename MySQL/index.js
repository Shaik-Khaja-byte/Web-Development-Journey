require('dotenv').config(); // LOAD THE SECRETS FIRST!

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

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

// Home route
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
        if(err) throw err;
        let count = result[0]["count(*)"];
        res.render("home.ejs", {count});
        })
    } catch(err) {
        console.log(err);
        res.send("some error in DB");
    }
})

// Show users route
app.get("/users", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
        if(err) throw err;
        res.render("showUsers.ejs", {users});
        })
    } catch(err) {
        console.log(err);
        res.send("some error in DB");
    }
})

// Edit route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
        if(err) throw err;
        let user = result[0];
        res.render("edit.ejs", {user});
        })
    } catch(err) {
        console.log(err);
        res.send("some error in DB");
    }
})

// Update (DB) route
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password: formPassword, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
        if(err) throw err;
        let user = result[0];
        if(formPassword != user.password){
            res.send("WRONG Password");
        } else {
            let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
            connection.query(q2, (err, result) => {
                if (err) throw err;
                res.redirect("/users");
            });
        }
        });
    } catch(err) {
        console.log(err);
        res.send("some error in DB");
    }
})

app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`);
})


