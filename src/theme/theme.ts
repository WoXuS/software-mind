import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    secondary: {
      main: 'rgb(252, 102, 35)',
      contrastText: '#fff',
    },
    primary: {
      main: '#006293',
    },
  },
});

export default theme;
