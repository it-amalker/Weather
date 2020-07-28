import React from 'react';
import * as Styled from './NoResponsive.styles';

const NoResponsive: React.FC = () => (
  <>
    <Styled.NoResponsiveContainer>
      <Styled.NoResponsiveInfo>
        Responsive design is under development
      </Styled.NoResponsiveInfo>
      <Styled.DevicesContainer>
        <Styled.Mobile>
          <Styled.DeviceText>Mobile</Styled.DeviceText>
        </Styled.Mobile>
        <Styled.Tablet>
          <Styled.DeviceText>Tablet</Styled.DeviceText>
        </Styled.Tablet>
      </Styled.DevicesContainer>
    </Styled.NoResponsiveContainer>
  </>
);

export default NoResponsive;
