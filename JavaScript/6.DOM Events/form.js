let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    // console.log("form submitted");
    event.preventDefault();

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    // console.log(user.value);
    // console.log(pass.value);

    // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

// change event - helps to track large event i.e., tracks the initial and final change

let inp = document.querySelector("input");

inp.addEventListener("change", function(){
    console.log("change detected");
    console.log("final change = ", inp.value);
})

// input event - helps to track the small changes i.e., tracks every single letter change


inp.addEventListener("input", function(){
    console.log("input change = ", inp.value);
})