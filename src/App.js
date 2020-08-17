import React from 'react';
import './App.css';
import { MainPage } from './main/';
import { ThemeProvider } from '@material-ui/core';
import { AppContextProvider } from './shared/store';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppContextProvider>
          <MainPage />
        </AppContextProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
