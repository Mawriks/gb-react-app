import React from 'react';

interface ThemeContext {
  theme: 'light' | 'dark';
  toggleTheme?: () => void;
}

const defaultTheme: ThemeContext = {
  theme: 'dark',
};

export const ThemeContext = React.createContext(defaultTheme);
