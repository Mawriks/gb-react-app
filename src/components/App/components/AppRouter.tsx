import { onValue, ref } from 'firebase/database';
import { FC, lazy, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Articles } from 'src/pages/Articles';
import { ChatPage } from 'src/pages/ChatPage';
import { Main } from 'src/pages/Main';
import { SignIn } from 'src/pages/SignIn';
import { SignUp } from 'src/pages/SignUp';
import { db, firebaseAuth, getChats } from 'src/services/firebase';
import { auth } from 'src/store/profile/slice';
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
  const dispatch = useDispatch();
  const [chats, setChats] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const authUns = firebaseAuth.onAuthStateChanged((user) => {
      dispatch(auth(!!user));
    });
    const chatsUns = onValue(getChats(), (snapshot) => {
      const data = snapshot.val() || {};
      setChats([...Object.values(data)]);
    });
    const messagesUns = onValue(ref(db, 'messages'), (snapshot) => {
      const data = snapshot.val() || {};
      setMessages(data);
    });
    return () => {
      authUns();
      chatsUns();
      messagesUns();
    };
  }, []);

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
        <Route
          path="signup"
          element={<PublicRouter component={<SignUp />} />}
        />
        <Route path="chats" element={<PrivateRouter />}>
          <Route
            index
            element={<ChatList chats={chats} messages={messages} />}
          />
          <Route
            path=":chatId"
            element={<ChatPage chats={chats} messages={messages} />}
          />
        </Route>
        <Route path="*" element={<h2>404 page</h2>}></Route>
      </Route>
    </Routes>
  );
};
