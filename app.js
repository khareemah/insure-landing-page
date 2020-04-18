let hamburger = document.getElementById("hamburger");
let navlist = document.getElementById("navlist");
let icon_hamburger = document.querySelector(".icon_hamburger");
hamburger.addEventListener("click", function() {
  navlist.classList.toggle("show");
});
