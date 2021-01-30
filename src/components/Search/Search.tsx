import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { uniqueId } from 'lodash';

import debounce from '../../utils/debounce';
import {
  getCities,
  getWeatherByCoordinates,
  getWeatherByName,
} from '../../api';
import {
  WeatherDescriptionType,
  CityDescriptionType,
  LocationType,
  CityDataType,
  WeatherDataType,
  ParamsType,
  CoordinatesType,
} from '../../types';
import {
  Cities,
  City,
  CityButton,
  SearchContainer,
  CurrentCity,
  CurrentCityContainer,
  ChooseCity,
  FormContainer,
  Input,
  Button,
  ErrorContainer,
  CitiesContainer,
} from './Search.styles';

const setDelay = debounce();

export type SearchProps = {
  currentCity: string;
  setWeather: (weather: WeatherDescriptionType) => void;
  setCurrentCity: (c: string) => void;
};

const Search: React.FC<SearchProps> = ({
  currentCity,
  setWeather,
  setCurrentCity,
}) => {
  const [cities, setCities] = useState<CityDescriptionType[]>([]);
  const {
    register,
    handleSubmit,
    errors,
    reset,
    setError,
    formState,
  } = useForm<ParamsType>();

  const { isSubmitting } = formState;

  const getCity = (input: string) => async (): Promise<void> => {
    const api = getCities(input);
    const response = await axios.get<CityDataType[]>(api);
    const getCityAndCountry = (location: string): LocationType => {
      const [city, ...rest] = location.split(', ');
      const country = rest[rest.length - 1];
      return { city, country };
    };
    const selectedCities: CityDescriptionType[] = response.data.map(
      ({ display_name: cityName, lat, lon }) => ({
        location: getCityAndCountry(cityName),
        coordinates: { lat, lon },
      }),
    );
    setCities(selectedCities);
  };

  const collectWeatherData = (
    data: WeatherDataType,
  ): WeatherDescriptionType => ({
    description: data.weather[0],
    indications: data.main,
    wind: data.wind,
    city: data.name,
    country: data.sys.country,
  });

  const onSubmit = async ({
    city,
    coordinates = null,
  }: ParamsType): Promise<void> => {
    setDelay(getCity(''), 0);
    try {
      const api = coordinates
        ? getWeatherByCoordinates(coordinates)
        : getWeatherByName(city);
      const response = await axios.get<WeatherDataType>(api);
      const cityWeather = collectWeatherData(response.data);
      setCurrentCity(city);
      setWeather(cityWeather);
      reset();
    } catch (e) {
      setError('city', { type: 'notFound', message: 'City was not found' });
      throw new Error(
        `Failed to find weather data, probably network problems: ${e}`,
      );
    }
  };

  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value;
    setDelay(getCity(input), 500);
  };

  const inputElRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputElRef.current!.focus();
  }, []);

  const handleClick = (
    city: string,
    coordinates: CoordinatesType,
  ) => (): void => {
    inputElRef.current!.value = city;
    onSubmit({ city, coordinates });
  };

  const renderCities = () => (
    <Cities>
      {cities.map(({ location: { city, country }, coordinates }) => (
        <City key={uniqueId(city)}>
          <CityButton type="button" onClick={handleClick(city, coordinates)}>
            {`${country}, ${city}`}
          </CityButton>
        </City>
      ))}
    </Cities>
  );

  return (
    <SearchContainer>
      <CurrentCityContainer>
        {currentCity ? (
          <CurrentCity>{currentCity}</CurrentCity>
        ) : (
          <ChooseCity>Choose the city</ChooseCity>
        )}
      </CurrentCityContainer>
      <FormContainer>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="city"
            id="city"
            placeholder="Berlin"
            ref={(e): void => {
              register(e!);
              inputElRef.current = e;
            }}
            onChange={handleInputChanges}
            required
          />
          <Button type="submit" disabled={isSubmitting}>
            Search
          </Button>
        </form>
        {errors.city && errors.city.type === 'notFound' && (
          <ErrorContainer>{errors.city.message}</ErrorContainer>
        )}
        <CitiesContainer>
          {cities.length > 0 ? renderCities() : null}
        </CitiesContainer>
      </FormContainer>
    </SearchContainer>
  );
};

export default Search;
