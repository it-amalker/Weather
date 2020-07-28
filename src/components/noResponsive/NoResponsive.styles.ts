import styled from 'styled-components';

export const NoResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    display: none;
  }

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    min-width: 350px;
  }
`;

export const DevicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: column;
  }
`;

export const NoResponsiveInfo = styled.h2`
  margin: 1.5rem 0;
  font-family: 'Kaushan Script', cursive;
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.big};

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const Mobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6rem;
  height: 10rem;

  border: 3px solid ${({ theme }) => theme.colors.main};
  border-radius: 5px;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    color: ${({ theme }) => theme.colors.mobile};

    border: 3px solid ${({ theme }) => theme.colors.mobile};
    box-shadow: inset 0.2rem 0.2rem 1rem rgba(43, 128, 9, 0.1);
  }
`;

export const Tablet = styled(Mobile)`
  width: 11rem;
  height: 7rem;
  margin-left: 1rem;

  border: 3px solid ${({ theme }) => theme.colors.main};

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    color: ${({ theme }) => theme.colors.tablet};

    border: 3px solid ${({ theme }) => theme.colors.tablet};
    box-shadow: inset 0.2rem 0.2rem 1rem rgba(11, 96, 184, 0.1);
  }

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    margin-left: 0;
    margin-top: 1rem;

    color: ${({ theme }) => theme.colors.main};

    border: 3px solid ${({ theme }) => theme.colors.main};

    box-shadow: none;
  }
`;

export const DeviceText = styled.p`
  margin: 0;
  font-weight: bold;
`;
