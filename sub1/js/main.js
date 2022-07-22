const categoryBtns = document.querySelectorAll(".category-btn");

categoryBtns.forEach((btn, idx) => {
  btn.addEventListener("click", function (e) {
    location.href = "info/index.html?category=" + e.target.dataset.param;
  });
});
