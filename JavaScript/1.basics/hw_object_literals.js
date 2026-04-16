// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

Math.floor((Math.random() * (6 - 1 + 1)) + 1);


// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

const car = {
    name : "BMW",
    model : "X5",
    color : "Black"
};

console.log(car.name);


// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

const person = {
    name : "Ballerina cappucina",
    age : 25,
    city : "Bangalore"
};

person.city = "New York";

person.country = "united states";

console.log(person);