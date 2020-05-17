export type CitiesAPIData = {
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

export type CitiesCoordinates = {
  lat: string;
  lon: string;
};

export type CitiesDescription = {
  location: { city: string, country: string };
  coordinates: CitiesCoordinates;
};

export type CitiesParams = {
  city: string,
  coordinates: CitiesCoordinates | null;
};