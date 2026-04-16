let isEven = (n) => {
    if(n % 2 == 0) return "true";
    else return "false";
}

let n = parseInt(prompt("Enter n : "));
console.log(isEven(n));