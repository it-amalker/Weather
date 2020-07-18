import React, { ReactNode } from 'react';
import SearchContainer from './SearchSide.styles';

type SearchSideProps = {
  children?: ReactNode;
};

const SearchSide: React.FC<SearchSideProps> = ({ children }) => (
  <>
    <SearchContainer>{children}</SearchContainer>
  </>
);

export default SearchSide;
