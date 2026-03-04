const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require('uuid')
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : uuidv4(),
        username : "desishaikster",
        content : "I love coding"
    },
    {
        id : uuidv4(),
        username : "ananthraj",
        content : "I love to do research"
    },
    {
        id : uuidv4(),
        username : "rahulbandi",
        content : "I got selected for my first internship"
    },
];

// API for viewing the posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
})

// API for creating a post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})

// API for post request
app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4()
    posts.push({id, username, content})
    res.redirect("/posts") // the final redirection to the specified url
})

// API for viewing a single post
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id)
    res.render("show.ejs", {post})
})

// API for editing a post - PATCH request
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id)
    post.content = newContent;
    console.log(post)
    res.redirect("/posts")
})

// adding the full functionality for editing

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id)
    res.render("edit.ejs", {post})
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})