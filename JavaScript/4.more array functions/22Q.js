// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.

const obj1 = {
    name : "shaik",
    age : 21,
    cgpa : 9.41
};

const obj2 = {
    name2 : "fairoza",
    age2 : 20,
    cgpa2 : 8.9
};

function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}

console.log(mergeObjects(obj1, obj2));