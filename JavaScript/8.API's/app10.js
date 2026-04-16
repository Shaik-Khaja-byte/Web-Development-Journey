let data = '{"fact":"Sir Isaac Newton is credited with creating the concept for the pet door that many cats use today to travel outdoors.","length":116}';
console.log(data);
let parsedData = JSON.parse(data);
console.log(parsedData);
console.log(parsedData.fact);

let reverseParsedData = JSON.stringify(parsedData);
console.log(reverseParsedData);