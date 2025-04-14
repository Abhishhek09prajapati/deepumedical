const jsonurl = "https://api.npoint.io/3de7ca257b483136648c";
const companyname = document.getElementById('companyname');
let close2 = document.getElementById('menu1');
fetch(jsonurl)
.then(data=> data.json())
.then(data=>{
    companyname.innerHTML = data[0].Companyname;
})
var list1 = document.getElementById("ul1");
close2.addEventListener("click",function(){
    if( close2.innerHTML == "menu"){
        close2.innerHTML = "close";
        list1.style.display = "block";
    }else{
        close2.innerHTML = "menu";
        list1.style.display = "none";
    }
});