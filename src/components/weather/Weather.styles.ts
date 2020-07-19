import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.1rem;

  border: 3px solid #000;
  border-radius: 10px;

  box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.33rem 1rem;

  background-color: #000;

  border-bottom: 2px solid #000;
`;

export const LocationContainer = styled.div`
  width: 50%;
`;

export const City = styled.h3`
  margin: 0;
  padding: 0;

  font-size: 2.25rem;
  color: #fff;
  text-transform: capitalize;
`;

export const Country = styled.h4`
  margin: 0;
  margin-top: 0.18rem;
  padding: 0;

  font-size: 0.9rem;
  color: #fff;
`;

export const WeatherDescription = styled.p`
  margin: 0;
  margin-top: 0.35rem;

  font-size: 1.25rem;
  color: #fff;
`;

export const WeatherIconContainer = styled.div`
  width: 50%;
`;

export const WeatherIcon = styled.img`
  display: block;
  width: 6.25rem;
  height: 6.25rem;
  margin: auto;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.56rem 1rem;

  border-bottom: 2px solid #000;
`;

export const Temperature = styled.div`
  width: 50%;

  font-size: 4.125rem;
  font-weight: bold;

  text-align: center;
`;

export const Details = styled.div`
  width: 50%;
`;

export const Table = styled.table`
  width: 100%;

  font-size: 1.1rem;
`;

export const Caption = styled.caption`
  padding-bottom: 0.35rem;
  margin-bottom: 0.625rem;

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
  padding: 0.33rem 1rem;
  margin-left: auto;

  color: #fff;

  background-color: #000;
`;

export const Greeting = styled.div`
  padding: 2.2rem;

  font-family: 'Kaushan Script', cursive;
  font-size: 4rem;
  font-weight: bold;

  border: 3px solid #000;
  border-radius: 50px;

  transform: rotate(-5deg);

  &:hover {
    transform: scale(1.5);
  }
`;
