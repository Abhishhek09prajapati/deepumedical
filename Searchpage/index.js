var customerNumber = document.getElementById('searchnumber');
var ul = document.getElementById('items1');
let result = [];
function searchItmes(){
    fetch('https://api.npoint.io/b292a2b7acd4874c5f09')
    .then(data=>data.json())
    .then(data=>{
        if(customerNumber.value != '' ){
            for(var i=0;i<data.length;i++){
                if(data[i].number == customerNumber.value || data[i].name == customerNumber.value){
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
            console.log("please inter");
        }
    })
    
}