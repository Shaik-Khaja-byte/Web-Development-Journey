// Create a new array using the map function whose each element is equal to the
// original element plus 5.

let arr = [1,2,3,4];

let newArr = arr.map((el) => {
    return el+5;
});

console.log(newArr);