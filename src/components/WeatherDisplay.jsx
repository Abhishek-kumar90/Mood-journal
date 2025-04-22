import React, { useEffect, useState } from 'react';
import { getWeatherByCoords } from '../utils/weatherApi';

export default function WeatherDisplay({ location, weather, setWeather }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location) {
      // Show loading until weather data is fetched
      setLoading(true);
      getWeatherByCoords(location.lat, location.lon)
        .then(data => {
          setWeather(data); // Set the weather data
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch(err => {
          console.error("Error fetching weather:", err);
          setLoading(false);
        });
    }
  }, [location, setWeather]); // Re-fetch if location changes

  // Show loading state when fetching weather data
  if (loading) {
    return <p>Loading weather... ⛅</p>;
  }

  // Display weather once it's available
  if (!weather) {
    return <p>Weather data not available</p>;
  }

  return (
    <div>
      <h4>⛅ {weather.weather?.[0]?.description}</h4>
      <p>{Math.round(weather.main?.temp)}°C</p>
    </div>
  );
}
