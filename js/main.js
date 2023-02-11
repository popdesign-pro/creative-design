//! default anchor
let anchors = document.querySelectorAll(".links a");
anchors.forEach(function (a) {
  a.addEventListener("click", function (e) {
    anchors.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
//! show / hide Theme box
const gear = document.querySelector(".gear");
const theme = document.querySelector(".theme");

gear.onclick = () => {
  theme.classList.toggle("show");
};

//! active color
const colors = document.querySelectorAll(".fav_color");
const main = document.querySelector(".main");
let fonts = document.querySelectorAll(".font div");

// apply theme from local storage to page
setTheme();
function setTheme() {
  if (window.localStorage.color) {
    main.dataset.color = window.localStorage.color;
    // if storeage color = active color
    for (let color of colors) {
      if (color.dataset.color === window.localStorage.color) {
        color.classList.add("active-color");
      } else {
        color.classList.remove("active-color");
      }
    }
  }
  if (window.localStorage.font) {
    main.dataset.font = window.localStorage.font;
    // if storeage font = active font
    for (let font of fonts) {
      if (font.dataset.name === window.localStorage.font) {
        font.classList.add("active-font");
      } else {
        font.classList.remove("active-font");
      }
    }
  }
}

colors.forEach((clr) => {
  clr.addEventListener("click", (e) => {
    colors.forEach((ele) => {
      ele.classList.remove("active-color");
    });
    e.target.classList.add("active-color");
    window.localStorage.setItem("color", e.target.dataset.color);
    setTheme();
  });
});

fonts.forEach((font) => {
  font.addEventListener("click", (e) => {
    fonts.forEach((ele) => {
      ele.classList.remove("active-font");
    });
    e.target.classList.add("active-font");
    window.localStorage.setItem("font", e.target.dataset.name);
    setTheme();
  });
});
