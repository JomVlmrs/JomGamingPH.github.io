document.addEventListener("DOMContentLoaded", function() {
    // Get the current page's filename (e.g., "index.html", "about.html", etc.)
    var currentPage = window.location.pathname.split("/").pop();

    // Get all navigation links
    var navLinks = document.querySelectorAll("nav ul li a");

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        // Check if the link's href matches the current page
        if (link.getAttribute("href") === currentPage) {
            // Add a class to highlight the active link
            link.classList.add("active");
        }
    });
});

// Update active link when a new page is loaded
window.addEventListener("load", function() {
    // Get the current page's filename (e.g., "index.html", "about.html", etc.)
    var currentPage = window.location.pathname.split("/").pop();

    // Get all navigation links
    var navLinks = document.querySelectorAll("nav ul li a");

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        // Check if the link's href matches the current page
        if (link.getAttribute("href") === currentPage) {
            // Add a class to highlight the active link
            link.classList.add("active");
        } else {
            // Remove active class from other links
            link.classList.remove("active");
        }
    });
});
