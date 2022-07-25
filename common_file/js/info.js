const itemWrap = document.querySelector(".item-wrap");

const getParams = new URLSearchParams(location.search).get("code");
const resultList = tourList.filter(list => list.code === getParams);

window.addEventListener("load", function () {
  console.log(resultList[0].title);
  document.querySelector(".title").innerText = resultList[0].title;

  allList();
});

document.querySelector(".tab-wrap").addEventListener("click", function (e) {
  tabReset();
  e.target.classList.add("on");
  const tabList = resultList[0].list.filter(
    list => list.category === e.target.dataset.list
  );
  itemWrap.innerHTML = "";
  if (e.target.dataset.list === "all") {
    allList();
  } else {
    tabList.forEach(list => {
      createItemList(list);
    });
  }
});

function allList() {
  resultList[0].list.forEach(list => {
    createItemList(list);
  });
}
function tabReset() {
  document.querySelectorAll(".tab").forEach(tab => {
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
  placeScore.innerText = "⭐" + list.score;
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
