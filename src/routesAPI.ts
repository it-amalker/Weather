import { CitiesCoordinates } from './types/cities';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const openStreetApiPath = 'https://nominatim.openstreetmap.org/';
const weatherApiPath = 'https://api.openweathermap.org/data/2.5/weather';

const getCities = (
  city: string,
  limit: number | string = 7,
  language = 'en',
): string => {
  const params = `city=${city}&format=json&limit=${limit}&accept-language=${language}`;
  return [openStreetApiPath, params].join('?');
};

const getWeatherByName = (city: string): string => {
  const params = `q=${city}&units=metric&appid=${WEATHER_API_KEY}`;
  return [weatherApiPath, params].join('?');
};

const getWeatherByCoordinates = ({ lat, lon }: CitiesCoordinates): string => {
  const params = `lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;
  return [weatherApiPath, params].join('?');
};

export { getCities, getWeatherByName, getWeatherByCoordinates };
