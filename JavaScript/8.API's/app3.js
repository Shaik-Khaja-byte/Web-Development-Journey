function saveToDB(data, success, failure){
    // data saving depends on the internet
    let internetSpeed = Math.floor(Math.random() * 10);
    if(internetSpeed > 5){
        success();
    } else {
        failure();
    }
}

saveToDB("Hello, I'm a developer", 
    ()=>{
    console.log("SUCCESS : data saved to DB");
    saveToDB("motha fucking bitch", ()=>{
        console.log("SUCCESS2");
        saveToDB("arigato", 
        ()=>{
            console.log("SUCCESS3");
        },
        ()=>{
            console.log("FAILURE3");
        });
    }, 
    ()=>{
        console.log("FAILURE2");
    });
    },
    ()=>{
    console.log("FAILURE : data was not saved");
});