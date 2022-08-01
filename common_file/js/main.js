const popupWrap = document.querySelector(".popup-wrap");
const hourWeatherList = document.querySelector("#hour-weather-list");
const dailyWeatherList = document.querySelector("#week-weather-list");

window.addEventListener("DOMContentLoaded", function () {
  const onArea = document.querySelector(".map button.on");
  document.querySelector(".weather-info h3").innerText = onArea.innerText;
  weatherLoad(onArea.dataset.lat, onArea.dataset.lon);
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
    dailyWeatherList.innerHTML = "";

    weatherLoad(lat, lon);
  }
});

function weatherLoad(lat, lon) {
  const WEATHER_API =
    WEATHER_BASE_URL +
    "onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude=minutely&units=metric&appid=" +
    API_KEY;

  fetch(WEATHER_API)
    .then(response => response.json())
    .then(result => {
      printWeather(result);
      weatherAlert(result);
      result.hourly.forEach(list => {
        printHourlyWeather(list);
      });
      result.daily.forEach((list, index) => {
        printDailyWeather(list, index);
      });
    });
}

function printWeather(list) {
  document
    .querySelector("#temp-icon")
    .setAttribute(
      "src",
      "../common_file/images/weather/" + list.current.weather[0].icon + ".png"
    );
  document.querySelector("#temp").innerText =
    Math.round(list.current.temp) + "℃";
  const sunriseTime = new Date(list.current.sunrise * 1000).getTime();
  const sunsetTime = new Date(list.current.sunset * 1000).getTime();
  document.querySelector("#min-temp").innerText =
    new Date(sunriseTime).getHours() + ":" + new Date(sunriseTime).getMinutes();
  document.querySelector("#max-temp").innerText =
    new Date(sunsetTime).getHours() + ":" + new Date(sunsetTime).getMinutes();
  document.querySelector("#wind-speed").innerText = list.current.wind_speed;
  document.querySelector("#humidity").innerText = list.current.humidity;
  document.querySelector("#precipitation").innerText = list.current.rain
    ? list.current.rain["1h"]
    : "-";
}

function printHourlyWeather(list) {
  const wrap = document.createElement("ul");
  const hour = document.createElement("li");
  const getTime = new Date(list.dt * 1000).getTime();
  hour.innerText =
    new Date(getTime).getHours() === 0
      ? "24시"
      : new Date(getTime).getHours() + "시";
  const icon = document.createElement("li");
  icon.style.background =
    "url(../common_file/images/weather/" +
    list.weather[0].icon +
    ".png) no-repeat center center / contain";
  const temp = document.createElement("li");
  temp.innerText = Math.round(list.temp) + "℃";
  const hum = document.createElement("li");
  hum.innerText = list.humidity;
  const wind = document.createElement("li");
  wind.innerText = Math.round(list.wind_speed);
  const rainNsnow = document.createElement("li");
  let snow = list.snow ? list.snow["1h"] : "-";
  let rain = list.rain ? list.rain["1h"] : "-";
  rainNsnow.innerText = rain + "/" + snow;

  wrap.append(hour, icon, temp, hum, wind, rainNsnow);
  hourWeatherList.appendChild(wrap);
}

function printDailyWeather(list, index) {
  const dailyInfo = document.createElement("tr");
  const date = document.createElement("td");
  date.className = "week-date";
  const getDate = new Date(list.dt * 1000);
  let dayText = new Intl.DateTimeFormat("ko-KR", { weekday: "short" }).format(
    getDate
  );
  date.innerHTML =
    (index === 0 ? "오늘" : index === 1 ? "내일" : dayText) +
    "<br />" +
    (getDate.getMonth() + 1) +
    "." +
    getDate.getDate();
  const icon = document.createElement("td");
  icon.className = "week-icon";
  const iconImg = document.createElement("img");
  iconImg.src =
    "../common_file/images/weather/" + list.weather[0].icon + ".png";
  const temp = document.createElement("td");
  temp.className = "week-temp";
  temp.innerText =
    Math.round(list.temp.min) + " / " + Math.round(list.temp.max);

  icon.append(iconImg);
  dailyInfo.append(date, icon, temp);
  dailyWeatherList.appendChild(dailyInfo);
}

function weatherAlert(list) {
  let alert = [];
  if (list.current.temp >= 33) {
    alert.push({
      title: "폭염주의보",
      icon: "🔥",
      desc: "폭염은 열사병, 열경련 등의 온열질환을 유발할 수 있으며, 심하면 사망에 이르게 됩니다. 뿐만 아니라, 가축·수산물 폐사 등의 재산피해와 여름철 전력 급증 등으로 생활의 불편을 초래하기도 합니다. 더위가 잦은 여름철에는 다음 사항을 숙지하여 피해를 사전에 예방할 수 있도록 미리 준비합니다."
    });
  }
  if (list.current.rain && list.current.rain["1h"] >= 80) {
    alert.push({
      title: "호우주의보",
      icon: "☔️",
      desc: "호우는 하천 범람, 산사태, 침수 등을 통해 인명피해와 재산피해를 발생시킬 수 있기 때문에 가족이나 이웃과 함께 대비합니다."
    });
  }
  if (
    (list.current.rain && list.current.rain["1h"] >= 100) ||
    list.current.wind_speed >= 17
  ) {
    alert.push({
      title: "태풍주의보",
      icon: "💨",
      desc: "TV, 라디오, 스마트폰 등에서 태풍이 예보된 때에는 거주 지역에 영향을 주는 시기를 미리 파악하여 이웃과 공유하고, 어떻게 대피할지 생각하고 가족이나 주변에 있는 사람들과 함께 조치를 취하도록 합니다."
    });
  }

  let descList = "<li style='text-align:center'>즐거운 하루 보내세요!</li>";
  if (alert.length !== 0) {
    alert.forEach(list => {
      descList +=
        "<li><span>" + list.title + "</span> - " + list.desc + "</li>";
    });
  }
  document.querySelector(".popup-title > span").innerHTML =
    alert.length !== 0 ? alert.map(list => list.title).join(", ") : "맑음";
  document.querySelector(".popup-icon").innerHTML =
    alert.length !== 0 ? alert.map(list => list.icon).join(" ") : "🌞";
  document.querySelector(".popup-desc ul").innerHTML = descList;
}
