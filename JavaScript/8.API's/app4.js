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

// now as the Promise is an object it will have some methods, 
// most frequently used methods -> then(), catch()

// let's call the function
saveToDB("Hello world").then(()=>{
    console.log("Success!");
})
.catch(()=>{
    console.log("Sorry Man!");
})