import styled from 'styled-components';

import bp from '../../styles/breakpoints';

export const SearchContainer = styled.section`
  display: none;

  @media (min-width: ${bp.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 50%;
    height: 100vh;

    background-color: var(--color-main);
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.3);

    z-index: 1;
  }
`;

export const CurrentCityContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40vh;
`;

export const ChooseCity = styled.p`
  font-family: 'Kaushan Script', cursive;
  font-size: var(--font-size-large);
  font-weight: bold;
  color: var(--color-secondary);
`;

export const CurrentCity = styled(ChooseCity)`
  text-transform: capitalize;
`;

export const FormContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  padding-top: 1rem;

  border-top: 3px solid var(--color-secondary);
`;

export const Form = styled.form`
  display: flex;
  width: 65%;
  max-width: 450px;
`;

export const Input = styled.input`
  flex-grow: 1;
  margin-right: 0.35rem;
  padding: 0.6rem;

  font: inherit;
  font-size: var(--font-size-small);

  background-color: var(--color-secondary);

  border: 2px solid var(--color-secondary);
  border-radius: 2px;
`;

export const Button = styled.button`
  padding: 0.6rem;

  font: inherit;
  font-size: var(--font-size-small);
  font-weight: bold;

  background-color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
  border-radius: 2px;

  transition: all 0.5s ease;

  cursor: pointer;

  &:hover {
    color: var(--color-secondary);
    text-decoration: underline;

    background-color: var(--color-main);
  }

  &:active {
    color: var(--color-dark);
    text-decoration: underline;

    background-color: var(--color-main);
  }

  &:disabled {
    color: var(--color-dark);

    background-color: var(--color-secondary);

    cursor: none;
`;

export const ErrorContainer = styled.span`
  flex-basis: 100%;

  padding-top: 0.2rem;

  font-size: var(--font-size-smallest);
  font-weight: bold;
  color: red;

  text-align: center;
`;

export const CitiesContainer = styled.div`
  position: absolute;
  top: 4.44rem;
`;

export const Cities = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const City = styled.li`
  padding: 0.15rem;

  &:hover {
    border-color: var(--color-secondary);
  }
`;

export const CityButton = styled.button`
  font: inherit;
  color: var(--color-secondary);

  background-color: transparent;
  border: 1px solid transparent;

  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    color: var(--color-orange);

    border-left-color: var(--color-secondary);
    border-right-color: var(--color-secondary);
  }
`;
