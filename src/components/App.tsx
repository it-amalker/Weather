import React, { useState } from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';
import * as WeatherTypes from '../types/weather';

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherTypes.Description>(null);
  const [currentCity, setCurrentCity] = useState<string>('');

  return (
    <>
      <h1 className="visually-hidden">Weather App</h1>
      <div className="search-side">
        <Search
          currentCity={currentCity}
          setCurrentCity={setCurrentCity}
          setWeather={setWeather}
        />
      </div>
      <div className="result-side">
        <WeatherInfo weather={weather} currentCity={currentCity} />
      </div>
    </>
  );
};

export default App;
