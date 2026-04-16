// console.log("hola, People");
// let a = "Shaik";
// let b = "Khaja";
// let c = " ";
// console.log(a + c + b);

// let a = 12;
// let b = 13;
// console.log(`The price is : ${a+b} Rupees`);

// let color = "red";

// if(color == "red"){
//     console.log("Stop.");
// }
// if(color == "yellow"){
//     console.log("slow down.");
// }
// if(color == "green"){
//     console.log("Go!");
// }


// program to find if a string is good or not

// let str = "am";

// if(str[0] === 'a' && str.length > 3){
//     console.log("Good string");
// }
// else{
//     console.log("Bad string");
// }

// let day = 1;

// switch(day){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 4:
//         console.log("Friday");
//         break;
//     case 4:
//         console.log("Saturday");
//         break;  
//     default:
//         console.log("Enter a valid choice (1-7).");
// }

// alert("My first Alert!");
// console.error("This is a simple error");
// console.warn("This is a simple warning");
// console.info("This is a simple info");

// let f_name = prompt("Enter your first name : ");
// let l_name = prompt("Enter your last name : ");
// console.log(`Your Full Name is : ${f_name+ l_name}`);

// Q1
// let num = 20;
// if(num % 10 == 0){
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }

//Q2
// let name = prompt("Enter your name : ");
// let age = prompt("Enter your age : ");
// console.log(`${name } is ${age } years old.`)

// Write a switch statement to print the months in a quarter. Months in Quarter1:January,February,March Months in Quarter2:April,May,June Months in Quarter3:July,August,September Months in Quarter4:October,November,December
// let month = parseInt(prompt("enter the month quarter : "));
// switch(month){
//     case 1
//         console.log("January, Febrauary, March, April, May");
//         break;

//     case 2: 
//         console.log("May, June, July, August");
//         break;

//     case 3: 
//         console.log("September, October, November, December");
//         break;

//     default: console.log("Enter a valid choice.");
// }


/*A string is called a Golden String if:
It starts with the character ‘A’ or ‘a’.
Its total length is greater than 5.
For a given string, write a program to check whether it is a Golden String or Not Golden String.*/

// let str = prompt();
// if((str[0] === 'A' || str[0] === 'a') && str.length > 5){
//     console.log("Golden.");
// }else{
//     console.log("Not golden.");
// }


/*
Write a program to check if two numbers have the same last digit.
Example:
Input: 32 and 47852
Output: Same last digit
*/

// let f_number = prompt();
// let l_number = prompt();
// if(f_number[f_number.length-1] === '2'){
//     console.log(`f_number ends with ->  2 ${f_number}`);
// }
// if(l_number[l_number.length-1] === '2'){
//     console.log(`l_number ends with -> 2 ${l_number}`);
// }

/*
Write a program to find the largest of three numbers.
Example:
Input: 10 25 7
Output: 25
*/

let a = prompt();
let b = prompt();
let c = prompt();

if(a > b){
    console.log("a is greater");
}
else if(b > c){
    console.log("b is greater");
}
else{
    console.log("c is greater");
}