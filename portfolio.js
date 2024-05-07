
const menubar = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");
const link = document.querySelector("nav");

// Set the initial width of the menu bar to 50% of the viewport width
// menubar.style.width = "50%";

menubar.onclick = function() {
  menubar.classList.toggle("active");
  nav_header.classList.toggle("active");
}

// Event listener for each link within the menu bar
const menuLinks = document.querySelectorAll(".header nav a");
menuLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Remove "active" class from menubar and header when a link is clicked
    menubar.classList.remove("active");
    nav_header.classList.remove("active");
  });
});
document.addEventListener("click", function(e){
  if(!menubar.contains(e.target) && !nav_header.contains(e.target)){
    menubar.classList.remove("active");
  nav_header.classList.remove("active");
  }
});