function concatenateStrings(arr){
    let ans = "";
    for(let i=0; i<arr.length; i++){
        ans += arr[i];
    }
    return ans;
}

let arr = [];
arr = prompt("Enter the strings separated by spaces: ").split(" ");
console.log(concatenateStrings(arr));