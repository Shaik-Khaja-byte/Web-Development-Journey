// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

// let btn = document.createElement("button");

// btn.innerText = "click me!";

// document.querySelector("body").append(btn);

// btn.addEventListener("click", function(){
//     btn.style.backgroundColor = "green";
//     console.log("color changed to green");
// })

// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function(){
    let filteredValue = "";
    for(let char of inp.value){
        if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' '){
            filteredValue += char;
        }
    }
    h2.innerText = filteredValue;
});