// @ts-check

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { uniqueId } from 'lodash';
import { useForm } from 'react-hook-form';
import debounce from '../utils';
import { getCities, getWeatherByName, getWeatherByCoordinates } from '../routesAPI';

const setDelay = debounce();

const Search = ({ currentCity, setWeather, setCurrentCity }) => {
  const [cities, setCities] = useState([]);
  const {
    register,
    handleSubmit,
    errors,
    reset,
    setError,
    formState,
  } = useForm();

  const { isSubmitting } = formState;

  const getCity = (input) => async () => {
    const api = getCities(input);
    const response = await axios(api);
    const getCityAndCountry = (location) => {
      const [city, ...rest] = location.split(', ');
      const country = rest[rest.length - 1];
      return { city, country };
    };
    const selectedCities = response.data.map(({ display_name: cityName, lat, lon }) => (
      {
        location: getCityAndCountry(cityName),
        coordinates: { lat, lon },
      }));
    setCities(selectedCities);
  };

  const collectWeatherData = (data) => (
    {
      description: data.weather[0],
      indications: data.main,
      wind: data.wind,
      city: data.name,
      country: data.sys.country,
    }
  );

  const onSubmit = async ({ city, coordinates = null }) => {
    setDelay(getCity([]), 0);
    try {
      const api = coordinates ? getWeatherByCoordinates(coordinates) : getWeatherByName(city);
      const response = await axios(api);
      const cityWeather = collectWeatherData(response.data);
      setCurrentCity(city);
      setWeather(cityWeather);
      reset();
    } catch (e) {
      setError('city', 'notFound', 'City was not found');
      throw new Error(`Failed to find weather data, probably network problems: ${e}`);
    }
  };

  const handleInputChanges = (e) => {
    const input = e.target.value;
    setDelay(getCity(input), 500);
  };

  const inputElRef = useRef(null);

  useEffect(() => inputElRef.current.focus(), []);

  const handleClick = (city, coordinates) => () => {
    inputElRef.current.value = city;
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
                register(e);
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
