// basics of this keyword

const student = {
    name : "Khaja",
    age : 21,
    eng : 97,
    math : 95,
    phy : 93,

    // method
    // getAvg(){
    //     let avg = (eng + math + phy)/3; // error in this line because eng was not defined
    //     console.log(avg);
    // }

    // getAvg(){
    //     console.log(this);
    //     let avg = (this.eng + this.math + this.phy)/3; 
    //     console.log(avg);
    // }
};

function getAvg(){
    console.log(this); // window object by default
}