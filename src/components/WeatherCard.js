import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <p>{data.condition}</p>
      <p>Temperature: {data.temperature}°F</p> {/* Changed to Fahrenheit */}
      <p>Wind Speed: {data.windSpeed} mph</p> {/* Changed unit to mph */}
      <p>Humidity: {data.humidity}%</p>
      <p>Cloud Coverage: {data.clouds}%</p> {/* New field */}
      <p>Pressure: {data.pressure} hPa</p> {/* New field */}
    </div>
  );
};

export default WeatherCard;