const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
    .then(() => {console.log("Connected to Database.")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomers = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

const addCust = async () => {
    let newCust = new Customer({
        name: "Rakhi Sawanth"
    })

    let newOrder = new Order({
        item: "Pizza",
        price: 250
    })

    newCust.orders.push(newOrder)

    await newOrder.save()
    await newCust.save()

    comsole.log("new customer added.")
}

addCust();

// findCustomers();

// const addOrders = async () => {
//     let res = await Order.insertMany([
//         {item: "Samosa", price: 15},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 20}
//     ])
//     console.log(res);
// }

// addOrders();