window.addEventListener("load", function () {
  weatherLoad();
});

function weatherLoad(lat, lon) {
  const WEATHER_API =
    WEATHER_BASE_URL + "weather?lat=33.5141&lon=126.5297&units=metric&appid=" + API_KEY;

  fetch(WEATHER_API)
    .then(response => response.json())
    .then(result => {
      printWeather(result);
    });
}

function printWeather(list) {
  document
    .querySelector(".weather-icon")
    .setAttribute(
      "src",
      "../common_file/images/weather/" + list.weather[0].icon + ".png"
    );
  document.querySelector(".weather-temp").innerText = Math.round(list.main.temp) + "℃";
}
