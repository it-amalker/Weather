import styled from 'styled-components';

export const CurrentCityContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40vh;

  font-family: 'Kaushan Script', cursive;
  font-size: 70px;
  font-weight: bold;
  color: #fff;
`;

export const CurrentCity = styled.p`
  text-transform: capitalize;
`;

export const FormContainer = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-top: 15px;

  border-top: 3px solid #fffafa;
`;

export const Input = styled.input`
  width: 250px;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px;

  font-size: 16px;

  border: 2px solid #fffafa;
  border-radius: 2px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px;

  font-size: 16px;

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

  font-size: 14px;
  font-weight: bold;
  color: red;

  text-align: center;
`;

export const CitiesContainer = styled.div`
  position: absolute;
  top: 55px;
`;

export const Cities = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const City = styled.li`
  padding: 2px;

  color: gray;

  &:hover {
    border-color: #fff;
  }
`;

export const CityButton = styled.button`
  font-size: 16px;
  color: #fffafa;

  background-color: transparent;

  border: 1px solid #000;

  cursor: pointer;

  &:hover {
    color: gray;

    border-left-color: #fff;
    border-right-color: #fff;
  }
`;
