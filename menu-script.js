console.log(document.getElementById('menu')); // This should not be null

// Add the menu on top of every page of the website
document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html') // Load the menu.html file
        .then(response => response.text()) // Convert to text
        .then(data => {
            document.getElementById('menu').innerHTML = data; // Insert the menu HTML into the page
        })
        .catch(error => console.error('Error loading menu:', error));
});

// Add the active class to the active menu link, so it can be highlighted in css

let currentPage = window.location.pathname.split("/").pop(); // Get the current URL path (e.g., "/about.html")
let menuLinks = document.querySelectorAll("nav ul li a"); // Get all the menu links
// Loop through each menu link and check if its href matches the current page
menuLinks.forEach(link => {
  let linkPage = link.getAttribute("href");
  
  if (linkPage === currentPage) {
    // Add the 'active' class to highlight the current menu item
    link.classList.add("active");
  }
});

// JavaScript to toggle the responsive menu and header background
document.getElementById("menu-icon").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    var header = document.querySelector("header");

    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        header.classList.remove("header-active"); // Remove half-transparent gray
    } else {
        menu.classList.add("show");
        header.classList.add("header-active"); // Add half-transparent gray
    }
});
