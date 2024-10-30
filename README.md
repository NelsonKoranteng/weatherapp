# weatherapp
1. Assume that in your API call you received a 401 status code. Which part of your code most probably is not correct?

A 401 Unauthorized status code typically indicates an issue with authentication, meaning the API did not recognize or accept your credentials. In your code, the most likely causes of this error like API Key (apiKey variable)


2. Explain your design choices and how you used CSS to realize those changes.
Weather App
A simple weather application built with Node.js and Express, using RapidAPI to fetch real-time weather data. Users can enter a city name to view the current weather, along with a descriptive icon.

Features
Real-Time Weather Data: Fetches weather data from RapidAPI’s OpenWeather API.
Dynamic Weather Icon: Displays an icon corresponding to the current weather conditions.
Responsive Design: Styled with CSS to look good on all devices, with a background image for added visual appeal.

Installation
Clone the repository:

git clone https://github.com/your-username/weather-app.git
cd weather-app

Install dependencies:
npm install

Set up API keys:
Sign up on RapidAPI and subscribe to the OpenWeather API.
Replace YOUR_RAPIDAPI_KEY in weatherapp.js with your API key.

Usage
Start the server:
node weatherapp.js

Open in Browser: Navigate to http://localhost:3000 in your browser.

Enter a City: Type in a city name and submit to view the weather and icon.

File Structure
weatherapp.js – Server and route configuration.
views/index.ejs – HTML template for rendering the weather app.
public/style.css – Custom styling for layout and visual enhancements.
