document.querySelector(".course-name-wrap").addEventListener("click", function (e) {
  if (!e.target.classList.contains("course-btn")) return;
  btnReset(".course-btn");
  e.target.classList.add("on");
  document.querySelector("#course-info h3").innerText = e.target.innerText;
  document.querySelector("#course-info").classList.remove("d-none");
  courseListLoad(e.target.dataset.name);
});

function courseListLoad(courseName) {
  fetch(MOUNTINE_API)
    .then(response => response.json())
    .then(result => {
      const courseList = result.data.filter(list => list["탐방로명"] === courseName);
      createCourseInfoList(courseList[0]);
    });
}

function createCourseInfoList(list) {
  const infoList = document.querySelector(".info-list");
  infoList.innerHTML = "";
  const winter = document.createElement("li");
  winter.innerHTML =
    "입산시간: " +
    list["동절기 입산시간"] +
    "<br />제한시간: " +
    list["동절기 입산제한시간"];
  const springNfall = document.createElement("li");
  springNfall.innerHTML =
    "입산시간: " +
    list["춘추절기 입산시간"] +
    "<br />제한시간: " +
    list["춘추절기 입산제한시간"];
  const summer = document.createElement("li");
  summer.innerHTML =
    "입산시간: " +
    list["하절기 입산시간"] +
    "<br />제한시간: " +
    list["하절기 입산제한시간"];
  const startPoint = document.createElement("li");
  startPoint.innerText = list["입산제한 기준점"];

  infoList.append(winter, springNfall, summer, startPoint);
}
