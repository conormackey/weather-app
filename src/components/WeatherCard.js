
import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <p>{data.condition}</p>
      <p>Temperature: {data.temperature}°C</p>
      <p>Wind Speed: {data.windSpeed} km/h</p>
      <p>Humidity: {data.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
