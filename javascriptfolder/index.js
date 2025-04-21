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


var staffimage = document.getElementById('staffimage');
var staffName = document.getElementById('staffName');
var staffNumber = document.getElementById('staffNumber');
var staff_flag = 0;
let staff = []

fetch('https://api.npoint.io/e7da991ff5944fca563b')
.then(res=>res.json())
.then(data =>{
    staff.push(...data)
})

setInterval(function staff_view(){
    if(staff_flag==0){
        staffimage.src = staff[0].img;
        staffName.innerHTML = staff[0].name;
        staffNumber.innerHTML = staff[0].number;
        staff_flag=1;
    }else if(staff_flag==1){
        staffimage.src = staff[1].img;
        staffName.innerHTML = staff[1].name;
        staffNumber.innerHTML = staff[1].number;
        staff_flag=2;
    }else if(staff_flag==2){
        staffimage.src = staff[2].img;
        staffName.innerHTML = staff[2].name;
        staffNumber.innerHTML = staff[2].number;
        staff_flag=3;
    }else if(staff_flag==3){
        staffimage.src = staff[3].img;
        staffName.innerHTML = staff[3].name;
        staffNumber.innerHTML = staff[3].number;
        staff_flag=0;
    }
    
},3000)