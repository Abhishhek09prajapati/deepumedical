var discount = document.getElementById('discount');
var mrp = document.getElementsByClassName('mrp')[0];
var rate = document.getElementsByClassName('rate')[0];
var outputanswer = document.getElementById('discountans1');
var customerdiscount1 = document.getElementsByClassName('customerdiscount1')[0];
var customerdiscountbutton = document.getElementById('customerdiscount');
var Gstcount = document.getElementById('Gstcount');
var gstvalue1 = document.getElementsByClassName('gst')[0];
var discountans = 0;
discount.addEventListener('click',()=>{
    if(mrp.value != "" && rate.value != ''){
        discountans = 100-rate.value/mrp.value*100;
        discountans = discountans+"%";
        outputanswer.innerHTML = "Yeh Discount aaya hai "+discountans;
    }else{
        outputanswer.innerHTML = "Don't empty any box";
    }
})
customerdiscountbutton.addEventListener('click',()=>{
    if(customerdiscount1.value!='' && mrp.value != ""){
        discountans = mrp.value-mrp.value*customerdiscount1.value/100
        outputanswer.innerHTML="Customer rate "+discountans ;
    }else{
         outputanswer.innerHTML = "Don't empty any box";
    }
})
Gstcount.addEventListener('click',()=>{
   if(customerdiscount1.value!='' && rate.value != ""&&gstvalue1.vlaue!=''){
        const g = gstvalue1.value/100;
        const d = customerdiscount1/100
        discountans = parseFloat(rate.value*g)+parseFloat(rate.value);
        
        outputanswer.innerHTML= discountans;
    }else{
         outputanswer.innerHTML = "Don't empty any box";
    }
})