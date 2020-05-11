// @ts-check

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const getCities = (city, limit = 7, format = 'json', language = 'en-US') => {
  const host = 'https://nominatim.openstreetmap.org/';
  const params = `city=${city}&format=${format}&limit=${limit}&accept-language=${language}`;

  return [host, params].join('?');
};

const getWeather = ({ city, coordinates: { lat, lon }, units = 'metric' }) => {
  const query = city ? `q=${city}` : `lat=${lat}&lon=${lon}`;
  const host = 'https://api.openweathermap.org/data/2.5/weather';
  const params = `${query}&units=${units}&appid=${WEATHER_API_KEY}`;

  return [host, params].join('?');
};

export { getCities, getWeather };
