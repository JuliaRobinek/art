console.log(document.getElementById('wholehead')); // This should not be null

// Add the menu on top of every page of the website
document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html') // Load the menu.html file
        .then(response => response.text()) // Convert to text
        .then(data => {
            document.getElementById('wholehead').innerHTML = data; // Insert the menu HTML into the page
        })
        .catch(error => console.error('Error loading menu:', error));
});
