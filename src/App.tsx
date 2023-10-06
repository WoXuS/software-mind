import React from 'react';
import './App.css';
import Registration from './pages/registration/Registration';
import theme from './theme/theme';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
          <Registration />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
