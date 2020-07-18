import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import GlobalStyle from './components/global/globalStyles';

import './styles/style.css';

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById('root'),
);
