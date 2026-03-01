let arr1 = [1,2,3,4]
let arr2 = [5,6,7]

arr1.sayHello = () => {
    console.log("hello");
}

arr2.sayHello = () => {
    console.log("hello");
}

// let's test

console.log(arr1.sayHello === arr2.sayHello) // false because both the functions are created separately in the memory

console.log(arr1.push === arr2.push) // true beacause prototype functions serve as a common template 
