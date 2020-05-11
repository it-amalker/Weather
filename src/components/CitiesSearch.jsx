import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { uniqueId } from 'lodash';
import { useForm } from 'react-hook-form';
import debounce from '../utils';
import { getCities, getWeather } from '../routesAPI';

const setDelay = debounce();

const CitiesSearch = ({ weather, setWeather }) => {
  const [cities, setCities] = useState([]);
  const {
    register,
    handleSubmit,
    errors,
    reset,
    setError,
  } = useForm();

  const onSubmit = async ({ city, coordinates = null }) => {
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
      setWeather(cityWeather);
      setCities([]);
      reset();
    } catch (e) {
      setError('city', 'notMatch', 'City was not found');
      setCities([]);
      throw new Error(`Failed to find weather data, probably network problems: ${e}`);
    }
  };

  const getCity = (input) => async () => {
    const api = getCities(input);
    const response = await axios(api);
    console.log(response.data);
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

  const handleInputChanges = (e) => {
    const input = e.target.value;
    setDelay(getCity(input), 500);
  };

  const inputElRef = useRef(null);

  useEffect(() => inputElRef.current.focus(), []);

  const handleClick = (city, coordinates) => () => {
    inputElRef.current.value = city;
    onSubmit({ coordinates });
  };

  const renderCities = () => (
    <ul className="city-list">
      {cities.map(({ location: [city, country], coordinates }) => (
        <li
          key={uniqueId(country)}
          className="city-item"
        >
          <button
            type="button"
            className="city-link"
            onClick={handleClick(city, coordinates)}
          >
            {`Location: ${country}, ${city}`}
          </button>
        </li>
      ))}
    </ul>
  );

  const renderWeather = () => (
    <div className="weather-card">
      {`City: ${weather.city}, temperature: ${weather.indications.temp}`}
    </div>
  );

  return (
    <>
      <span className="city-name">
        {weather ? weather.city : 'Choose the city'}
      </span>
      <div className="form-container">
        <form className="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="city">
            <input
              type="city"
              name="city"
              id="city"
              className="city-input"
              ref={(e) => {
                register(e);
                inputElRef.current = e;
              }}
              onChange={handleInputChanges}
              required
            />
          </label>
          <button type="submit" className="city-submit-btn">Show</button>
        </form>
        {errors.city && errors.city.type === 'notMatch' && <span>{errors.city.message}</span>}
        <div className="city-finder-container">
          {cities.length > 0 ? renderCities() : null}
        </div>
      </div>
    </>
  );
};

export default CitiesSearch;
