document.querySelector(".course-name-wrap").addEventListener("click", function (e) {
  if (!e.target.classList.contains("course-btn")) return;
  btnReset(".course-btn");
  e.target.classList.add("on");
  document.querySelector("#course-info h3").innerText = e.target.innerText;
  document.querySelector("#course-info").classList.remove("d-none");
  courseListLoad(e.target.dataset.name);
  document.querySelector("#info-list-wrap").innerHTML = "";
});

function courseListLoad(courseName) {
  fetch(MOUNTINE_API)
    .then(response => response.json())
    .then(result => {
      const courseList = result.data.filter(list => list["탐방로별"] === courseName);
      courseList.forEach(course => {
        createCourseInfoList(course);
      });
    });
}

function createCourseInfoList(list) {
  const infoList = document.createElement("ul");
  infoList.className = "info-list";
  const winter = document.createElement("li");
  winter.innerHTML = list["동절기"];
  const springNfall = document.createElement("li");
  springNfall.innerHTML = list["춘추절기"];
  const summer = document.createElement("li");
  summer.innerHTML = list["하절기"];
  const startPoint = document.createElement("li");
  startPoint.innerText = list["통제장소"];

  infoList.append(winter, springNfall, summer, startPoint);
  document.querySelector("#info-list-wrap").appendChild(infoList);
}
