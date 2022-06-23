import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Box, styled, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import theme from './theme';

const Background = styled(Box)(() => ({
  backgroundColor: grey[200],
  height: '100vh',
  padding: '20px'
}));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Background>
      <App />
    </Background>
  </ThemeProvider>
);
reportWebVitals();
