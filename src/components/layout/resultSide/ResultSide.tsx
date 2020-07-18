import React, { ReactNode } from 'react';
import ResultContainer from './ResultSide.styles';

type ResultSideProps = {
  children?: ReactNode;
};

const ResultSide: React.FC<ResultSideProps> = ({ children }) => (
  <>
    <ResultContainer>{children}</ResultContainer>
  </>
);

export default ResultSide;
