//Fade button in on load
document.addEventListener("DOMContentLoaded", function () {
  let btnWhite = document.getElementById("btn--white");
  btnWhite.classList.add("btn--fade");
});

const navLinks = document.querySelectorAll(".navigation a");
const cards = document.querySelectorAll(".card");
const btnTop = document.querySelector(".btn--top");
const btnLink = document.getElementById("btn--link");

//Smooth scrolling from navigation bar
//apply event listener to all but the last one
for (let i = 0; i < 3; i++) {
  navLinks[i].addEventListener("click", navLinkClick);
}

btnLink.addEventListener("click", navLinkClick);

function navLinkClick(event) {
  event.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}

//fade in card and button, fade out button on scroll up  on scroll using active class
window.onscroll = function () {
  if (window.pageYOffset > 1120) {
    btnTop.style.opacity = 1;

    cards.forEach((card) => {
      card.classList.add("active");
    });
  } else if (window.pageYOffset < 810) {
    btnTop.style.opacity = 0;
  }
};
