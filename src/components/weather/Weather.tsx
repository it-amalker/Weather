import React from 'react';
import { format } from 'date-fns';
// components
import {
  ResultContainer,
  Card,
  CardHeader,
  LocationContainer,
  City,
  Country,
  WeatherDescription,
  WeatherIcon,
  WeatherIconContainer,
  CardBody,
  Temperature,
  Details,
  Table,
  Caption,
  IndicationName,
  Indication,
  CardFooter,
  Greeting,
} from './Weather.styles';
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
      {weather ? renderWeatherCard() : <Greeting>Welcome!</Greeting>}
    </ResultContainer>
  );
};

export default Weather;
