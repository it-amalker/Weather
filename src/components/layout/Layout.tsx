import React, { ReactNode } from 'react';

import { Main, Title } from './Layout.styles';
import NoResponsive from '../noResponsive';

type LayoutProps = {
  children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Main>
    <Title>Weather App</Title>
    {children}
    <NoResponsive />
  </Main>
);

export default Layout;
