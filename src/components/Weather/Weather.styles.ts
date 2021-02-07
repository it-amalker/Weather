import styled from 'styled-components';
import bp from '../../styles/breakpoints';
import { translateIn, translateOut } from './animations';

export const ResultContainer = styled.section`
  display: none;

  @media (min-width: ${bp.desktop}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 50%;
    height: 100vh;

    background-color: var(--color-secondary);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.1rem;

  border: 3px solid var(--color-main);
  border-radius: 10px;

  box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.3);

  transform: translateX(-50vw);

  &.show {
    animation: ${translateIn} 1.2s ease-in forwards;
  }

  &.hide {
    animation: ${translateOut} 0.4s ease-out;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.33rem 1rem;

  color: var(--color-secondary);

  background-color: var(--color-main);

  border-bottom: 2px solid var(--color-main);
`;

export const LocationContainer = styled.div`
  width: 50%;
`;

export const City = styled.h3`
  margin: 0;
  padding: 0;

  font-size: var(--font-size-big);
  text-transform: capitalize;
`;

export const Country = styled.h4`
  margin: 0;
  padding: 0;

  font-size: var(--font-size-smallest);
`;

export const WeatherDescription = styled.p`
  margin: 0;
  margin-top: 0.35rem;

  font-size: var(--font-size-medium);
`;

export const WeatherIconContainer = styled.div`
  width: 50%;
`;

export const WeatherIcon = styled.img`
  display: block;
  width: 6.25rem;
  height: 6.25rem;
  margin: auto;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.56rem 1rem;

  border-bottom: 2px solid var(--color-main);
`;

export const Temperature = styled.div`
  width: 50%;

  font-size: var(--font-size-large);
  font-weight: bold;

  text-align: center;
`;

export const Details = styled.div`
  width: 50%;
`;

export const Table = styled.table`
  width: 100%;

  font-size: var(--font-size-small);
`;

export const Caption = styled.caption`
  padding-bottom: 0.35rem;
  margin-bottom: 0.625rem;

  font-weight: bold;

  border-bottom: 1px solid var(--color-main);
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

  color: var(--color-secondary);

  background-color: var(--color-main);
`;

export const Greeting = styled.div`
  padding: 2.2rem;

  font-family: 'Kaushan Script', cursive;
  font-size: var(--font-size-large);
  font-weight: bold;

  border: 3px solid var(--color-main);
  border-radius: 50px;

  transform: rotate(-5deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }
`;
