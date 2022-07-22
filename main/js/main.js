const safetyBtn = document.querySelector(".safety-tips");
const popupWrap = document.querySelector(".popup-wrap");
const popupCloseBtn = document.querySelector(".popup-close");

safetyBtn.addEventListener("click", function () {
  popupWrap.classList.remove("d-none");
});
popupCloseBtn.addEventListener("click", function () {
  popupWrap.classList.add("d-none");
});
