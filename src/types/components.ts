import * as WeatherTypes from './weather';

export type SearchProps = {
  currentCity: string;
  setWeather: (w: WeatherTypes.Description) => void;
  setCurrentCity: (c: string) => void;
};

export type WeatherProps = {
  currentCity?: string;
  weather?: WeatherTypes.Description;
};
