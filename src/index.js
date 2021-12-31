import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/';
import './Static/CSS/index.css';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#635bfc'
    },
    secondary: {
      main: '#eedfce'
    }
  },
  typography: {
    fontFamily: 'Noto Sans, sans-serif',
  },
  breakpoints: {
    values: {
      mobile: 0,
      smart: 605,
      tablet: 768,
      mini: 860,
      laptop: 1036,
      desktop: 1200,
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
