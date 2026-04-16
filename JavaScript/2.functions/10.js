// higher order functions

function higherFunction(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}

let ans = function greet(){
    console.log("Hello");
}

higherFunction(ans, 10000);

