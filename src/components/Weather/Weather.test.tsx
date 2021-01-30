import React from 'react';
import { shallow } from 'enzyme';
import Weather from './Weather';
import * as S from './Weather.styles';

describe('<Weather> component', () => {
  it('should render correct weather data', () => {
    const weatherData = {
      description: {
        id: 111,
        main: 'main',
        description: 'description-test',
        icon: 'icon-test-b32',
      },
      indications: {
        feels_like: 21.2,
        humidity: 55,
        pressure: 30,
        temp: 25.6,
        temp_max: 26,
        temp_min: 20,
      },
      wind: {
        speed: 12,
        deg: 10,
        gust: 100,
      },
      city: 'Berlin',
      country: 'Germany',
    };

    const wrapper = shallow<typeof Weather>(
      <Weather weather={weatherData} currentCity="Berlin" />,
    );

    const title = wrapper.find(S.City).text();
    expect(title).toBe('Berlin');

    const country = wrapper.find(S.Country).text();
    expect(country).toBe('Country: Germany');

    const description = wrapper.find(S.WeatherDescription).text();
    const alt = wrapper.find(S.WeatherIcon).prop('alt');
    const iconUrl = wrapper.find(S.WeatherIcon).prop('src');
    expect(description).toBe('description-test');
    expect(alt).toBe('description-test');
    expect(iconUrl).toBe(
      'http://openweathermap.org/img/wn/icon-test-b32@2x.png',
    );

    const temp = wrapper.find(S.Temperature).text();
    expect(temp).toBe('26°C');

    const feelsLike = wrapper.find(S.Indication).first().text();
    expect(feelsLike).toBe('21°C');

    const speed = wrapper.find(S.Indication).at(1).text();
    expect(speed).toBe('12 m/s');

    const humidity = wrapper.find(S.Indication).at(2).text();
    expect(humidity).toBe('55%');

    const pressure = wrapper.find(S.Indication).at(3).text();
    expect(pressure).toBe('30 hPa');
  });

  it('should render "Welcome" badge', () => {
    const wrapper = shallow<typeof Weather>(
      <Weather weather={null} currentCity="" />,
    );
    const greeting = wrapper.find(S.Greeting).text();

    expect(greeting).toBe('Welcome!');
  });
});
