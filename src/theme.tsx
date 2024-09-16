'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2176AE',
      light: '#57B8FF',
    },
    secondary: {
      main: '#FBB130',
    },
    background: {
      default: '#2176AE',
    },
    contrastThreshold: 4.5,
  },
  typography: {
    fontFamily: 'var(--font-atkinson-hyperlegible)'
  },
};

export const theme = createTheme(themeOptions);