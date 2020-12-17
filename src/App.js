import React from 'react';
import './App.css';
import { MainPage } from './main/';
import { ThemeProvider } from '@material-ui/core';
import { AppContextProvider } from './shared/components/';
import { theme } from './theme';
import DemoReducer from './DemoReducer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppContextProvider>
          <MainPage />
        </AppContextProvider>
        {/* <DemoReducer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
