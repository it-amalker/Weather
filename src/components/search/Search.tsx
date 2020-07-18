import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { uniqueId } from 'lodash';
import { useForm } from 'react-hook-form';
import debounce from '../../utils/debounce';
import * as API from '../../routes/api';
// types
import * as WeatherTypes from '../../types/weather';
import * as CityTypes from '../../types/cities';
import * as ComponentTypes from '../../types/components';
// components
import {
  CurrentCityContainer,
  CurrentCity,
  FormContainer,
  Input,
  Button,
  ErrorContainer,
  CitiesContainer,
  Cities,
  City,
  CityButton,
} from './Search.styles';

const setDelay = debounce();

const Search: React.FC<ComponentTypes.SearchProps> = ({
  currentCity,
  setWeather,
  setCurrentCity,
}) => {
  const [cities, setCities] = useState<CityTypes.Description[]>([]);
  const {
    register,
    handleSubmit,
    errors,
    reset,
    setError,
    formState,
  } = useForm<CityTypes.Params>();

  const { isSubmitting } = formState;

  const getCity = (input: string) => async (): Promise<void> => {
    const api = API.getCities(input);
    const response = await axios.get<CityTypes.APIData>(api);
    const getCityAndCountry = (location: string): CityTypes.Location => {
      const [city, ...rest] = location.split(', ');
      const country = rest[rest.length - 1];
      return { city, country };
    };
    const selectedCities: CityTypes.Description[] = response.data.map(
      ({ display_name: cityName, lat, lon }) => ({
        location: getCityAndCountry(cityName),
        coordinates: { lat, lon },
      }),
    );
    setCities(selectedCities);
  };

  const collectWeatherData = (
    data: WeatherTypes.APIData,
  ): WeatherTypes.Description => ({
    description: data.weather[0],
    indications: data.main,
    wind: data.wind,
    city: data.name,
    country: data.sys.country,
  });

  const onSubmit = async ({
    city,
    coordinates = null,
  }: CityTypes.Params): Promise<void> => {
    setDelay(getCity(''), 0);
    try {
      const api = coordinates
        ? API.getWeatherByCoordinates(coordinates)
        : API.getWeatherByName(city);
      const response = await axios.get<WeatherTypes.APIData>(api);
      const cityWeather = collectWeatherData(response.data);
      setCurrentCity(city);
      setWeather(cityWeather);
      reset();
    } catch (e) {
      setError('city', 'notFound', 'City was not found');
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
    coordinates: CityTypes.Coordinates,
  ) => (): void => {
    inputElRef.current!.value = city;
    onSubmit({ city, coordinates });
  };

  const renderCities = (): JSX.Element => (
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
    <>
      <CurrentCityContainer>
        {currentCity ? (
          <CurrentCity>{currentCity}</CurrentCity>
        ) : (
          <p>Choose the city</p>
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
    </>
  );
};

export default Search;
