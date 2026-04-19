const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('path');
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');
const ExpressError = require("./ExpressError.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


main()
    .then(() => {console.log("connection successful!")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

// get route - shows all the chats
app.get("/chats", asyncWrap(async (req, res) => {
    
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
}))

// new route - to open a new chat form
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page not Found");
    res.render("new.ejs");
})

// create route - to create a new chat
app.post("/chats", asyncWrap(async (req, res, next) => {
    
    let { to, msg, from } = req.body;

    let newChat = new Chat({
        to: to,
        msg: msg,
        from: from,
        created_at: new Date()
    });

    await newChat.save(); // if error happens, it goes to catch

    console.log("data saved to the database");
    res.redirect("/chats");

}))

// asyncWrap function definition

function asyncWrap(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(err => next(err));
    }
}

// new route - created to handle async errors

app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat){
        next(new ExpressError(500, "Chat not found")); 
    }
    res.render("edit.ejs", {chat})
}))

// edit route - opens a form to edit the message

app.get("/chats/:id/edit", asyncWrap(async (req, res) => {
    
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat})
}))

// update chat - updates the msg into the database

app.put("/chats/:id", asyncWrap(async (req, res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg: newMsg}, 
        {runValidators: true, returnDocument: 'after'}
    );
    res.redirect("/chats");
}))

// destroy route - deletes a chat
app.delete("/chats/:id", asyncWrap(async (req, res) => {
    
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
}))

app.get("/", (req, res) => {
    res.send("app is working");
})


function handleValidationErr(err){
    console.log("This was a validation error, please follow the rules");
    console.log(err.message);
    return err;
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationErr(err);
    }
    next(err);
})

// Error handing middleware
app.use((err, req, res, next) => {
    let {status = 500, message = "Some Unexpected Error"} = err;
    res.status(status).send(message);
})

app.listen(port, (req, res) => {
    console.log(`listening to the port ${port}`);
})