let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let res = await getDog();
    console.log(res);
    let img = document.querySelector("#result");
    img.src = res;
})

let url = "https://dog.ceo/api/breeds/image/random";

async function getDog() {
    try{
        let ans = await axios.get(url);
        return ans.data.message;
    } catch (e){
        console.log("ERROR - ", e);
        return "Bad Request";
    }
}
