require('dotenv').config(); // LOAD THE SECRETS FIRST!

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // This pulls from .env
    database: process.env.DB_NAME
});

let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
let user1 = ["123", "123_user", "abc@gmail.com", "123@abc"]

try {
    connection.query(q, user1, (err, result) => {
    if(err) throw err;
    console.log(result);
    })
} catch(err) {
    console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}
