// let us rewrite the entire color changing logic using promises

let h1 = document.querySelector("h1")

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    })
}

changeColor("violet", 1000)
.then(()=>{
    console.log("violet");
    return changeColor("indigo", 1000);
})
.then(()=>{
    console.log("indigo");
    return changeColor("blue", 1000);
})
.then(()=>{
    console.log("blue");
    return changeColor("green", 1000);
})
.then(()=>{
    console.log("green");
    return changeColor("yellow", 1000);
})
.then(()=>{
    console.log("yellow");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("orange");
    return changeColor("red", 1000);
})