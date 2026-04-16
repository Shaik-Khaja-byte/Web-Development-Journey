let students = ["Rahul", "Sundeep", "Ajay", "Akanksh"];
console.log(students);

let info = ["Khaja", 21, 9.41];
console.log(typeof info);

let emptyArray = [];

console.log(info.length);
console.log(emptyArray.length);

console.log(info[0][0]);

/*
cannot modify string as they're immutable

let str = "baby";
str[0] = "G";
console.log(str);
*/

let fruits = ["Apple", "Banana", "Litchi"];
console.log(fruits)
fruits[2] = "Ganne ka Juice";
console.log(fruits);
fruits[10] = "Papaya";
console.log(fruits);
console.log(fruits.length);
console.log(fruits[5]);


let months = ["janauary", "july", "march", "august"];
months.shift();
months.shift();
months.unshift("july", "june");
console.log(months);

let tech = ["c", "c++", "python", "html", "javascript", "css", "c#", "java", "sql"];
console.log(tech.reverse().indexOf("javascript"));

let tic_tac = [
    ["x", null, "o"],
    [null, "x", null],
    ["o", null, "x"]
];
console.log(tic_tac);

