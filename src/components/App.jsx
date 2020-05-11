// @ts-check

import React, { useState } from 'react';
import CitiesSearch from './CitiesSearch';
import WeatherInfo from './WeatherInfo';

const App = () => {
  const [weather, setWeather] = useState(null);
  console.log(weather);

  return (
    <>
      <div className="search-side">
        <CitiesSearch weather={weather} setWeather={setWeather} />
      </div>
      <div className="result-side">
        <WeatherInfo weather={weather} />
      </div>
    </>
  );
};

export default App;
