// check in our array if all the numbers are multiples of 10 or not

let arr = [10,20,30,40,50,33];

let ans = arr.every((el) => {
    if(el % 2 == 0){
        return true;
    }
});

if(ans){
    console.log("Yes all are multiples of 10");
} else {
    console.log("No all are not multiples of 10");
}