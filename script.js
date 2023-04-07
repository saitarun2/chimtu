// Change the background color of the header when the user scrolls down
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Alert the user when they click on the "Learn more" button
var learnMoreButton = document.querySelector("a");
learnMoreButton.addEventListener("click", function () {
  alert("Thanks for your interest!");
});
