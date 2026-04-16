// some function - just like every but the difference is that it acts like logical OR

let arr1 = [1,2,2,3,4,5,6];
let arr2 = [1,3,5,7,9];

let ans1 = arr1.some((el) => {
    return el % 2 == 0;
});


let ans2 = arr2.some((el) => {
    return el % 2 == 0;
});

console.log(ans1);
console.log(ans2);