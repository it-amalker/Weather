import { WeatherDescription } from './weather';

export type SearchComponentProps = {
  currentCity: string;
  setWeather: (w: WeatherDescription) => void;
  setCurrentCity: (c: string) => void;
};

export type WeatherInfoProps = {
  currentCity: string;
  weather: WeatherDescription;
};
