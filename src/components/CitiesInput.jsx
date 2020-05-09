import React, { useState } from 'react';
import axios from 'axios';
import { uniqueId } from 'lodash';
import debounce from '../utils';
import getAPI from '../routes';

const CitiesInput = () => {
  const [state, setState] = useState([]);

  const setDelay = debounce();

  const getCity = (input) => async () => {
    const api = getAPI(input);
    const response = await axios(api, 'json', 10);
    const inject = (location) => location
      .split(', ')
      .filter((e, i, arr) => i === 0 || i === arr.length - 1);
    const cities = response.data.map((el) => inject(el.display_name));
    setState(cities);
  };

  const handleInput = (e) => {
    const input = e.target.value;
    setDelay(getCity(input), 500);
  };

  const renderCities = () => (
    <ul className="city-list">
      {state.map(([city, country]) => (
        <li
          key={uniqueId(country)}
          className="city-item"
        >
          {`Location: ${city}, ${country}`}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <form action="" method="get">
        <label htmlFor="cities">
          <input type="text" id="cities" onChange={handleInput} autoComplete="off" />
        </label>
        <button type="submit">Show</button>
      </form>
      {state.length > 0 ? renderCities() : null}
    </>
  );
};

export default CitiesInput;
