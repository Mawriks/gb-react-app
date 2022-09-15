import { FC } from 'react';
import { Chat, Chats } from 'src/types';
import { CreateChat } from './components/CreateChat';
import { NavLink } from 'react-router-dom';
import ChatListCSS from './ChatList.module.css';

interface ChatListProps {
  chats: Chats;
  chatSetter: (chat: Chat) => void;
  chatRemover: (chatId: string | number) => void;
}

export const ChatList: FC<ChatListProps> = ({
  chats,
  chatSetter,
  chatRemover,
}) => {
  return (
    <div>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? ChatListCSS.activeLink : ''
              }
              to={`/chats/${chat.id}`}
            >
              {chat.name}
            </NavLink>
            <button onClick={() => chatRemover(chat.id)}>remove</button>
          </li>
        ))}
      </ul>
      <CreateChat onAddChat={chatSetter} />
    </div>
  );
};
