const popupWrap = document.querySelector(".popup-wrap");
const hourWeatherList = document.querySelector("#hour-weather-list");

window.addEventListener("DOMContentLoaded", function () {
  const onArea = document.querySelector(".map button.on");
  document.querySelector(".weather-info h3").innerText = onArea.innerText;
  weatherLoad(onArea.dataset.lat, onArea.dataset.lon);
  dayWeatherLoad(onArea.dataset.lat, onArea.dataset.lon);
});
document.querySelector(".safety-tips").addEventListener("click", function () {
  popupWrap.classList.remove("d-none");
});

document.querySelector(".popup-close").addEventListener("click", function () {
  popupWrap.classList.add("d-none");
});

document.querySelector(".map").addEventListener("click", function (e) {
  if (e.target.localName === "button") {
    btnReset(".map button");
    e.target.classList.add("on");
    document.querySelector(".weather-info h3").innerText = e.target.innerText;
    const lat = e.target.dataset.lat;
    const lon = e.target.dataset.lon;

    hourWeatherList.innerHTML = "";

    weatherLoad(lat, lon);
    dayWeatherLoad(lat, lon);
  }
});

function creatHourList(list) {
  const wrap = document.createElement("ul");
  const hour = document.createElement("li");
  const getTime = new Date(list.dt_txt).getTime() + 1000 * 60 * 60 * 9;
  hour.innerText = new Date(getTime).getHours();
  const icon = document.createElement("li");
  icon.style.background =
    "url(../common_file/images/weather/" +
    list.weather[0].icon +
    ".png) no-repeat center center / contain";
  const temp = document.createElement("li");
  temp.innerText = list.main.temp;
  const hum = document.createElement("li");
  hum.innerText = list.main.humidity;
  const wind = document.createElement("li");
  wind.innerText = Math.round(list.wind.speed);
  const rainNsnow = document.createElement("li");
  let snow = list.snow ? list.snow["3h"] : "-";
  let rain = list.rain ? list.rain["3h"] : "-";
  rainNsnow.innerText = rain + "/" + snow;

  wrap.append(hour, icon, temp, hum, wind, rainNsnow);
  hourWeatherList.appendChild(wrap);
}

function dayWeatherLoad(lat, lon) {
  const WEATHER_API =
    WEATHER_BASE_URL +
    "forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=metric&appid=" +
    API_KEY;

  fetch(WEATHER_API)
    .then(response => response.json())
    .then(result => {
      result.list.forEach(list => {
        creatHourList(list);
      });
    });
}

function weatherLoad(lat, lon) {
  const WEATHER_API =
    WEATHER_BASE_URL +
    "weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=metric&appid=" +
    API_KEY;

  fetch(WEATHER_API)
    .then(response => response.json())
    .then(result => {
      printWeather(result);
    });
}

function printWeather(list) {
  document
    .querySelector("#temp-icon")
    .setAttribute(
      "src",
      "../common_file/images/weather/" + list.weather[0].icon + ".png"
    );
  document.querySelector("#temp").innerText = Math.round(list.main.temp) + "℃";
  document.querySelector("#min-temp").innerText = Math.round(list.main.temp_min) + "℃";
  document.querySelector("#max-temp").innerText = Math.round(list.main.temp_max) + "℃";
}
