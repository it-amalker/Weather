import styled from 'styled-components';

const ResultContainer = styled.section`
  display: none;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default ResultContainer;
