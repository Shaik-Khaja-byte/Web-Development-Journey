// create a paragraph in red saying "Hey I'm red!"

let para = document.createElement("p");
para.innerText = "Hey I'm red!";

para.classList.add("red");
document.querySelector("body").append(para);

// create a blue h3 tag saying "Hey, I'm a blue h3"

let h3 = document.createElement("h3");
h3.innerText = "Hey, I'm a blue h3!";
h3.classList.add("blue");

document.querySelector("body").append(h3);

// create a div with black border and background pink with a h1 saying "I'm in div" and a paragraph saying "me too!"

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");

h1.innerText = "I'm inside a div!";
p.innerText = "me too!";

div.append(h1);
div.append(p);

div.classList.add("div");
document.querySelector("body").append(div);