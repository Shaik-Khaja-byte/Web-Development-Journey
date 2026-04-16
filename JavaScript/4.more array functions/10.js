// create a function to find minimum number in an array

let arr = [1,2,3,4,0,-4];

let min = 999;

let ans = arr.reduce((min, el) => {
    if(min > el){
        return el;
    } else {
        return min;
    }
});

console.log(ans);