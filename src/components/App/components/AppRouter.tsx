import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChatPage } from 'src/pages/ChatPage';
import { Main } from 'src/pages/Main';
import { ChatList } from './ChatList';
import { Header } from './Header';

const Profile = lazy(() =>
  Promise.all([
    import('../../../pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
);

export const AppRouter: FC = () => {
  return (
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
  );
};
