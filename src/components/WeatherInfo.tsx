import React from 'react';
import { WeatherInfoProps } from '../types/components';

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather, currentCity }) => {
  const renderWeatherCard = (): JSX.Element => {
    const {
      country,
      description: { description, icon },
      indications: { temp, feels_like: feelsLike, humidity, pressure },
      wind: { speed },
    } = weather!;

    return (
      <div className="weather-card">
        <div className="weather-card-header">
          <div className="weather-card-city-name">
            <h3 className="city-title">{currentCity}</h3>
            <h4 className="country-title">{`Country: ${country}`}</h4>
            <div className="city-weather-description">{description}</div>
          </div>
          <div className="weather-img">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
              className="weather-icon"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="weather-card-body">
          <div className="temperature">{`${Math.round(Number(temp))}°C`}</div>
          <div className="details">
            <table className="details-table">
              <caption className="details-caption">Details</caption>
              <thead>
                <tr>
                  <td className="details-item-name">Feels like</td>
                  <td className="details-item-indication">
                    {`${Math.round(Number(feelsLike))}°C`}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="details-item-name">Wind</td>
                  <td className="details-item-indication">{`${speed} m/s`}</td>
                </tr>
                <tr className="table-row">
                  <td className="details-item-name">Humidity</td>
                  <td className="details-item-indication">{`${humidity}%`}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="details-item-name">Pressure</td>
                  <td className="details-item-indication">{`${pressure} hPa`}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="weather-card-footer">{new Date().toUTCString()}</div>
      </div>
    );
  };

  return (
    <>
      {weather ? (
        renderWeatherCard()
      ) : (
        <span className="app-info">Welcome!</span>
      )}
    </>
  );
};

export default WeatherInfo;
