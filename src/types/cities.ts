export type APIData = {
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
}[];

export type Location = {
  city: string;
  country: string;
};

export type Coordinates = {
  lat: string;
  lon: string;
};

export type Description = {
  location: Location;
  coordinates: Coordinates;
};

export type Params = {
  city: string;
  coordinates: Coordinates | null;
};
