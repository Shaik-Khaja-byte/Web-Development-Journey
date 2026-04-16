// usage of async functions

async function greet() {
    // throw console.log("Weak Connection");
    return "Hello";
}

greet()
.then((result)=>{
    console.log("promise was fulfilled");
    console.log(result);
})
.catch((ans)=>{
    console.log("not fulfilled")
    console.log(ans);
});
