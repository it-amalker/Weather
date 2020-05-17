type WeatherTemperature = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type WeatherSys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

type WeatherConditions = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type WeatherWind = {
  speed: number;
  deg: number;
  gust: number;
};

export type WeatherAPIData = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: WeatherTemperature;
  name: string;
  rain: { '1h': number };
  sys: WeatherSys;
  timezone: number;
  visibility: number;
  weather: [WeatherConditions];
  wind: WeatherWind;
};

export type WeatherDescription = {
  description: WeatherConditions;
  indications: WeatherTemperature;
  wind: WeatherWind;
  city: string;
  country: string;
} | null;
