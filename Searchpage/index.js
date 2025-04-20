var customerNumber = document.getElementById('searchnumber');
var ul = document.getElementById('items1');
var btnUserClick = document.getElementById('btnUserClick');
var previousprofile = document.getElementById('previousprofile');
let result = [];
let User = [];
let result2 = [];
function searchItmes(){
    btnUserClick.disabled  = false ;
    btnUserClick.style.background = "green";
    fetch('/Searchpage/customerdata.json')
    .then(data=>data.json())
    .then(data=>{
        if(customerNumber.value != '' ){
            for(var i=0;i<data.length;i++){

                if(data[i].number == customerNumber.value || data[i].name == customerNumber.value){
                    User.push(data[i].name);
                    result.push(...data[i].medicine);
                    for( var j=0;j<result.length;j++){
                        var li = document.createElement('li');
                        li.innerHTML = result[j];
                        ul.appendChild(li);
                    }
                    result=[];
                    customerNumber.value="";
                } 
            }
        }else{
            alert("Please Enter Customer Number");
        }
    })
    .catch(error => console.error('Error loading JSON:', error));  
}


function userdata1(){
    btnUserClick.disabled  = true ;
    btnUserClick.style.background = "grey";
    previousprofile.style.display="block";
    previousprofile.innerHTML = User;
}

