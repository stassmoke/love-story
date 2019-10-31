"use strict";

import slider from "../js/slider"

// RANGE SLIDER //

var noUiSliderAge = document.getElementById('noUiSliderAge');

noUiSlider.create(noUiSliderAge, {
    start: [25, 80],
    connect: true,
    tooltips: true,
    range: {
        'min': [18],
        'max': [100]
    }
});

var noUiSliderWeight = document.getElementById('noUiSliderWeight');

noUiSlider.create(noUiSliderWeight, {
    start: [60, 90],
    connect: true,
    tooltips: true,
    range: {
        'min': [50],
        'max': [250]
    }
});

var noUiSliderHeight = document.getElementById('noUiSliderHeight');

noUiSlider.create(noUiSliderHeight, {
    start: [150, 180],
    connect: true,
    tooltips: true,
    range: {
        'min': [120],
        'max': [300]
    }
});

// RANGE SLIDER //

// CUSTOM SELECT //

for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
  dropdown.addEventListener("click", function() {
    this.querySelector(".custom-select").classList.toggle("open");

  });
}

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function() {

    if (!this.classList.contains("selected")) {
      this.parentNode.querySelector(".custom-option.selected").classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(".custom-select__trigger span").textContent = this.textContent;
    }
  });
}

window.addEventListener("click", function(e) {
  for (const select of document.querySelectorAll(".custom-select")) {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  }
});

// CUSTOM SELECT END //

// NAVIGATION //

const btnBurger = document.getElementById("navigation-burger__mobile");

const navMenu = document.getElementById("navigation-wrap__mobile");

const close = document.getElementById("close-nav");

// const body = document.getElementsByTagName("body")

btnBurger.addEventListener("click", function() {
  navMenu.classList.add("__open");
  // document.body.style.pointerEvents = "none"
});

close.addEventListener("click", function() {
  navMenu.classList.remove("__open");
  // document.body.style.pointerEvents = "all"

});

// NAVIGATION END //

// SEARCH MODAL //

const btnSearch = document.getElementById("btn-search")

const modalSearch = document.getElementById("modal-search")

const closeSearch = document.getElementById("close-search");

console.log(btnSearch, modalSearch, closeSearch)

btnSearch.addEventListener("click", function() {
  modalSearch.classList.add("__open");
  // document.body.style.pointerEvents = "none"
});

closeSearch.addEventListener("click", function() {
  modalSearch.classList.remove("__open");
  // document.body.style.pointerEvents = "all"

});
// SEARCH MODAL END //






slider();

