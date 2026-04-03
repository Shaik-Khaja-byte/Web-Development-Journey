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
    title: {
        type: String, 
        maxLength: 30,
        required: true
    },
    author: {
         type: String
    },
    price: {
        type: Number,
        min: [1, "price is too low to sell"]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        enum: ["fiction", "non fiction"]
    }
})

// creating models in mongoose

const Book = mongoose.model("Book", userSchema);

// inserting a book

// const book1 = new Book({
//     title: "Mathematics VII",
//     author: "R D Sharma",
//     price: "1200" // can be parsed/casted so no violation of schema validation
// });

// book1
//     .save()
//     .then(res => {console.log(res)})
//     .catch(err => {console.log(err)});

// const book2 = new Book({
//     title: "Duryodhan",
//     author: "Raghunathan",
//     //price: "abc"  schema violation - can't be parsed
// })

// book2
//     .save()
//     .then(res => {console.log(res)})
//     .catch(err => {console.log(err)});

// const book3 = new Book({  // schema violation - skipped the required field
//     author: "Raghunathan",
//     price: "abc" 
// })

// book3
//     .save()
//     .then(res => {console.log(res)})
//     .catch(err => {console.log(err)});


// const book4 = new Book({
//     title: "Harry Potter 1",
//     author: "IDK",
//     price: -1, // min is 1
//     category: "BL" // no category in enum
// });

// book4
//     .save()
//     .then(res => {console.log(res)})
//     .catch(err => {console.log(err)});


// Book.findByIdAndUpdate("69cfd1801e3d8058d79c4d54", {price: -500}) // this allows for updation against the schema validation (dangerous)
//     .then(res => {console.log(res)})
//     .catch(err => {console.log(err)})


// fix
Book.findByIdAndUpdate("69cfd1801e3d8058d79c4d54", {price: -200}, {runValidators: true})  
    .then(res => {console.log(res)})
    .catch(err => {console.log(err.errors.price.properties.message)})




