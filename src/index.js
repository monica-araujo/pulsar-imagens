import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { media } from './assets/styles/media';
import GlobalStyle from './assets/styles/GlobalStyle'

const theme = {
  primary: 'RGB(255, 189, 17)',
  secundary: 'rgba(255,200,13)',
  tertiary: 'rgba(0, 0, 0, 0.8)'
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider
      theme={{
        ...theme,
        ...media
      }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);