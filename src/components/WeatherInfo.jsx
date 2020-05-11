import React from 'react';

const WeatherInfo = ({ weather }) => {
  const renderWeatherCard = () => {
    return (
      <div className="weather-card">
        <div className="weather-header">
          <div className="card-city-name">{weather.city}</div>
          <span className="weather-img">
            <img
              src={`http://openweathermap.org/img/wn/${weather.description.icon}@2x.png`}
              alt={weather.description.description}
              className="weather-icon"
            />
          </span>
        </div>
        <div className="weather-body">
          <div className="temperature">{weather.indications.temp}</div>
          <div className="details">
            <ul className="deatils list">
              <li className="details-item feels-like">{`${weather.indications.feels_like} °C`}</li>
              <li className="details-item wind">{`${weather.wind.speed} m/s`}</li>
              <li className="details-item humidity">{`${weather.indications.humidity} %`}</li>
              <li className="details-item pressure">{`${weather.indications.pressure} hPa`}</li>
            </ul>
          </div>
        </div>
        <div className="weather-footer">{new Date().toString()}</div>
      </div>
    );
  };

  return (
    <>
      {weather ? renderWeatherCard() : null}
    </>
  );
};

export default WeatherInfo;
