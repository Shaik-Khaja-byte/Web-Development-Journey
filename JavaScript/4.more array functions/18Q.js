// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

let arr = [1,2,3,4];

let square = arr.map((el) => {
    return el*el;
});

let sum = square.reduce((sum, el) => {
    return sum+el;
})

console.log(sum/arr.length);