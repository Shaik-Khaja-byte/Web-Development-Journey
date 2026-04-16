let gameSeq = [];
let userSeq = [];

// create an array of all button colors to choose randomly
let btns = ["yellow", "red", "purple", "green"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    // add that class 
    btn.classList.add("flash");
    // make it disappear after 1 second
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250); 

}

function myFlash(btn){
    // add that class 
    btn.classList.add("userflash");
    // make it disappear after 1 second
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 250); 

}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // selecting a random color from btns array
    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randBtn);
    
    // after the random color is generated we can add it to gameSeq array
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over! <b> Your Score is : ${level} <br> press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}


function btnPress(){
    console.log(this);
    let btn = this;
    myFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}