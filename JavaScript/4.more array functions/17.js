// exploring destructuring of object literals

const student = {
    name : "shaik",
    class : 9,
    age : 15,
    subjects : ["kannada", "math", "science"],
    username : "desishaikster",
    password : "i'masophist"
};

let {username : user, password : passwd, city : place = "Mumbai"} = student;
