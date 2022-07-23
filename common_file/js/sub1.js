const categoryBtns = document.querySelectorAll(".category-btn");

categoryBtns.forEach(btn => {
  btn.addEventListener("click", function (e) {
    location.href = "info/index.html?code=" + e.target.dataset.code;
  });
});
