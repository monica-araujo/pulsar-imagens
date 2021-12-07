import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { media } from './assets/styles/media'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  padding: 0;
}

body {
  background-color: RGB(238, 238, 238);
}`

const theme = {
  primary: 'RGB(255, 189, 17)',
  secundary: 'rgba(255,200,13)',
  tertiary: 'rgba(0, 0, 0, 0.6)'
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