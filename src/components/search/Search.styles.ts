import styled from 'styled-components';

export const CurrentCityContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40vh;
`;

export const ChooseCity = styled.p`
  font-family: 'Kaushan Script', cursive;
  font-size: 4.375rem;
  font-weight: bold;
  color: #fff;
`;

export const CurrentCity = styled(ChooseCity)`
  text-transform: capitalize;
`;

export const FormContainer = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;

  border-top: 3px solid #fffafa;
`;

export const Input = styled.input`
  width: 15.63rem;
  margin-right: 0.35rem;
  padding: 0.6rem;

  font: inherit;
  font-size: 1.1rem;

  border: 2px solid #fffafa;
  border-radius: 2px;

  &:focus {
    background-color: #fffafa;
  }
`;

export const Button = styled.button`
  padding: 0.6rem;

  font: inherit;
  font-size: 1.1rem;

  background-color: #fff;

  border: 2px solid #fffafa;
  border-radius: 2px;

  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: #fff;
    text-decoration: underline;

    background-color: #000;
  }

  &:active {
    font-weight: bold;
    color: #ccc;
    text-decoration: underline;

    background-color: #000;
  }

  &:disabled {
    color: #ccc;

    background-color: #fff;

    cursor: none;
`;

export const ErrorContainer = styled.span`
  width: 100%;

  font-size: 0.9rem;
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
    border-color: #fff;
  }
`;

export const CityButton = styled.button`
  font: inherit;
  color: #fffafa;

  background-color: transparent;

  border: 1px solid #000;

  cursor: pointer;

  &:hover {
    color: #828282;

    border-left-color: #fff;
    border-right-color: #fff;
  }
`;
