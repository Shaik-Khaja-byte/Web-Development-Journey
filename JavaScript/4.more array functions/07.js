// reduce function

let arr = [1,2,3,4,5,6,7];

let ans = arr.reduce((acc, el) => {
    console.log(acc);
    return acc + el;
});

console.log(ans);