// @ts-check

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const getCities = (city, limit = 7, language = 'en') => {
  const host = 'https://nominatim.openstreetmap.org/';
  const params = `city=${city}&format=json&limit=${limit}&accept-language=${language}`;

  return [host, params].join('?');
};

const getWeather = ({ city, coordinates }) => {
  const query = city ? `q=${city}` : `lat=${coordinates.lat}&lon=${coordinates.lon}`;
  const host = 'https://api.openweathermap.org/data/2.5/weather';
  const params = `${query}&units=metric&appid=${WEATHER_API_KEY}`;

  return [host, params].join('?');
};

export { getCities, getWeather };
