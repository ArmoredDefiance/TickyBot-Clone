//Fade button in on load
document.addEventListener("DOMContentLoaded", function () {
  let btnWhite = document.getElementById("btn--white");
  btnWhite.classList.add("btn--fade");
});

//Smooth scrolling from navigation bar
const navLinks = document.querySelectorAll(".navigation a");

//apply event listener to all but the last one
for (let i = 0; i < 3; i++) {
  navLinks[i].addEventListener("click", navLinkClick);
}

function navLinkClick(event) {
  event.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}

//fade card in on scroll using active class
const cards = document.querySelectorAll(".card");

window.onscroll = function () {
  if (window.pageYOffset > 1120) {
    cards.forEach((card) => {
      card.classList.add("active");
    });
  }
};
