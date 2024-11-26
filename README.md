# Weather App

A simple weather application that allows users to search for weather information by city name. The app fetches data from the OpenWeatherMap API and displays the current temperature, humidity, and weather description. Users can also toggle between Celsius and Fahrenheit.

You can see and test the preview here : https://kevin-ace.github.io/simple_weather_app/

## Features

- Search for weather information by city name.
- Display current temperature, humidity, and weather description.
- Toggle between Celsius and Fahrenheit.
- Maintain a history of searched cities.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, etc.)
- Internet connection

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kevin-ace/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Open `index.html` in your web browser.

### Usage

1. Enter a city name in the input field.
2. Click the "Get Weather" button to fetch the weather data.
3. The weather information will be displayed below the input field.
4. Use the "Switch to Fahrenheit" button to toggle the temperature unit.

### API Key

To use the OpenWeatherMap API, you need to sign up for an API key. Replace the placeholder API key in `script.js` with your own:

```javascript
const apiKey = 'YOUR_API_KEY';
```

### Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
