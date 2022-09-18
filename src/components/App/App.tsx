import { FC, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ChatList } from './components/ChatList/ChatList';
import { Profile } from 'src/pages/Profile';
import { Main } from 'src/pages/Main';
import { ChatPage } from 'src/pages/ChatPage';
import { Header } from './components/Header';
import { ThemeContext } from 'src/utils/ThemeContext';

export const App: FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<ChatPage />} />
          </Route>
          <Route path="*" element={<h2>404 page</h2>}></Route>
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
};
