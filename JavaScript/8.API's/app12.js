// using async and await with fetch API
let url = "https://catfact.ninja/fact";

async function getResponse() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (err) {
        console.log("ERROR - ", err);
    }
}