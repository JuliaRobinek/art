console.log(document.getElementById('menu')); // This should not be null

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
