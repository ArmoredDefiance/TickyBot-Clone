//Fade button in on load
document.addEventListener('DOMContentLoaded', function () {
  let btnWhite = document.getElementById('btn--white');
  btnWhite.classList.add('btn--fade');
});

//Smooth scrolling from navigation bar
const navLinks = document.querySelectorAll('.navigation a');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', navLinkClick);
}

function navLinkClick(event) {
  smoothScroll(event);
}

function smoothScroll(event) {
  window.scrollTo({
    behavior: 'smooth',
  });
}
