var result = document.getElementById('result');
var customernumber = document.getElementById('customernumber');
var userName = document.getElementsByClassName('user')[0];
var userAddress = document.getElementsByClassName('user')[1];
var userhistory = document.getElementsByClassName('userhistory')[0];
var customerdiv = document.getElementsByClassName("customerdiv")[0];
var customerdivname = document.getElementsByClassName("customerdiv1")[0];
var customerphone = document.getElementById('customermobile2');
var user = '';
var usernumber = "";
var usermedicine = [];
var userAddress1 = "";
var customermbile = [];

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

function customermobile1(){
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            data.sort((a, b) => {
                // localeCompare is the standard way to compare strings in ascending order
                return a.number.localeCompare(b.number);
            });
        
            // 🚨 FIX 1: Changed <= data.length to < data.length
            for (let i = 0; i < data.length; i++) {
                // Check if the item and number property exist before pushing
                if (data[i] && data[i].number) {
                    customermbile.push(data[i].number);
                }
            }
            
            // 🚨 FIX 2: Move the list generation inside the .then() block
            // This ensures customermbile is populated BEFORE iterating over it.
            renderCustomerMobiles();
        }
    ).catch((e) => console.error("Error populating customermbile:", e));
}

// Separate function for list creation
function renderCustomerMobiles() {
    // Clear previous list items if any
    customerphone.innerHTML = ''; 

    // Use forEach for cleaner iteration
    customermbile.forEach(mobile => {
        const li = document.createElement('li');
        li.innerHTML = mobile;
        customerphone.appendChild(li);
    });
}

customermobile1();