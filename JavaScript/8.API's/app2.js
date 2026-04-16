let h1 = document.querySelector("h1");

// Donkey method

// setTimeout(()=>{
//     h1.style.color = "violet";
// }, 1000);

// setTimeout(()=>{
//     h1.style.color = "indigo";
// }, 2000);

// setTimeout(()=>{
//     h1.style.color = "blue";
// }, 3000);

// setTimeout(()=>{
//     h1.style.color = "green";
// }, 4000);

// setTimeout(()=>{
//     h1.style.color = "yellow";
// }, 5000);

// setTimeout(()=>{
//     h1.style.color = "orange";
// }, 6000);

// setTimeout(()=>{
//     h1.style.color = "red";
// }, 7000);

function changeColor(color, delay, nextColor){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColor) nextColor();
    }, delay);
}


// callback hell or the pyramid of doom

changeColor("violet", 1000, ()=>{
    changeColor("indigo", 1000, ()=>{
        changeColor("blue", 1000, ()=>{
            changeColor("green", 1000, ()=>{
                changeColor("yellow", 1000, ()=>{
                    changeColor("orange", 1000, ()=>{
                        changeColor("red", 1000);
                    });
                });
            });
        });
    });
});

