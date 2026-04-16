// // find the sum of  the numbers 

// let num = 12345;
// let sum = 0;
// while(num > 0){
//     let rem = num % 10;
//     sum = sum + rem;
//     num = Math.floor(num/10);
// } 
// console.log(sum);

// // count the number of digits

// let num = 12345;
// let count = 0;
// let rem = 0;
// while(num > 0){
//     rem = num % 10;
//     count++;
//     num = Math.floor(num/10);
// }
// console.log(count);


// // find the fibonacci of a number

// let n = 5;
// let fib = 1;
// for(i=1; i<=n; i++){
//     fib = fib * i;
// }
// console.log(fib);


// // delete all occurences of num from an array

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// find the largest element in the array

let arr = [1,2,3, 99, 4,5];

let max = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);