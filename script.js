// script.js

// Get references to DOM elements
const cityInput = document.getElementById("cityInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherDetails = document.getElementById("weatherDetails");

// OpenWeatherMap API key and endpoint
const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// Current temperature unit
let currentUnit = "metric"; // 'metric' is for Celsius, 'imperial' is for Fahrenheit
let cityHistory = []; // To store cities searched by the user

// Function to fetch weather data
async function getWeather(city) {
  try {
    const response = await fetch(
      `${apiUrl}?q=${encodeURIComponent(
        city
      )}&appid=${apiKey}&units=${currentUnit}`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
    cityHistory.push(city); // Add the city to the history
    updateCityHistory(); // Update the city history list
  } catch (error) {
    weatherDetails.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

// Function to update the city history UI
function updateCityHistory() {
  const historyDiv = document.getElementById("cityHistory");
  historyDiv.innerHTML = `<h3>Search History:</h3><ul>`;
  cityHistory.forEach((city) => {
    historyDiv.innerHTML += `<li>${city}</li>`;
  });
  historyDiv.innerHTML += `</ul>`;
}

// Function to display weather data
function displayWeather(data) {
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon; // Weather icon
  const cityName = data.name;
  const countryName = data.sys.country;

  // Convert temperature based on the current unit
  const tempDisplay =
    currentUnit === "metric" ? `${temperature}°C` : `${temperature}°F`;

  // Change background based on weather condition
  let backgroundUrl = "";

  if (description.includes("clear")) {
    backgroundUrl = 'url("images/sunny.jpg")';
  } else if (description.includes("rain")) {
    backgroundUrl = 'url("images/rainy.jpg")';
  } else if (description.includes("cloud")) {
    backgroundUrl = 'url("images/cloudy.jpg")';
  } else {
    backgroundUrl = 'url("images/default.jpg")';
  }

  document.body.style.backgroundImage = backgroundUrl;

  weatherDetails.innerHTML = `
        <h2>${cityName}, ${countryName}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
        <p>Temperature: ${tempDisplay}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Description: ${description}</p>
    `;
}

// Event listener for button click
getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

// Toggle temperature unit
toggleTempButton.addEventListener("click", () => {
  if (currentUnit === "metric") {
    currentUnit = "imperial"; // Switch to Fahrenheit
    toggleTempButton.innerText = "Switch to Celsius";
  } else {
    currentUnit = "metric"; // Switch to Celsius
    toggleTempButton.innerText = "Switch to Fahrenheit";
  }

  const city = cityInput.value.trim();
  if (city) {
    getWeather(city); // Re-fetch the weather with the new unit
  }
});
