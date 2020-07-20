import React, { useState } from 'react';
// Components
import Search from '../search';
import Weather from '../weather';
import Layout from '../layout';
// Types
import * as WeatherTypes from '../../types/weather';

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherTypes.Description>(null);
  const [currentCity, setCurrentCity] = useState<string>('');

  return (
    <Layout>
      <Search
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        setWeather={setWeather}
      />
      <Weather weather={weather} currentCity={currentCity} />
    </Layout>
  );
};

export default App;
