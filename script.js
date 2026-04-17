
let lastScroll = 0;
const adalmynd = document.querySelector(".aðalmynd");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scrolling DOWN → hide smoothly
    adalmynd.style.transform = "translateY(-100%)";
    adalmynd.style.opacity = "0";
  } else {
    // scrolling UP → show smoothly
    adalmynd.style.transform = "translateY(0)";
    adalmynd.style.opacity = "1";
  }

  lastScroll = currentScroll;
});



/*MENU*/
const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".hero")) {
    menu.classList.remove("active");
  }
});



/*FYRIR FRETTIR OG TILKYNNINGAR*/
const slider = document.querySelector(".slider");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const card = document.querySelector(".card");
const scrollAmount = card.offsetWidth;

slider.addEventListener("scroll", updateButtons);
window.addEventListener("load", updateButtons);

rightBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
  setTimeout(updateButtons, 300);
});

leftBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
  setTimeout(updateButtons, 300);
});


function updateButtons() {
  const maxScroll = slider.scrollWidth - slider.clientWidth;

  if (slider.scrollLeft <= 0) {
    leftBtn.style.visibility = "hidden";
  } else {
    leftBtn.style.visibility = "visible";
  }

  if (slider.scrollLeft >= maxScroll - 1) {
    rightBtn.style.visibility = "hidden";
  } else {
    rightBtn.style.visibility = "visible";
  }
}
