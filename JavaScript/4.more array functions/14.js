// using spread with object literals

let obj = {
    name : "Shaik Khaja",
    email : "khaja4756@gmail.com",
    password : "E4ed8d3f@"
};

let newObj = {...obj, id : 143};

console.log(newObj);

// converting an array into an object literal

let arr = [1,2,3,4,5]; 

let arrObj = {...arr}; // array values act as values and indices act as keys => key:value

console.log(arrObj);