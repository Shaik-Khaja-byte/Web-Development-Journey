const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('path');
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


main()
    .then(() => {console.log("connection successful!")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// get route - shows all the chats
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
})

// new route - to open a new chat form
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

// create route - to create a new chat
app.post("/chats", (req, res) => {
    let {to, msg, from} = req.body;
    let newChat = new Chat({
        to: to,
        msg: msg,
        from: from,
        created_at: new Date()
    });

    newChat
        .save()
        .then(res => {console.log("data saved to the database")})
        .catch(err => {console.log(err)});

    res.redirect("/chats");
})

// edit route - opens a form to edit the message

app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat})
})

// update chat - updates the msg into the database

app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg: newMsg}, 
        {runValidators: true, returnDocument: 'after'}
    );
    res.redirect("/chats");
})

// destroy route - deletes a chat
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

app.get("/", (req, res) => {
    res.send("app is working");
})

app.listen(port, (req, res) => {
    console.log(`listening to the port ${port}`);
})