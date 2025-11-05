var result = 0;
function addTable() {
    const itmesname = document.getElementById('itemname').value.trim();
    const mrp = document.getElementById('mrp').value.trim();
    const discount = document.getElementById('discount').value.trim();
    const qty = document.getElementById('qty').value.trim();
    

    if (!itmesname || !mrp || !discount || !qty) {
        alert("Please Inter All Value")
        return
    }

    var rate = mrp-mrp*discount/100 ;
    var total = rate*qty ;
    result += total ;
    document.getElementById('result').innerHTML = "Total Amount "+result ;
    const tablebody = document.getElementById('dataTable').querySelector('tbody');
    const newRow = tablebody.insertRow();

    newRow.insertCell(0).textContent = qty;
    newRow.insertCell(1).textContent = itmesname;
    newRow.insertCell(2).textContent = mrp;
    newRow.insertCell(3).textContent = rate;
    newRow.insertCell(4).textContent = discount;
    newRow.insertCell(5).textContent = total;

    document.getElementById('itemname').value = "";
    document.getElementById('mrp').value = "";
    document.getElementById('discount').value = "";
    document.getElementById('qty').value = "";

}