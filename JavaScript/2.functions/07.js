// guess the output of the following code

let greet = "hello"; // global scope

function changegreet(){
    greet = "namaste";
    console.log(greet); // function scope
    function innergreet(){
        console.log(greet); //lexical scope
    }
}

console.log(greet);
changegreet();
