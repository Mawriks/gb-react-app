import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Articles } from 'src/pages/Articles';
import { ChatPage } from 'src/pages/ChatPage';
import { Main } from 'src/pages/Main';
import { SignIn } from 'src/pages/SignIn';
import { ChatList } from './ChatList';
import { Header } from './Header';
import { PrivateRouter } from './PrivatRouter';
import { PublicRouter } from './PublicRouter';

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
        <Route path="articles" element={<Articles />} />
        <Route
          path="profile"
          element={<PrivateRouter component={<Profile />} />}
        />
        <Route
          path="signin"
          element={<PublicRouter component={<SignIn />} />}
        />
        <Route path="chats" element={<PrivateRouter />}>
          <Route index element={<ChatList />} />
          <Route path=":chatId" element={<ChatPage />} />
        </Route>
        <Route path="*" element={<h2>404 page</h2>}></Route>
      </Route>
    </Routes>
  );
};
