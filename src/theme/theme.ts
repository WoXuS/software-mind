import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    secondary: {
      main: '#000000',
      contrastText: '#fff',
    },
    primary: {
      main: '#006293',
    },
  },
});

export default theme;
