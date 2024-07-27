// ---------------------------------------------
// -------------- Hamburger Menu ---------------
// ---------------------------------------------

let openIcon = document.querySelector(".nav > i");
let closeIcon = document.querySelector(".nav .navLists i");

openIcon.addEventListener("click", function () {
  let menu = document.querySelector(".nav .navLists");
  menu.classList.add("menu");
});

closeIcon.addEventListener("click", function () {
  let menu = document.querySelector(".nav .navLists");
  menu.classList.remove("menu");
});

// ---------------------------------------------
// ------------------ Header -------------------
// ---------------------------------------------

window.onscroll = function () {
  let elm = document.querySelector("#transparentBg");
  let header = document.querySelector("#header");

  let scroll_position = window.scrollY / 2;
  header.style.backgroundPositionY = -scroll_position + "px";

  // ------------- Transparent BG ----------------

  let elmTop = window.scrollY + 718 - elm.offsetTop;
  if (elm.offsetTop + 433 >= window.scrollY && elmTop >= 0) {
    elm.style.backgroundPositionY = -(elmTop / 8) + "px";
  }
};

// ---------------------------------------------
// ------------- Gallery Section ---------------
// ---------------------------------------------

let sliderNavs = document.querySelectorAll(".sctTwo .sliderNavs");
let slider = document.querySelector(".sctTwo .sliderWrapper");

function calculateMaxScrollLeft() {
  return slider.scrollWidth - slider.clientWidth;
}

sliderNavs[0].addEventListener("click", function () {
  if (slider.scrollLeft == 0) {
    slider.scrollTo({
      left: calculateMaxScrollLeft(),
      behavior: "smooth",
    });
  } else {
    slider.scrollTo({
      left: Math.max(0, slider.scrollLeft - slider.clientWidth),
      behavior: "smooth",
    });
  }
});

sliderNavs[1].addEventListener("click", function () {
  if (slider.scrollLeft == calculateMaxScrollLeft()) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    slider.scrollTo({
      left: Math.min(
        calculateMaxScrollLeft(),
        slider.scrollLeft + slider.clientWidth
      ),
      behavior: "smooth",
    });
  }
});

// Disable horizontal scrolling on touch for mobile devices
function disableHorizontalScroll(event) {
  if (event.cancelable) {
    event.preventDefault();
  }
}

slider.addEventListener("touchstart", disableHorizontalScroll, {
  passive: false,
});

slider.addEventListener("touchmove", disableHorizontalScroll, {
  passive: false,
});

slider.addEventListener("touchend", disableHorizontalScroll, {
  passive: false,
});

// ---------------------------------------------
// ------------ Accordian (Sec 8) --------------
// ---------------------------------------------

let qsBox = document.querySelectorAll(".sctEight .question");

for (let i = 0; i < qsBox.length; i++) {
  qsBox[i].addEventListener("click", function () {
    if (qsBox[i].nextElementSibling.classList.contains("displayTog")) {
      qsBox[i].nextElementSibling.classList.remove("displayTog");
    } else {
      let paras = document.querySelectorAll(".sctEight .qnaContainer p");
      for (let j = 0; j < paras.length; j++) {
        paras[j].classList.remove("displayTog");
      }

      qsBox[i].nextElementSibling.classList.add("displayTog");
    }
  });
}
