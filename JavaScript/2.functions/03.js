function averageOfThree(){
    let num1 = parseFloat(prompt("Number 1 : "));
    let num2 = parseFloat(prompt("Number 2 : "));
    let num3 = parseFloat(prompt("Number 3 : "));
    let avg = (num1 + num2 + num3)/3
    console.log(`The average of three numbers is : ${avg}`);
}

averageOfThree();