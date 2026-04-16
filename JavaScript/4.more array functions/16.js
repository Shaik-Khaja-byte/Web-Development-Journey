// concept of destructuring

let arr = ["shaik", "khaja", "dariya", "rabbani"];

// let winner = arr[0];
// let runnerUp = arr[1];
// let secondRunnerUp = arr[2];
// console.log(winner, runnerUp, secondRunnerUp);

// the above concept is lengthy so we have array destructuring

let [winner, runnerUp] = arr;
console.log(winner, runnerUp);

// task - store the remaining names in an array called others? -> use of rest concept
let [win, swin, ...others] = arr;
console.log(win, swin, others);