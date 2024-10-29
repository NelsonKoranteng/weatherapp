const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { weather: null, iconUrl: null, error: null });
});

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = "2f3e632393msh60547a43df2f174p1a11a1jsn7ed5c9b99e62";
  const apiUrl = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
    });
    
    const weatherData = response.data;
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    res.render("index", { weather: `It's ${description} in ${city}`, iconUrl, error: null });
  } catch (error) {
    console.error("Error retrieving weather data:", error.response?.data || error.message);
    res.render("index", { weather: null, iconUrl: null, error: "Could not retrieve weather data. Please check the city name or try again later." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
