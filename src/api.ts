import { CoordinatesType } from './types';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const openStreetApiPath = 'https://nominatim.openstreetmap.org/';
const weatherApiPath = 'https://api.openweathermap.org/data/2.5/weather';

export const getCities = (
  city: string,
  limit: number | string = 5,
  language = 'en',
): string => {
  const params = `city=${city}&format=json&limit=${limit}&accept-language=${language}`;
  return [openStreetApiPath, params].join('?');
};

export const getWeatherByName = (city: string): string => {
  const params = `q=${city}&units=metric&appid=${WEATHER_API_KEY}`;
  return [weatherApiPath, params].join('?');
};

export const getWeatherByCoordinates = ({
  lat,
  lon,
}: CoordinatesType): string => {
  const params = `lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;
  return [weatherApiPath, params].join('?');
};
