import React, { useState } from 'react';
// Components
import Search from './Search';
import WeatherInfo from './WeatherInfo';
import Layout from './layout/Layout';
// Types
import * as WeatherTypes from '../types/weather';

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherTypes.Description>(null);
  const [currentCity, setCurrentCity] = useState<string>('');

  return (
    <Layout>
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
    </Layout>
  );
};

export default App;
