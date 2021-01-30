import styled from 'styled-components';

export const SearchContainer = styled.section`
  display: none;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.main};
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
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
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

  border-top: 3px solid ${({ theme }) => theme.colors.secondary};
`;

export const Input = styled.input`
  width: 15.63rem;
  margin-right: 0.35rem;
  padding: 0.6rem;

  font: inherit;
  font-size: ${({ theme }) => theme.fontSizes.small};

  background-color: ${({ theme }) => theme.colors.secondary};

  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
`;

export const Button = styled.button`
  padding: 0.6rem;

  font: inherit;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;

  background-color: ${({ theme }) => theme.colors.secondary};

  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;

  transition: all 0.5s ease;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;

    background-color: ${({ theme }) => theme.colors.main};
  }

  &:active {
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: underline;

    background-color: ${({ theme }) => theme.colors.main};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.dark};

    background-color: ${({ theme }) => theme.colors.secondary};

    cursor: none;
`;

export const ErrorContainer = styled.span`
  width: 100%;
  padding-top: 0.2rem;

  font-size: ${({ theme }) => theme.fontSizes.smallest};
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
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CityButton = styled.button`
  font: inherit;
  color: ${({ theme }) => theme.colors.secondary};

  background-color: transparent;

  border: 1px solid transparent;

  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.dark};

    border-left-color: ${({ theme }) => theme.colors.secondary};
    border-right-color: ${({ theme }) => theme.colors.secondary};
  }
`;
