import React, { useState } from 'react';
// Components
import Search from '../search';
import Weather from '../weather';
import Layout from '../layout';
import SearchSide from '../layout/searchSide';
import ResultSide from '../layout/resultSide';
// Types
import * as WeatherTypes from '../../types/weather';

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherTypes.Description>(null);
  const [currentCity, setCurrentCity] = useState<string>('');

  return (
    <Layout>
      <SearchSide>
        <Search
          currentCity={currentCity}
          setCurrentCity={setCurrentCity}
          setWeather={setWeather}
        />
      </SearchSide>
      <ResultSide>
        <Weather weather={weather} currentCity={currentCity} />
      </ResultSide>
    </Layout>
  );
};

export default App;
