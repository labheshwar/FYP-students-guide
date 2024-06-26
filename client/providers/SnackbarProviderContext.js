'use client';

import React from 'react';
import { SnackbarProvider } from 'notistack';

const SnackbarProviderContext = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={1}
      autoHideDuration={2000}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarProviderContext;