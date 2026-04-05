const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
    .then(() => {console.log("connection successful!")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        to: "Shaik Khaja",
        from: "Shreyas",
        msg: "Can you send me ML record?",
        created_at: new Date()
    },
    {
        to: "Rahul",
        from: "Shaik Khaja",
        msg: "Can we hangout today?",
        created_at: new Date()
    },
    {
        to: "Shaik Khaja",
        from: "Sundeep",
        msg: "Are you coming to college today?",
        created_at: new Date()
    },
    {
        to: "Ajay",
        from: "Shaik Khaja",
        msg: "Are you coming for lunch today?",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);


