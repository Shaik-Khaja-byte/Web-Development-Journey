let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    console.log(event);
    console.log("button was clicked");
});

let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event){
    console.log("key = ", event.key);
    console.log("code = ", event.code);
    console.log("a key was pressed");
})