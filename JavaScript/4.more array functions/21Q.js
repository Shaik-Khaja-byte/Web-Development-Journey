// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
    let doubled = args.map((el) => el*2);
    return [...arr, ...doubled];
}