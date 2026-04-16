// default parameters - uses the dfault valuses if not passed

function add(a, b=10){
    return a+b;
}

console.log(add(10, 11));
console.log(add(10));

// function add(a=10, b){
//     return a+b;
// }

// console.log(add(1)); // error 1 will be assingned to a not b, if you want to do so pass a as a second parameter