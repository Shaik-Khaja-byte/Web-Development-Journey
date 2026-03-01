// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7]

// arr1.sayHello = () => {
//     console.log("hello");
// }

// arr2.sayHello = () => {
//     console.log("hello");
// }

// // let's test

// console.log(arr1.sayHello === arr2.sayHello) // false because both the functions are created separately in the memory

// console.log(arr1.push === arr2.push) // true beacause prototype functions serve as a common template 

// -----------------------------------------------------------------------------------------------------------------------------

// factory functions

// function personMaker(name, age){
//     const person = {
//         name : name,
//         age : age, 
//         talk(){
//             console.log(`Hi, my name is ${name}`)
//         }
//     }
//     return person;
// }

// let p1 = personMaker("Shaik Khaja", 21);
// let p2 = personMaker("Rahul", 21);

// console.log(p1)
// console.log(p1.talk())

// // this is somewhat a better way of creating objects, but still ineffecient

// // let's see how
// console.log(p1.talk === p2.talk) // false separate copies are created for each object

//------------------------------------------------------------------------------------------------------------------------------

// constructors - returns nothing and starts with capital

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = () => {
//     console.log(`Hello, my name is ${name}`);
// }

// let p1 = new Person("Shaik Khaja", 21)
// let p2 = new Person("Rahul", 20)

// console.log(p1.talk == p2.talk); // true

// // here the blueprint is given to the constructors and objects are created with the help of new keyword

//-----------------------------------------------------------------------------------------------------------------------------

// classes

class Person {
    constructor(name, age){ // speacial method for creating and initializing an objectinstance of that class
        this.name = name;   // the internal implementation of this method is same as the above  
        this.age = age
    }
    talk(){
        console.log(`Hi, my name is ${name}`);
    }
}

let p1 = new Person("Shaik Khaja", 21)
let p2 = new Person("Rahul", 21)

console.log(p1.talk === p2.talk) // true