const popupWrap = document.querySelector(".popup-wrap");

window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".weather-info h3").innerText =
    document.querySelector(".map button.on").innerText;
});
document.querySelector(".safety-tips").addEventListener("click", function () {
  popupWrap.classList.remove("d-none");
});

document.querySelector(".popup-close").addEventListener("click", function () {
  popupWrap.classList.add("d-none");
});

document.querySelector(".map").addEventListener("click", function (e) {
  if (e.target.localName === "button") {
    btnReset();
    e.target.classList.add("on");
    document.querySelector(".weather-info h3").innerText = e.target.innerText;
  }
});

function btnReset() {
  document.querySelectorAll(".map button").forEach(btn => {
    btn.classList.remove("on");
  });
}
