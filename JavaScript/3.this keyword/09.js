const arrAverage = (arr) => {
    let sum = 0, count = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        count++;
    }
    return sum/count;
}

let arr = [];
arr = prompt("Enter the array elemnts : ").split(" ").map(Number);
console.log(arrAverage(arr));