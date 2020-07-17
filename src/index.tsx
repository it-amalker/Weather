import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle from './components/global/globalStyles';

import './styles/style.css';
import 'normalize.css';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
