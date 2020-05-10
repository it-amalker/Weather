import React, { useState } from 'react';
import axios from 'axios';
import { uniqueId } from 'lodash';
import { useForm } from 'react-hook-form';
import debounce from '../utils';
import { getCitiesAPI, getWeatherAPI } from '../routesAPI';

const setDelay = debounce();

const CitiesInput = () => {
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);
  const {
    register,
    handleSubmit,
    errors,
    reset,
    setError,
  } = useForm();

  const onSubmit = async ({ city }) => {
    try {
      const api = getWeatherAPI(city);
      const response = await axios(api);
      const cityWeather = {
        description: response.data.weather[0],
        indications: response.data.main,
        wind: response.data.wind,
        city: response.data.name,
        country: response.data.sys.country,
      };
      setWeather(cityWeather);
      console.log(cityWeather);
      setCities([]);
      reset();
    } catch (e) {
      setError('city', 'notMatch', 'City was not found');
      setCities([]);
      throw new Error(`Failed to find weather data, probably network problems: ${e}`);
    }
  };

  const getCity = (input) => async () => {
    const api = getCitiesAPI(input);
    const response = await axios(api);
    const getCityAndCountry = (location) => location
      .split(', ')
      .filter((e, i, arr) => i === 0 || i === arr.length - 1);
    const selectedCities = response.data.map((el) => getCityAndCountry(el.display_name));
    setCities(selectedCities);
  };

  const handleInputChanges = (e) => {
    const input = e.target.value;
    setDelay(getCity(input), 500);
  };

  const renderCities = () => (
    <ul className="city-list">
      {cities.map(([city, country]) => (
        <li
          key={uniqueId(country)}
          className="city-item"
        >
          {`${country}, ${city}`}
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
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="city">
          <input
            type="city"
            name="city"
            id="city"
            ref={register}
            onChange={handleInputChanges}
            required
          />
        </label>
        <button type="submit">Show</button>
      </form>
      {errors.city && errors.city.type === 'notMatch' && <span>{errors.city.message}</span>}
      {cities.length > 0 ? renderCities() : null}
      {weather ? renderWeather() : null}
    </>
  );
};

export default CitiesInput;
