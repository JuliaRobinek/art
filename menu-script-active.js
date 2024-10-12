console.log(document.getElementById('menu')); // This should not be null

// Add the active class to the active menu link, so it can be highlighted in css

let currentPage = window.location.pathname.split("/").pop(); // Get the current URL path (e.g., "/about.html")
let menuLinks = document.querySelectorAll("header div ul li a"); // Get all the menu links
// Loop through each menu link and check if its href matches the current page
menuLinks.forEach(link => {
  let linkPage = link.getAttribute("href");
  
  if (linkPage === currentPage) {
    // Add the 'active' class to highlight the current menu item
    link.classList.add("active");
  }
});
