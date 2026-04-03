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


// const user2 = User({
//     name: "Prashanth",
//     email: "rockprashanth143@gmail.com",
//     age: 23
// });

// user2
//     .save()
//     .then((res) => {
//         console.log(res)
//     })
//     .catch(err => {console.log(err)});


// insert multiple documents

// User.insertMany([
//     {name: "Tarun S", email: "tarunsalanke@gmail.com", age: 22},
//     {name: "Vaibhav", email: "vaibhavpulaskar@gmail.com", age: 20},
//     {name: "Saraswath H D", email: "saraswathhd@gmail.com", age: 21}
// ]).then(res => console.log(res));


// find in mongoose

// User.find({}) // return a thennable query object
//     .then(res => {console.log(res)})
//     .catch(err => {console.log(err)});

// User.find({age : {$lte: 21}})
//     .then(res => {console.log(res[0].name)})
//     .catch(err => {console.log(err)});

// User.findOne({age : {$lte: 21}})
//     .then(res => {console.log(res)})
//     .catch(err => {console.log(err)});

// User.findById("69cf9878a97cc1a54c5adcaa")
//     .then(res => console.log(res.name))
//     .catch(err => {console.log(err)});


// updation in mongoose

User.updateOne({name: "Shaik Khaja"}, {age: 22})
    .then(res => {console.log(res)})

User.updateMany({age : {$gte: 21}}, {age: 21})
    .then(res => {console.log(res)})
