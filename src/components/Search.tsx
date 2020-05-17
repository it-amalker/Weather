import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { uniqueId } from 'lodash';
import { useForm } from 'react-hook-form';
import debounce from '../utils';
import { getCities, getWeatherByName, getWeatherByCoordinates } from '../routesAPI';
import { WeatherAPIData, WeatherDescription } from '../types/weather';
import { CitiesAPIData, CitiesDescription, CitiesParams, CitiesCoordinates } from '../types/cities';
import { SearchComponentProps } from '../types/components';

const setDelay = debounce();

const Search: React.FC<SearchComponentProps> = ({ currentCity, setWeather, setCurrentCity }) => {
  const [cities, setCities] = useState<CitiesDescription[]>([]);
  const {
    register,
    handleSubmit,
    errors,
    reset,
    setError,
    formState,
  } = useForm<CitiesParams>();

  const { isSubmitting } = formState;

  const getCity = (input: string) => async () => {
    const api = getCities(input);
    const data: CitiesAPIData[] = await axios(api).then(res => res.data);
    const getCityAndCountry = (location: string) => {
      const [city, ...rest] = location.split(', ');
      const country = rest[rest.length - 1];
      return { city, country };
    };
    const selectedCities: CitiesDescription[] = data.map(({ display_name: cityName, lat, lon }) => (
      {
        location: getCityAndCountry(cityName),
        coordinates: { lat, lon },
      }));
    setCities(selectedCities);
  };

  const collectWeatherData = (data: WeatherAPIData): WeatherDescription => (
    {
      description: data.weather[0],
      indications: data.main,
      wind: data.wind,
      city: data.name,
      country: data.sys.country,
    }
  );

  const onSubmit = async ({ city, coordinates = null }: CitiesParams) => {
    setDelay(getCity(''), 0);
    try {
      const api = coordinates ? getWeatherByCoordinates(coordinates) : getWeatherByName(city);
      const data: WeatherAPIData = await axios(api).then(res => res.data);
      const cityWeather = collectWeatherData(data);
      setCurrentCity(city);
      setWeather(cityWeather);
      reset();
    } catch (e) {
      setError('city', 'notFound', 'City was not found');
      throw new Error(`Failed to find weather data, probably network problems: ${e}`);
    }
  };

  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setDelay(getCity(input), 500);
  };

  const inputElRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputElRef.current!.focus();
  }, []);

  const handleClick = (city: string, coordinates: CitiesCoordinates) => () => {
    inputElRef.current!.value = city;
    onSubmit({ city, coordinates });
  };

  const renderCities = () => (
    <ul className="city-found-list">
      {cities.map(({ location: { city, country }, coordinates }) => (
        <li
          key={uniqueId(city)}
          className="city-found-item"
        >
          <button
            type="button"
            className="city-found-link"
            onClick={handleClick(city, coordinates)}
          >
            {`${country}, ${city}`}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="current-city-container">
        {currentCity ? <p className="city-name">{currentCity}</p> : <p>Choose the city</p>}
      </div>
      <div className="form-container">
        <form
          className="form"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="city">
            <input
              type="text"
              name="city"
              id="city"
              className="search-input"
              placeholder="Berlin"
              ref={(e) => {
                register(e!);
                inputElRef.current = e;

              }}
              onChange={handleInputChanges}
              required
            />
          </label>
          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            Show
          </button>
        </form>
        {errors.city && errors.city.type === 'notFound' && <span className="error-container">{errors.city.message}</span>}
        <div className="city-found-container">
          {cities.length > 0 ? renderCities() : null}
        </div>
      </div>
    </>
  );
};

export default Search;
