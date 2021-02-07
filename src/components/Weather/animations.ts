import { keyframes } from 'styled-components';

export const translateIn = keyframes`
  0% {
    transform: scale(0.9) translateX(-50vw);
    opacity: 0;
  }
  75% {
    transform: scale(1) translateX(1.5vw);
    opacity: 0.9;
  }
  85% {
    transform: scale(1) translateX(-2vw);
    opacity: 0.95;
  }
  100% {
    transform: scale(1) translateX(0);
    opacity: 1;

  }
`;

export const translateOut = keyframes`
  0% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.9) translateX(-50vw);
    opacity: 0;
  }
`;
