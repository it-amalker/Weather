import React, { useState } from 'react';
import styled from 'styled-components';

import Search from './components/Search';
import Weather from './components/Weather';
import Responsive from './components/Responsive';

import { WeatherDescriptionType } from './types';

export const Main = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  border: 0;
  white-space: nowrap;
  overflow: hidden;
`;

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherDescriptionType | null>(null);
  const [currentCity, setCurrentCity] = useState<string>('');

  return (
    <Main>
      <Title>Weather App</Title>
      <Search
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        setWeather={setWeather}
      />
      <Weather weather={weather} currentCity={currentCity} />
      <Responsive />
    </Main>
  );
};

export default App;
