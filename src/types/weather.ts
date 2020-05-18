type WeatherTemperature = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

type Conditions = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type APIData = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: WeatherTemperature;
  name: string;
  rain: { '1h': number };
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: [Conditions];
  wind: Wind;
};

export type Description = {
  description: Conditions;
  indications: WeatherTemperature;
  wind: Wind;
  city: string;
  country: string;
} | null;
