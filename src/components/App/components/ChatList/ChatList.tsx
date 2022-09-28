import { FC } from 'react';
import { CreateChat } from './components/CreateChat';
import { NavLink, useNavigate } from 'react-router-dom';
import ChatListCSS from './ChatList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { db } from 'src/services/firebase';
import { selectChats } from 'src/store/messages/selectors';
import { ref, remove } from 'firebase/database';

export const ChatList: FC<any> = ({ chats }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const chats = useSelector(
  //   selectChats,
  //   (prev, next) => prev.length === next.length
  // );
  const handleDelete = (chatName: string) => {
    remove(ref(db, `chats/${chatName}`));
    remove(ref(db, `messages/${chatName}`));
    navigate('/chats');
  };
  return (
    <div>
      <ul>
        {chats.map((chat: any) => (
          <li key={chat.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? ChatListCSS.activeLink : ''
              }
              to={`/chats/${chat.name}`}
            >
              {chat.name}
            </NavLink>
            <button onClick={() => handleDelete(chat.name)}>remove</button>
          </li>
        ))}
      </ul>
      <CreateChat />
    </div>
  );
};
