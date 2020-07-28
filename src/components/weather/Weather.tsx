import React from 'react';
import { format } from 'date-fns';
// components
import * as Styled from './Weather.styles';
// types
import * as ComponentTypes from '../../types/components';

const Weather: React.FC<ComponentTypes.WeatherProps> = ({
  weather,
  currentCity,
}) => {
  const renderWeatherCard = (): JSX.Element => {
    const {
      country,
      description: { description, icon },
      indications: { temp, feels_like: feelsLike, humidity, pressure },
      wind: { speed },
    } = weather!;

    return (
      <Styled.Card>
        <Styled.CardHeader>
          <Styled.LocationContainer>
            <Styled.City>{currentCity}</Styled.City>
            <Styled.Country>{`Country: ${country}`}</Styled.Country>
            <Styled.WeatherDescription>{description}</Styled.WeatherDescription>
          </Styled.LocationContainer>
          <Styled.WeatherIconContainer>
            <Styled.WeatherIcon
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
              width="100"
              height="100"
            />
          </Styled.WeatherIconContainer>
        </Styled.CardHeader>
        <Styled.CardBody>
          <Styled.Temperature>
            {`${Math.round(Number(temp))}°C`}
          </Styled.Temperature>
          <Styled.Details>
            <Styled.Table>
              <Styled.Caption>Details</Styled.Caption>
              <thead />
              <tbody>
                <tr>
                  <Styled.IndicationName>Feels like</Styled.IndicationName>
                  <Styled.Indication>
                    {`${Math.round(Number(feelsLike))}°C`}
                  </Styled.Indication>
                </tr>
                <tr>
                  <Styled.IndicationName>Wind</Styled.IndicationName>
                  <Styled.Indication>{`${speed} m/s`}</Styled.Indication>
                </tr>
                <tr>
                  <Styled.IndicationName>Humidity</Styled.IndicationName>
                  <Styled.Indication>{`${humidity}%`}</Styled.Indication>
                </tr>
                <tr>
                  <Styled.IndicationName>Pressure</Styled.IndicationName>
                  <Styled.Indication>{`${pressure} hPa`}</Styled.Indication>
                </tr>
              </tbody>
              <tfoot />
            </Styled.Table>
          </Styled.Details>
        </Styled.CardBody>
        <Styled.CardFooter>
          {format(new Date(), 'HH:mm, dd LLLL yyyy')}
        </Styled.CardFooter>
      </Styled.Card>
    );
  };

  return (
    <Styled.ResultContainer>
      {weather ? (
        renderWeatherCard()
      ) : (
        <Styled.Greeting>Welcome!</Styled.Greeting>
      )}
    </Styled.ResultContainer>
  );
};

export default Weather;
