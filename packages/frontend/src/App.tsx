import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';

import dark_theme from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark_theme}>
      <GlobalStyles>
        <div>Hello World</div>
      </GlobalStyles>
    </ThemeProvider>
  );
};

export default App;
