// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : "United States of America"

let country = ["Australia", "Germany", "United States of America"];

function findLarget(country){
    let ansInd = 0;
    for(let i=0; i<country.length; i++){
        let ansLength = country[ansInd].length;
        let currLength = country[i].length;
        if(currLength > ansLength){
            ansInd = i;
        }
    }
    return country[ansInd];
}

console.log(findLarget(country));