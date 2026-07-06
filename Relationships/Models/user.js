const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
    .then(() => {console.log("Connected to Database.")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String
        }
    ]
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
    let user1 = new User({
        username: "desishaikster",
        addresses: [
            {
                location: "5th Avenue Street",
                city: "New York"
            
            }
        ]
    })
    // you can add addresses like this too
    user1.addresses.push({location: "H1B Wall Street", city: "New York"});
    let result = await user1.save();
    console.log(result);
}


addUser();



