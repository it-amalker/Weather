// WEATHER

export type TemperatureType = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

export type SysType = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type ConditionsType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WindType = {
  speed: number;
  deg: number;
  gust: number;
};

export type WeatherDataType = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: TemperatureType;
  name: string;
  rain: { '1h': number };
  sys: SysType;
  timezone: number;
  visibility: number;
  weather: [ConditionsType];
  wind: WindType;
};

export type WeatherDescriptionType = {
  description: ConditionsType;
  indications: TemperatureType;
  wind: WindType;
  city: string;
  country: string;
};

// CITIES

export type CityDataType = {
  boundingbox: string[];
  class: string;
  display_name: string;
  icon: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  type: string;
};

export type LocationType = {
  city: string;
  country: string;
};

export type CoordinatesType = {
  lat: string;
  lon: string;
};

export type CityDescriptionType = {
  location: LocationType;
  coordinates: CoordinatesType;
};

export type ParamsType = {
  city: string;
  coordinates: CoordinatesType | null;
};
