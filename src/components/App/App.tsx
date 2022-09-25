import { FC, Suspense, useState } from 'react';
import './App.css';
import { ThemeContext } from 'src/utils/ThemeContext';
import { AppRouter } from './components/AppRouter';

export const App: FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </ThemeContext.Provider>
  );
};
