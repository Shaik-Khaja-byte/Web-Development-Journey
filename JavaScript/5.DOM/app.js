let smallImg = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImg.length; i++){
    console.dir(smallImg[i].src);
    smallImg[i].src = "assets/OIP.jpeg";
    console.log(`image ${i} changed`);
}