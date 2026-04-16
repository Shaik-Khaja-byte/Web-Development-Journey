// forEach with array of objects

let obj = [
    {
        name : "Shaik",
        marks : 78
    },

    {
        name : "Khaja",
        marks : 87
    },

    {
        name : "Fairoza",
        marks : 97
    }
];

obj.forEach((obj) => {
    console.log(obj.marks);
});