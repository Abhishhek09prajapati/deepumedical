var customerNumber = document.getElementById('searchnumber');  //search customer medicne
var ul = document.getElementById('items1');
var btnUserClick = document.getElementById('btnUserClick');
var previousprofile = document.getElementById('previousprofile');

let User = []; // User should probably be reset or handled outside if this function is called repeatedly.

function searchItmes(){
    // 1. Clear previous list items before adding new ones
    ul.innerHTML = ''; 
    User = []; // Clear the user list on each search

    // Optional: Add a check to prevent unnecessary fetching/processing on an empty input
    if (customerNumber.value.trim() === '') {
        btnUserClick.disabled = true;
        btnUserClick.style.background = "grey";
        return; // Stop the function if the input is empty
    }
    
    // Disable button before the search starts
    btnUserClick.disabled = true;
    btnUserClick.style.background = "grey";

    fetch('/Searchpage/customerdata.json')
    .then(data => data.json())
    .then(data => {
        let found = false;
        let customerMedicine = []; // Array to hold the medicine list for the found customer

        for(var i = 0; i < data.length; i++) {
            // Case-insensitive comparison for name search
            const searchValue = customerNumber.value.trim().toLowerCase();
            const customerName = data[i].name ? data[i].name.toLowerCase() : '';

            if (data[i].number == searchValue || customerName.includes(searchValue)){
                User.push(data[i].name);
                customerMedicine = data[i].medicine;
                found = true;
                // Assuming you only want to show medicine for the first matching customer
                break; 
            } 
        }

        if (found && customerMedicine.length > 0) {
            // Enable button and change color if customer is found
            btnUserClick.disabled = false;
            btnUserClick.style.background = "green";

            // 2. Iterate through the found medicine and add to the list
            customerMedicine.forEach(medicine => {
                var li = document.createElement('li');
                li.innerHTML = medicine;
                ul.appendChild(li);
            });
        } else if (!found) {
             // Optional: Display a message if no customer is found
             var li = document.createElement('li');
             li.innerHTML = 'No customer or medicine found.';
             ul.appendChild(li);
        } else {
             // Optional: Handle case where customer is found but has no medicine
             var li = document.createElement('li');
             li.innerHTML = 'Customer found, but no medicine listed.';
             ul.appendChild(li);
        }

    })
    .catch(error => {
        console.error('Error loading JSON:', error); 
        // Re-disable button on error
        btnUserClick.disabled = true;
        btnUserClick.style.background = "grey";
    });  
}


function userdata1(){
    btnUserClick.disabled  = true ;
    btnUserClick.style.background = "grey";
    previousprofile.style.display = "block";
    previousprofile.innerHTML = User.join(', '); // Join the array into a string
}