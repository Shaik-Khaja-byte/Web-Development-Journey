// use of rest it is just opposite to spread -> takes multiple arguments and puts it into an iterable

function print(...args){
    console.log(arguments); // aruments is a collection that stores arguments
    for(let i=0; i<args.length; i++){
        console.log("you gave : ", args[i]);
    }
}

function min(...args){
    return args.reduce((min, el) => {
        if(min > el){
            return el;
        } else {
            return min;
        }
    });
}
