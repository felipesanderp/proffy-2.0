import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { SuccessProvider } from './success';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <SuccessProvider>{children}</SuccessProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;