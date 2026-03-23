require('dotenv').config(); // LOAD THE SECRETS FIRST!

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

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

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = []
for(let i = 1;i<=100;i++){
    data.push(getRandomUser()); // adding 100 fake users
}


try {
    connection.query(q, [data], (err, result) => {
    if(err) throw err;
    console.log(result);
    })
} catch(err) {
    console.log(err);
}

connection.end();
