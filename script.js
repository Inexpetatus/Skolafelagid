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
/*
let lastScroll = 0;
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    hero.style.transform = "translate(-50%, -150%)"; // hide
  } else {
    hero.style.transform = "translate(-50%, 0)"; // show
  }

  lastScroll = currentScroll;
});*/

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