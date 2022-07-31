

window.addEventListener("load", function () {
  weatherLoad();
});

function weatherLoad(lat, lon) {
  const WEATHER_API =
    WEATHER_BASE_URL + "weather?lat=33.5141&lon=126.5297&units=metric&appid=" + API_KEY;

  fetch(WEATHER_API)
    .then(response => response.json())
    .then(result => {
      console.log(result.rain);
      printWeather(result);
      makeClothesSlide(result.main.temp);
      if(result.rain) {
        createSlide("rain" ,3)
      };
      makeSwiper();
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

function makeClothesSlide(temp) {
  console.log(temp);
  if(temp >= 27) {
    createSlide(1 ,7)
  } else if(temp < 27 && temp >= 23) {
    createSlide(2 ,5)
  } else if(temp < 23 && temp >= 20) {
    createSlide(3 ,5)
  } else if(temp < 20 && temp >= 17) {
    createSlide(4 ,6)
  } else if(temp < 17 && temp >= 12) {
    createSlide(5 ,5)
  } else if(temp < 12 && temp >= 10) {
    createSlide(6 ,4)
  } else if(temp < 10 && temp >= 6) {
    createSlide(7 ,4)
  } else {
    createSlide(8 ,5)
  }
}

function createSlide(index ,count) {
  for(let i=0; i<count; i++) {
    const slide = document.createElement("div");
    const slideImg = document.createElement("img");
    slide.className = "swiper-slide";
    slideImg.src = "../common_file/images/clothes/" + index + "/" + (i+1) + ".png";
    slide.appendChild(slideImg);
    document.querySelector(".swiper-wrapper").appendChild(slide)
  }
}

function makeSwiper() {
  const clothesSwiper = new Swiper(".swiper", {
    slidesPerView:3.5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  })

  return clothesSwiper;
}