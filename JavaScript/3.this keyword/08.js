// write an arrow function that prints hello world 5 times at an interval of 2 sec each

let id = setInterval(() => {
    console.log("Hello world!");
}, 2000);

setTimeout(() => {
    console.log("clearInterval(id) ran");
    clearInterval(id);
}, 10000);