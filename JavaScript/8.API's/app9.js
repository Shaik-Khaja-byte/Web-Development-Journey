// function getNum(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve("resolved");
//         }, 1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }


// let's convert our changing colour function using async and await

let h1 = document.querySelector("h1")

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num > 3){
                reject("promise was rejected");
            }
            h1.style.color = color;
            console.log("color changed to ", color);
            resolve("color changed");
        }, delay);
    })
}

async function demo(){
    // await changeColor("violet", 1000);
    // await changeColor("indigo", 1000);
    // await changeColor("blue", 1000);

    // let a = 10;
    // console.log(a+10);

    try{
        await changeColor("violet", 1000);
        await changeColor("indigo", 1000);
        await changeColor("blue", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("orange", 1000);
        await changeColor("red", 1000);

        let a = 10;
        console.log(a+10);
        
    } catch(err){
        console.log("error caught");
        console.log(err);
    }
}

