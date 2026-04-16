// finding maximum element in an array using reduce function

let arr = [1,2,3,69,0];

let ans = arr.reduce((max, el) => {
    if(max < el){
        return el;
    } else {
        return max;
    }
});

console.log(ans);