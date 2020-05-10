// @ts-check

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const getCitiesAPI = (city, limit = 7, format = 'json', language = 'en-US') => {
  const host = 'https://nominatim.openstreetmap.org/';
  const params = `city=${city}&format=${format}&limit=${limit}&accept-language=${language}`;

  return [host, params].join('?');
};

const getWeatherAPI = (city, units = 'metric') => {
  const host = 'https://api.openweathermap.org/data/2.5/weather';
  const params = `q=${city}&units=${units}&appid=${WEATHER_API_KEY}`;

  return [host, params].join('?');
};

export { getCitiesAPI, getWeatherAPI };
