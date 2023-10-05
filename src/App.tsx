import React from 'react';
import './App.css';
import Registration from './pages/registration/Registration';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';

function App() {
  return (
    <div className='App'>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <Registration />
      </LocalizationProvider>
    </div>
  );
}

export default App;
