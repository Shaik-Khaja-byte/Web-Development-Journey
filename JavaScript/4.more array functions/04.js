// filter function - filters the elements in an array using some logic and stores it in an array

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

let isEven = arr.filter((el) => {
    if(el % 2 == 0){
        return el;
    }
});

console.log(isEven);