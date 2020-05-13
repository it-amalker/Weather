// @ts-check

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const openStreetApiPath = 'https://nominatim.openstreetmap.org/';
const weatherApiPath = 'https://api.openweathermap.org/data/2.5/weather';

const getCities = (city, limit = 7, language = 'en') => {
  const params = `city=${city}&format=json&limit=${limit}&accept-language=${language}`;
  return [openStreetApiPath, params].join('?');
};

const getWeatherByName = (city) => {
  const params = `q=${city}&units=metric&appid=${WEATHER_API_KEY}`;
  return [weatherApiPath, params].join('?');
};

const getWeatherByCoordinates = ({ lat, lon }) => {
  const params = `lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;
  return [weatherApiPath, params].join('?');
};

export { getCities, getWeatherByName, getWeatherByCoordinates };
