import React, { ReactNode } from 'react';
import Title from './Layout.styles';

type LayoutProps = {
  children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Title>Weather App</Title>
    {children}
  </>
);

export default Layout;
