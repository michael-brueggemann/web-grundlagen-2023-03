function getWeather() {
  const city = document.getElementById("city").value;

  const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
  const params = `?q=${city}&appid=f3a44fe9aaf8d153e7e1a56870852478&units=metric`;

  fetch(baseUrl + params)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("outTemp").innerHTML = data.main.temp;
      document.getElementById("outName").innerHTML = data.name;
    });
}

document.getElementById("search").addEventListener("click", getWeather);
