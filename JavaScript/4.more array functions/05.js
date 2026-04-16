// every function - behaves like logical AND i.e., returns true if all the elements satisfy the logic passed as callback

let arr1 = [1,2,2,3,4,5,6];
let arr2 = [2,4,6,8,10,12];

let ans1 = arr1.every((el) => {
    return el % 2 == 0;
});


let ans2 = arr2.every((el) => {
    return el % 2 == 0;
});

console.log(ans1);
console.log(ans2);
