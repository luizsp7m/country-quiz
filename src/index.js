import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyle';

import { QuizProvider } from './contexts/QuizContext';
import Home from './views/Home';

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Home />
      <GlobalStyle />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
