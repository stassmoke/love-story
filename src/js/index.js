import slider from './slider';

slider();

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
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).textContent = this.textContent;
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

// PERSPECTIVE BOX //

(function() {
  // Init
  let container = document.getElementById("container-perspective");
  let inner = document.getElementById("container-perspective_inner");

  console.log(container,inner )

  // Mouse
  let mouse = { 
    _x: 0,
    _y: 0,
    x: 0, 
    y: 0,
    updatePosition: function(event) {
      let e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  mouse.setOrigin(container);

  let counter = 0;
  let updateRate = 10;
  let isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
  };

  let onMouseEnterHandler = function(event) {
    update(event);
  };

  let onMouseLeaveHandler = function() {
    inner.style = "";
  };

  let onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  let update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  let updateTransformStyle = function(x, y) {
    let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
})();

// PERSPECTIVE BOX END //
