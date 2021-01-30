import React from 'react';
import { format } from 'date-fns';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  LocationContainer,
  City,
  Country,
  WeatherDescription,
  WeatherIconContainer,
  WeatherIcon,
  Temperature,
  Details,
  Table,
  Caption,
  Indication,
  IndicationName,
  ResultContainer,
  Greeting,
} from './Weather.styles';
import { WeatherDescriptionType } from '../../types';

export type WeatherProps = {
  currentCity?: string;
  weather: WeatherDescriptionType | null;
};

const Weather: React.FC<WeatherProps> = ({ weather, currentCity }) => {
  const renderWeatherCard = (weatherData: WeatherDescriptionType) => {
    const {
      country,
      description: { description, icon },
      indications: { temp, feels_like: feelsLike, humidity, pressure },
      wind: { speed },
    } = weatherData;

    return (
      <Card>
        <CardHeader>
          <LocationContainer>
            <City>{currentCity}</City>
            <Country>{`Country: ${country}`}</Country>
            <WeatherDescription>{description}</WeatherDescription>
          </LocationContainer>
          <WeatherIconContainer>
            <WeatherIcon
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
              width="100"
              height="100"
            />
          </WeatherIconContainer>
        </CardHeader>
        <CardBody>
          <Temperature>{`${Math.round(Number(temp))}°C`}</Temperature>
          <Details>
            <Table>
              <Caption>Details</Caption>
              <thead />
              <tbody>
                <tr>
                  <IndicationName>Feels like</IndicationName>
                  <Indication>
                    {`${Math.round(Number(feelsLike))}°C`}
                  </Indication>
                </tr>
                <tr>
                  <IndicationName>Wind</IndicationName>
                  <Indication>{`${speed} m/s`}</Indication>
                </tr>
                <tr>
                  <IndicationName>Humidity</IndicationName>
                  <Indication>{`${humidity}%`}</Indication>
                </tr>
                <tr>
                  <IndicationName>Pressure</IndicationName>
                  <Indication>{`${pressure} hPa`}</Indication>
                </tr>
              </tbody>
              <tfoot />
            </Table>
          </Details>
        </CardBody>
        <CardFooter>{format(new Date(), 'HH:mm, dd LLLL yyyy')}</CardFooter>
      </Card>
    );
  };

  return (
    <ResultContainer>
      {weather ? renderWeatherCard(weather) : <Greeting>Welcome!</Greeting>}
    </ResultContainer>
  );
};

export default Weather;
