let arr = [1,2,3,4,5,6,7,69,0,12,34,-69];
let num = parseInt(prompt("number : "));

function getLarger(arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}

getLarger(arr, num);