
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    const API_KEY = "403c3ecccf470f1d9a2609b11cb21246"; // Replace with your actual OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        setWeatherData({
          city: data.name,
          temperature: data.main.temp,
          condition: data.weather[0].main,
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
          clouds: data.clouds.all,
          pressure: data.main.pressure
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred while fetching data.");
    }
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
