let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function(){
    //     console.log("Mouse is on the button");
    // }

    btn.addEventListener("dblclick", sayHello);
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("you double clicked")
    })
}

function sayHello() {
    alert("button clicked");
}

function sayName() {
    console.log("shaik khaja");
}