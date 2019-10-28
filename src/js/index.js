
import slider from './slider';

"use strict";

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

// window.addEventListener('click', function (e) {
//     const select = document.querySelector('.custom-select')
//     if (!select.contains(e.target)) {
//         select.classList.remove('open');
//     }
// });

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

btnBurger.addEventListener("click", function() {
  navMenu.classList.add("__open");
});

close.addEventListener("click", function() {
  navMenu.classList.remove("__open");
});

console.log(btnBurger, navMenu)

// NAVIGATION END //



slider();