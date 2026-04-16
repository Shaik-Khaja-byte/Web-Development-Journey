let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let res = await getFacts();
    console.log(res);
    let p = document.querySelector("#result");
    p.innerText = res;
})

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e){
        console.log("Error - ", e);
        return "No Fcat Found";
    }
}