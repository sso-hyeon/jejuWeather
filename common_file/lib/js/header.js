const menuBtn = document.querySelector(".menu-btn");
const menuWrap = document.querySelector("#menu-wrap");
const menuCloseBtn = document.querySelector(".menu-close");

menuBtn.addEventListener("click", function () {
  menuWrap.classList.toggle("d-none");
  if (!menuWrap.classList.contains("d-none")) {
    TweenMax.to("#menu-wrap .menu", 0.5, { x: -400 });
  }
});

menuCloseBtn.addEventListener("click", function () {
  TweenMax.to("#menu-wrap .menu", 0.5, {
    x: 400,
    onComplete: function () {
      menuWrap.classList.add("d-none");
    }
  });
});
