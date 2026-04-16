// promises are rejected and resolved with some data (valid results/ errors)

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
.then((result)=>{
    console.log("result : ", result);
    console.log("success1");
    return saveToDB("Hell");
})
.then((result)=>{
    console.log("result : ", result);
    console.log("success2");
})
.catch((error)=>{
    console.log("error : ", error);
    console.log("faliure");
});