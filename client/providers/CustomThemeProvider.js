"use client"

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const CustomFontTheme = createTheme({
  typography: {
    fontFamily: "Quicksand, sans-serif"
  }
});

const CustomThemeProvider = ({ children }) => {
  return <ThemeProvider theme={CustomFontTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;