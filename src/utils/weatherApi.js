import axios from 'axios';

const API_KEY = "f7da1c0a584fd66d3c900cc6ffa34328";

export const getWeatherByCoords = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  const response = await axios.get(url);
  console.log("Weather API response:", response.data);
  return response.data;
};
