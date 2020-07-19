import React from 'react';
import {
  NoResponsiveContainer,
  NoResponsiveInfo,
  DevicesContainer,
  Mobile,
  Tablet,
  DeviceText,
} from './NoResponsive.styles';

const NoResponsive: React.FC = () => (
  <>
    <NoResponsiveContainer>
      <NoResponsiveInfo>
        Responsive design is under development
      </NoResponsiveInfo>
      <DevicesContainer>
        <Mobile>
          <DeviceText>Mobile</DeviceText>
        </Mobile>
        <Tablet>
          <DeviceText>Tablet</DeviceText>
        </Tablet>
      </DevicesContainer>
    </NoResponsiveContainer>
  </>
);

export default NoResponsive;
