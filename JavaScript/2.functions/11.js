// Write a JavaScript function to generate a random number within a range (start, end).

let start = parseInt(prompt("start : "));
let end = parseInt(prompt("end : "));

function randomNumber(start, end){
    let result = Math.floor((Math.random()*end - start + 1) + start);
    console.log(result);
}