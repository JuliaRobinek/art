console.log(document.getElementById('menu')); // This should not be null

document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html') // Load the footer.html file
        .then(response => response.text()) // Convert to text
        .then(data => {
            document.getElementById('footer').innerHTML = data; // Insert the menu HTML into the page
        })
        .catch(error => console.error('Error loading menu:', error));
});

// JavaScript to set the current year in the footer
    // Get the current year
//    const currentYear = new Date().getFullYear();
// document.getElementById("current-year").textContent = new Date().getFullYear();

// Insert the current year into the span with id="current-year"
document.addEventListener('DOMContentLoaded', function() {
 var currentYear = new Date().getFullYear();
 document.getElementById('currentYear').textContent = currentYear;
});
