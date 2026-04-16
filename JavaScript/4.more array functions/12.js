// using spread in js 

console.log(..."helloworld");

let arr = [1,2,3,4,5,6,7,8,9,10,69,-1];

console.log(...arr);

console.log(Math.min(arr));// output NaN it acceps only numbers

console.log(Math.min(...arr));

console.log(Math.max(...arr));
