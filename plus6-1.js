function showTemp (response){
  let temperatureElement = document.querySelector(".now-tem-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event){
  event.preventDefault();
  let searchInput = document.querySelector(".search-box");
  let city = searchInput.value;
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  

axios.get(apiUrl).then(showTemp)
}


let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", search);
let currentDate = document.querySelector(".current-date");
let currentTime = new Date();
let day = currentTime.getDay();
let allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let days = allDays[day];
let hrs = currentTime.getHours();
if (hrs<10){
  hrs = `0${hrs}`;
}
let mins = currentTime.getMinutes();
if (mins<10){
  mins = `0${mins}`;
}
currentDate.innerHTML = `${days} ${hrs}:${mins}`
