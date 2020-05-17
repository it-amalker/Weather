import React, { useState } from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';
import { WeatherDescription } from '../types/weather';

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherDescription>(null);
  const [currentCity, setCurrentCity] = useState<string>('');

  return (
    <>
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
