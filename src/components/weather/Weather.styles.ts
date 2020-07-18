import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;

  border: 3px solid #000;
  border-radius: 10px;

  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;

  background-color: #000;

  border-bottom: 2px solid #000;
`;

export const LocationContainer = styled.div`
  width: 50%;
`;

export const City = styled.h3`
  margin: 0;
  padding: 0;

  font-size: 36px;
  color: #fff;
  text-transform: capitalize;
`;

export const Country = styled.h4`
  margin: 0;
  margin-top: 3px;
  padding: 0;

  font-size: 14px;
  color: #fff;
`;

export const WeatherDescription = styled.p`
  margin: 0;
  margin-top: 5px;

  font-size: 20px;
  color: #fff;
`;

export const WeatherIconContainer = styled.div`
  width: 50%;
`;

export const WeatherIcon = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin: auto;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 15px;

  border-bottom: 2px solid #000;
`;

export const Temperature = styled.div`
  width: 50%;

  font-size: 66px;
  font-weight: bold;

  text-align: center;
`;

export const Details = styled.div`
  width: 50%;
`;

export const Table = styled.table`
  width: 100%;

  font-size: 18px;
`;

export const Caption = styled.caption`
  padding-bottom: 5px;
  margin-bottom: 10px;

  font-weight: bold;

  border-bottom: 1px solid #000;
`;

export const IndicationName = styled.td`
  width: 50%;
`;

export const Indication = styled.td`
  width: 50%;

  font-weight: bold;
`;

export const CardFooter = styled.div`
  padding: 5px 15px;
  margin-left: auto;

  color: #fff;

  background-color: #000;
`;

export const Greeting = styled.div`
  padding: 35px;

  font-family: 'Kaushan Script', cursive;
  font-size: 65px;
  font-weight: bold;

  border: 3px solid #000;
  border-radius: 50px;

  transform: rotate(-5deg);

  &:hover {
    transform: scale(1.5);
  }
`;
