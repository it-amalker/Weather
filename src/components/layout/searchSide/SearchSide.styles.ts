import styled from 'styled-components';

const SearchContainer = styled.section`
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

export default SearchContainer;
