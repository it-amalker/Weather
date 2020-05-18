import * as WeatherTypes from './weather';

export type SearchProps = {
  currentCity: string;
  setWeather: (w: WeatherTypes.Description) => void;
  setCurrentCity: (c: string) => void;
};

export type WeatherInfoProps = {
  currentCity: string;
  weather: WeatherTypes.Description;
};
