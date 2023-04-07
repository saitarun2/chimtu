// Get the current year for the footer
const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer p');
footer.innerHTML = `&copy; ${currentYear} My Website. All rights reserved.`;

// Add active class to the current page link in the navigation
const links = document.querySelectorAll('nav ul li a');
for (let i = 0; i < links.length; i++) {
  if (links[i].href === window.location.href) {
    links[i].classList.add('active');
  }
}

