import { FC } from 'react';
import { CreateChat } from './components/CreateChat';
import { NavLink } from 'react-router-dom';
import ChatListCSS from './ChatList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChat } from 'src/store/messages/actions';
import { selectChats } from 'src/store/messages/selectors';

export const ChatList: FC = () => {
  const dispatch = useDispatch();
  const chats = useSelector(
    selectChats,
    (prev, next) => prev.length === next.length
  );
  return (
    <div>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? ChatListCSS.activeLink : ''
              }
              to={`/chats/${chat.name}`}
            >
              {chat.name}
            </NavLink>
            <button onClick={() => dispatch(deleteChat(chat.name))}>
              remove
            </button>
          </li>
        ))}
      </ul>
      <CreateChat />
    </div>
  );
};
