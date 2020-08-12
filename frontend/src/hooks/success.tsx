import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import SuccessContainer from '../components/SuccessContainer';

interface SuccessContextData {
  addSuccess(message: Omit<SuccessMessage, 'id'>): void;
  removeSuccess(id: string): void;
}

export interface SuccessMessage {
  id: string;
  title: string;
  description?: string;
  subdescription: string;
  buttonText: string;
}

const SuccessContext = createContext<SuccessContextData>({} as SuccessContextData);

const SuccessProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<SuccessMessage[]>([]);

  const addSuccess = useCallback(
    ({ title, description, subdescription, buttonText }: Omit<SuccessMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        title,
        description,
        subdescription,
        buttonText,
      };

      setMessages((state) => [...state, toast]);
    },
    [],
  );

  const removeSuccess = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <SuccessContext.Provider value={{ addSuccess, removeSuccess }}>
      {children}
      <SuccessContainer messages={messages} />
    </SuccessContext.Provider>
  );
};

function useSuccess(): SuccessContextData {
  const context = useContext(SuccessContext);

  if (!context) {
    throw new Error('useSuccess must be use within a ToastProvider ');
  }

  return context;
}

export { SuccessProvider, useSuccess };