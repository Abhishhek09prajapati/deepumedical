var customerNumber = document.getElementById('searchnumber');
var ul = document.getElementById('items1');
var btnUserClick = document.getElementById('btnUserClick');
var previousprofile = document.getElementById('previousprofile');
var customerCard = document.getElementsByClassName('customer_list')[0];
let result = [];
let User = [];
let result2 = [];
let customerInfo = [];
function searchItmes(){
    btnUserClick.disabled  = false ;
    btnUserClick.style.background = "green";
    fetch('customerdata.json')
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
function show1(){
    customerCard.style.display = "block";
}


fetch('customerdata.json')   
.then(data=>data.json())
    .then(data=>{
        var numberofcustomer = document.getElementsByClassName('numberofcustomer')[0];
        numberofcustomer.style.width="100%";
        numberofcustomer.innerHTML = `Customer of Number = ${data.length}`
        data.map((data1,i,k)=>{
            let cardDiv = document.createElement('div');
            cardDiv.className = "card1";
            cardDiv.innerHTML = `${data[i].name} / (${data[i].number}) /${data[i].medicine}`
            customerCard.append(cardDiv)
        }
            
        )} )
        .catch(err=>console.log(err));

