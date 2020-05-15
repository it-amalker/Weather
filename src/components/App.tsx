import React, { useState } from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);

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
        <WeatherInfo
          weather={weather}
          currentCity={currentCity}
        />
      </div>
    </>
  );
};

export default App;
