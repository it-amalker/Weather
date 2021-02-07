import React from 'react';

import { Container, LabelText } from './Version.styles';
import { version, author } from '../../../package.json';

const [name, surname] = author.split(' ');

export const Version: React.FC = () => (
  <Container>
    <LabelText>{`v.${version}`}</LabelText>
    <LabelText>{`Developed by: ${name} ${surname}`}</LabelText>
  </Container>
);

export default Version;
