var result = document.getElementById('result');
var customernumber = document.getElementById('customernumber');
var userName = document.getElementsByClassName('user')[0];
var userAddress = document.getElementsByClassName('user')[1];
var userhistory = document.getElementsByClassName('userhistory')[0];
var customerdiv = document.getElementsByClassName("customerdiv")[0];
var customerdivname = document.getElementsByClassName("customerdiv1")[0];

var user = '';
var usernumber = "";
var usermedicine = [];
var userAddress1 = "";

function userdeatiles() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            
            // Reset previous data
            user = '';
            usernumber = '';
            usermedicine = [];
            userAddress1 = '';

            // Try to find user by number
            const foundUser = data.find(item => customernumber.value == item.number);

            if (foundUser && customernumber.value != "") {
                user = foundUser.name;
                usernumber = foundUser.number;
                usermedicine = foundUser.medicine;
                userAddress1 = foundUser.Address;
                customerdiv.style.display = "block";
        
    
            } else {
                alert("Customer not found!");
                
            }
        })
        .catch(err => {
            console.error("Error fetching data:", err);
            alert("Failed to load data.json");
        });
}

function customerdoova() {
    userName.innerHTML = user.toUpperCase();
    userAddress.innerHTML = userAddress1.toUpperCase();
    customerdivname.style.display = "block";
}

function customerprofile() {
    // Clear previous list first
    userhistory.innerHTML = '';

    // Create list items for each medicine
    usermedicine.forEach(med => {
        const li = document.createElement('li');
        li.textContent = med;
        userhistory.appendChild(li);
    });
   
}
