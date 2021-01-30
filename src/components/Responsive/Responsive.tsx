import React from 'react';
import {
  Container,
  DevicesContainer,
  Info,
  Mobile,
  DeviceText,
  Tablet,
} from './Responsive.styles';

export const Responsive: React.FC = () => (
  <Container>
    <Info>Responsive design is under development</Info>
    <DevicesContainer>
      <Mobile>
        <DeviceText>Mobile</DeviceText>
      </Mobile>
      <Tablet>
        <DeviceText>Tablet</DeviceText>
      </Tablet>
    </DevicesContainer>
  </Container>
);

export default Responsive;
