// improved version of the promises
// promise chaining
function saveToDB(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("Hell Yeah! Success");
        } else {
            reject("I'm Sorry Man");
        }
    });
}

saveToDB("Hello")
.then(()=>{
    console.log("success1");
    return saveToDB("Hell");
})
.then(()=>{
    console.log("success2");
    return saveToDB("Hel");
})
.then(()=>{
    console.log("success3");
})
.catch(()=>{
    console.log("promise was rejected");
})