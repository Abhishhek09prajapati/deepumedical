var customerNumber = document.getElementById('searchnumber');
var ul = document.getElementById('items1');
let result = [];
function searchItmes(){
    fetch('customerdata.json')
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
    .catch(error => console.error('Error loading JSON:', error));
    
}
