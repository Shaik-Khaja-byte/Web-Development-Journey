const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful!")
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// defining the schema

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

// creating models in mongoose

const User = mongoose.model("User", userSchema);

// before inserting a document, create one!
// const user1 = User({
//     name: "Shaik Khaja",
//     email: "khaja4756@gmail.com",
//     age: 21
// });

// user1
//     .save()
//     .then((res) => {
//         console.log(res)
//     })
//     .catch(err => {console.log(err)});


const user2 = User({
    name: "Prashanth",
    email: "rockprashanth143@gmail.com",
    age: 23
});

user2
    .save()
    .then((res) => {
        console.log(res)
    })
    .catch(err => {console.log(err)});
