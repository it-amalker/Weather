import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 2.5%;
  right: 3%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const LabelText = styled.p`
  margin: 0;

  font-size: var(--font-size-tiny);
  color: var(--color-dark);
  font-weight: bold;
`;
