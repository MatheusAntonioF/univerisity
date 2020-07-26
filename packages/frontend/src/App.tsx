import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';

import dark_theme from './styles/themes/dark';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark_theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
