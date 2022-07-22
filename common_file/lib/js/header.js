const wrapper = document.querySelector("#wrapper");
const mainSection = document.querySelector("#main");
const menuBtn = document.querySelector(".menu-btn");
const menuTextList = [
  { name: "홈", page: "main" },
  { name: "관광지 추천", page: "sub1" },
  { name: "옷차림 추천", page: "sub2" },
  { name: "한라산 입하산출입제한시간 현황", page: "sub3" }
];

window.addEventListener("DOMContentLoaded", function () {
  createMenuWrap();
});

menuBtn.addEventListener("click", function () {
  const menuWrap = document.querySelector("#menu-wrap");
  menuWrap.classList.toggle("d-none");
  if (!menuWrap.classList.contains("d-none")) {
    TweenMax.to("#menu-wrap .menu", 0.5, {
      x: -400,
      start: function () {
        TweenMax.to("#menu-wrap", 0.3, { opacity: 1 });
      }
    });
  }
});

function createMenuWrap() {
  const menuWrap = document.createElement("aside");
  menuWrap.id = "menu-wrap";
  menuWrap.className = "d-none";
  const menu = document.createElement("div");
  menu.className = "menu";
  const menuCloseBtn = document.createElement("div");
  menuCloseBtn.className = "menu-close";
  menuCloseBtn.innerText = "닫기";
  const menuList = document.createElement("ul");
  menuList.className = "menu-list";
  menuTextList.forEach(text => {
    const list = document.createElement("li");
    list.innerText = text.name;
    list.dataset.page = text.page;
    menuList.appendChild(list);
  });

  menu.appendChild(menuCloseBtn);
  menu.appendChild(menuList);
  menuWrap.appendChild(menu);
  wrapper.insertBefore(menuWrap, mainSection);

  menuCloseBtn.addEventListener("click", function () {
    TweenMax.to("#menu-wrap .menu", 0.5, {
      x: 400,
      onComplete: function () {
        menuWrap.classList.add("d-none");
      },
      start: function () {
        TweenMax.to("#menu-wrap", 0.3, { opacity: 0 });
      }
    });
  });

  menuList.addEventListener("click", function (e) {
    const pageName = e.target.dataset.page;
    if (!pageName) return;
    if (location.href.split("/").indexOf("info") > 0) {
      location.href = "../../" + e.target.dataset.page + "/index.html";
    } else {
      location.href = "../" + e.target.dataset.page + "/index.html";
    }
  });
}
