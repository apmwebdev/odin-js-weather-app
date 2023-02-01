const API_KEY = '181d1f90b8965d1008d84acbdab2a3ff';

const fetchWeather = async function fetchWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      {mode: 'cors'});
    const responseJSON = await response.json();
    displayResponse(responseJSON);
  } catch(err) {
    console.log('Error: ', err);
  }
}

const search = function search(e) {
  e.preventDefault();
  const searchString = document.querySelector('#search').value;
  fetchWeather(searchString);
}

const displayResponse = function displayResponse(response) {
  console.log(response);
}

window.addEventListener('load', (e) => {
  document.querySelector('#submit').addEventListener('click', search);
});