const backBtn = document.querySelector(".back-btn");
const getParams = new URLSearchParams(location.search).get("category");
const categoryTitle = document.querySelector(".title");
const tabWrap = document.querySelector(".tab-wrap");
const tabs = document.querySelectorAll(".tab");
const itemWrap = document.querySelector(".item-wrap");
const resultList = tourList[getParams];
window.addEventListener("load", function () {
  categoryTitle.innerText = getParams;

  resultList.forEach(list => {
    createItemList(list);
  });
});

backBtn.addEventListener("click", function () {
  location.href = "../index.html";
});
tabWrap.addEventListener("click", function (e) {
  tabReset();
  e.target.classList.add("on");
  const tabList = resultList.filter(list => list.category === e.target.dataset.list);
  itemWrap.innerHTML = "";
  if (e.target.dataset.list === "all") {
    resultList.forEach(list => {
      createItemList(list);
    });
  } else {
    tabList.forEach(list => {
      createItemList(list);
    });
  }
});

function tabReset() {
  tabs.forEach(tab => {
    tab.classList.remove("on");
  });
}

function createItemList(list) {
  const item = document.createElement("div");
  item.className = "item";
  const itemImg = document.createElement("div");
  itemImg.className = "item-img";
  itemImg.innerText = "이미지";
  const itemInfo = document.createElement("ul");
  itemInfo.className = "item-info";

  const name = document.createElement("li");
  const placeScore = document.createElement("span");
  const place = document.createElement("li");
  const placeDesc = document.createElement("li");

  name.innerText = list.placeName;
  name.className = "item-place-name";
  placeScore.className = "item-score";
  placeScore.innerText = "⭐ " + list.score;
  place.className = "item-location";
  place.innerText = list.location;
  placeDesc.className = "item-desc";
  placeDesc.innerText = list.desc;

  name.appendChild(placeScore);

  itemInfo.appendChild(name);
  itemInfo.appendChild(place);
  itemInfo.appendChild(placeDesc);

  item.appendChild(itemImg);
  item.appendChild(itemInfo);
  itemWrap.appendChild(item);
}
