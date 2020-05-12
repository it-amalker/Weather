import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { uniqueId } from 'lodash';
import { useForm } from 'react-hook-form';
import debounce from '../utils';
import { getCities, getWeather } from '../routesAPI';

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
    const getCityAndCountry = (location) => location
      .split(', ')
      .filter((e, i, arr) => i === 0 || i === arr.length - 1);
    const selectedCities = response.data.map((el) => (
      {
        location: getCityAndCountry(el.display_name),
        coordinates: { lat: el.lat, lon: el.lon },
      }));
    setCities(selectedCities);
  };

  const onSubmit = async ({ city, coordinates = null }) => {
    setDelay(getCity([]), 0);
    try {
      const api = coordinates ? getWeather({ coordinates }) : getWeather({ city });
      const response = await axios(api);
      const cityWeather = {
        description: response.data.weather[0],
        indications: response.data.main,
        wind: response.data.wind,
        city: response.data.name,
        country: response.data.sys.country,
      };
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
      {cities.map(({ location: [city, country], coordinates }) => (
        <li
          key={uniqueId(country)}
          className="city-found-item"
        >
          <button
            type="button"
            className="city-found-link"
            onClick={handleClick(city, coordinates)}
          >
            {`Location: ${country}, ${city}`}
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
        <form className="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit" className="submit-btn" disabled={isSubmitting}>Show</button>
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
