function printTable(){
    let num = parseFloat(prompt("which table? : "));
    let limit = parseFloat(prompt("upto? : "));
    for(let i=1; i<=limit; i++){
        console.log(`${num}x${i}=${num*i}`);
    }
}

printTable();

// or

let num = parseFloat(prompt("which table? : "));
let limit = parseFloat(prompt("upto? : "));
function printTables(num, limit){
    for(let i=num; i<=num*limit; i+=num){
        console.log(i);
    }
}

printTables(num, limit);