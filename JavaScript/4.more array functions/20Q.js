// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

let arr = ["shaik", "khaja", "fairoza"];

let string = arr.map((el) => {
    return el.toUpperCase();
});

console.log(string);