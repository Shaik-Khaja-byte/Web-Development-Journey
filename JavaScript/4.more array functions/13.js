// using spread with array literals

let arr = [1,2,3,4,5,6];

let newArr = [...arr];

let odd = [1,3,5,7,9,11];
let even = [2,4,6,8,10,12];

let nums = [...odd, ...even];

console.log(newArr);
newArr.push(7);
console.log(newArr);
console.log(`there is no change in the original arr : ${arr}`);
console.log(nums);
