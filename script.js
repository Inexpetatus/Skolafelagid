document.addEventListener("DOMContentLoaded", function () {

    const boxes = document.querySelectorAll(".box");

    function checkBoxes() {
        const triggerBottom = window.innerHeight * 0.80;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkBoxes);

    checkBoxes();

});

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

const scrollAmount = slider.offsetWidth / 3; // one card width

rightBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
});

leftBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
});
