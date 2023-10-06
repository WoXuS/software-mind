import React from 'react';
import './App.css';
import Registration from './pages/registration/Registration';
import theme from './theme/theme';
import Logo from './components/logo/Logo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
          <div className='registration-form'>
            <Registration />
          </div>
            <Logo />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
