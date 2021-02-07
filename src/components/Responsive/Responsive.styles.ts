import styled from 'styled-components';
import bp from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (min-width: ${bp.desktop}) {
    display: none;
  }

  @media (max-width: ${bp.mobile}) {
    min-width: 350px;
  }
`;

export const DevicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${bp.mobile}) {
    flex-direction: column;
  }
`;

export const Info = styled.h2`
  margin: 1.5rem 0;
  font-family: 'Kaushan Script', cursive;
  color: var(--color-main);
  font-size: var(--font-size-big);

  @media (max-width: ${bp.mobile}) {
    font-size: var(--font-size-medium);
  }
`;

export const Device = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid var(--color-main);
  border-radius: 5px;
`;

export const Mobile = styled(Device)`
  width: 6rem;
  height: 10rem;

  @media (max-width: ${bp.mobile}) {
    color: var(--color-olive);

    border: 3px solid var(--color-olive);
    box-shadow: inset 0.2rem 0.2rem 1rem rgba(43, 128, 9, 0.1);
  }
`;

export const Tablet = styled(Device)`
  width: 11rem;
  height: 7rem;
  margin-left: 1rem;

  @media (min-width: ${bp['tablet-small']}) and (max-width: ${bp[
      'tablet-big'
    ]}) {
    color: var(--color-darker-blue);

    border: 3px solid var(--color-darker-blue);
    box-shadow: inset 0.2rem 0.2rem 1rem rgba(11, 96, 184, 0.1);
  }

  @media (max-width: ${bp.mobile}) {
    margin-left: 0;
    margin-top: 1rem;

    color: var(--color-main);

    border: 3px solid var(--color-main);

    box-shadow: none;
  }
`;

export const DeviceText = styled.p`
  margin: 0;
  font-weight: bold;
`;
