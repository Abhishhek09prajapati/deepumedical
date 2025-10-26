var result = document.getElementById('result');
var customernumber = document.getElementById('customernumber');
var userName = document.getElementsByClassName('user')[0];
var userAddress = document.getElementsByClassName('user')[1];
var userhistory = document.getElementsByClassName('userhistory')[0];




var user = '';
var usernumber = "";
var usermedicine = [];
var userAddress1 = "";

var d = new Date()

function userdeatiles(){
    fetch('data.json')
    .then(res=>res.json())
    .then(data =>{
        
        for(let i=0;i<data.length;i++){
           if(customernumber.value == data[i].number){
            user = data[i].name;
            usernumber = data[i].number;
            usermedicine = data[i].medicine;
            userAddress1 = data[i].Address;
           }
        }
        userName.innerHTML = user.toLocaleUpperCase();
        userAddress.innerHTML = userAddress1.toLocaleUpperCase();

        for(let i = 0;i<usermedicine.length;i++){
            const li = document.createElement('li');
            li.innerHTML = usermedicine[i];
            userhistory.appendChild(li)
        }

    })
}




