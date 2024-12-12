import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#f26316',
      light: '#ed7637',
      dark: '#f55702',
      contrastText: '#47008F',
    },
    text: {
      primary: 'red',
      secondary: 'green',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
})

export default theme
