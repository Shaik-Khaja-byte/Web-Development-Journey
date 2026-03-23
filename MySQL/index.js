require('dotenv').config(); // LOAD THE SECRETS FIRST!

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // This pulls from .env
    database: process.env.DB_NAME
});

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let user = [["123b", "123_userb", "abcb@gmail.com", "123@abcb"],
            ["123c", "123_userc", "abcc@gmail.com", "123@abcc"]];

try {
    connection.query(q, [user], (err, result) => {
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
