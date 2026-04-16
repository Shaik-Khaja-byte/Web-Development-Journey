let url = "http://universities.hipolabs.com/search?country=india";

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=> {
    let country = document.querySelector("input").value;
    console.log(country);
    let collArr = await findCollege(country);
    showColleges(collArr);
});

function showColleges(collArr){
    let ul = document.querySelector("#result");
    result.innerText = "";
    for(col of collArr){
        console.log(col.data);
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
    }
}


async function findCollege(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e){
        console.log(e);
        return [];
    }
}