import React from 'react';
import { shallow } from 'enzyme';
import WeatherInfo from '../WeatherInfo';

describe('<WeatherInfo />', () => {
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
    const wrapper = shallow<typeof WeatherInfo>(
      <WeatherInfo weather={weatherData} currentCity="Berlin" />,
    );
    const title = wrapper.find('.city-title').text();
    expect(title).toBe('Berlin');

    const country = wrapper.find('.country-title').text();
    expect(country).toBe('Country: Germany');

    const description = wrapper.find('.city-weather-description').text();
    const alt = wrapper.find('.weather-img img').prop('alt');
    expect(description).toBe('description-test');
    expect(alt).toBe('description-test');

    const icon = wrapper.find('.weather-img img').prop('src');
    expect(icon).toBe('http://openweathermap.org/img/wn/icon-test-b32@2x.png');

    const temp = wrapper.find('.temperature').text();
    expect(temp).toBe('26°C');

    const feelsLike = wrapper.find('.details-item-indication').first().text();
    expect(feelsLike).toBe('21°C');

    const speed = wrapper.find('.details-item-indication').at(1).text();
    expect(speed).toBe('12 m/s');

    const humidity = wrapper.find('.details-item-indication').at(2).text();
    expect(humidity).toBe('55%');

    const pressure = wrapper.find('.details-item-indication').at(3).text();
    expect(pressure).toBe('30 hPa');
  });

  it('should render Welcome', () => {
    const wrapper = shallow<typeof WeatherInfo>(
      <WeatherInfo weather={null} currentCity="" />,
    );
    const info = wrapper.find('.app-info').text();

    expect(info).toBe('Welcome!');
  });
});
