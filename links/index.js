let companyimage = [
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733375958/Deepu%20Medical/company/himalaya.svg",
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733375904/Deepu%20Medical/company/intas.jpg",
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733375836/Deepu%20Medical/company/xipka.jpg",
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733375740/Deepu%20Medical/company/fdc.jpg",
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733375700/Deepu%20Medical/company/Mankind.png",
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733375639/Deepu%20Medical/company/alkem.png",
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733375621/Deepu%20Medical/company/Cipla.png",
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733375548/Deepu%20Medical/company/sun.jpg",
];

let companyname1 = document.getElementsByClassName("companyname")[0];
for(let i=0; i<companyimage.length; i++){
    let companydiv = document.createElement("div");
    companyname1.appendChild(companydiv);
    companydiv.className = "companydiv1"
    let companyimage1= document.createElement("img");
    companydiv.appendChild(companyimage1);
    companyimage1.src = companyimage[i]; 
};
let bimage = [
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733379883/Deepu%20Medical/promotion%20image/Modern_Top_10_Shocking_Moments_Youtube_Thumbnail_iczyv8.png",
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733379791/Deepu%20Medical/promotion%20image/2_wk8z1w.png",
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733379785/Deepu%20Medical/promotion%20image/3_qww28t.png",
    "https://res.cloudinary.com/dqwsepgzc/image/upload/v1733379782/Deepu%20Medical/promotion%20image/4.png",
];


let i = 0;
setInterval(function(){
    document.querySelector('.promotionimage img').src = bimage[i];
    i = (i + 1) % bimage.length;
}, 2500);  // Change image every 3 seconds

let flag = true;
let view1 = document.getElementsByClassName("menu5")[0];
let menuview = document.querySelector(".main ul");
function close1(){
    if(flag){
        view1.innerHTML = "X" ;
        menuview.style.display = "block";
        view1.style.backgroundColor = "red";
        flag = false;
    }else {
        view1.innerHTML = "menu" ;
        menuview.style.display = "none";
        view1.style.backgroundColor = "blue";
        flag = true;
    }
}
    


