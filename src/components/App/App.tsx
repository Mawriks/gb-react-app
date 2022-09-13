import { FC, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ChatList } from './components/ChatList/ChatList';
import { Chat, Chats, Message, Messages } from 'src/types';
import { Profile } from 'src/pages/Profile';
import { Main } from 'src/pages/Main';
import { ChatPage } from 'src/pages/ChatPage';
import { Header } from './components/Header';

const defaultChats: Chat[] = [
  {
    id: 1,
    name: 'Chat 1',
  },
  {
    id: 2,
    name: 'Chat 2',
  },
];

const defaultMessages: Messages = {
  '1': [
    { author: 'User', text: 'text' },
    { author: 'User', text: 'text2' },
    { author: 'User', text: 'text3' },
  ],
  '2': [
    { author: 'User', text: 'text4' },
    { author: 'User', text: 'text5' },
    { author: 'User', text: 'text6' },
  ],
};

export const App: FC = () => {
  const [chats, setChats] = useState<Chats>(defaultChats);
  const [messages, setMessages] = useState<Messages>(defaultMessages);
  const [name] = useState('User');

  const onAddChat = (newChat: Chat) => {
    setChats([...chats, newChat]);
    setMessages({
      ...messages,
      [newChat.id]: [],
    });
  };

  const onRemoveChat = (chatId: string | number) => {
    const filteredChats = chats.filter((item) => item.id != chatId);
    delete messages[chatId];
    setChats([...filteredChats]);
    setMessages({ ...messages });
  };

  const addMessage = (chatId: string, newMessage: Message) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Header name={name} />}>
        <Route index element={<Main />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chats">
          <Route
            index
            element={
              <ChatList
                chats={chats}
                chatSetter={onAddChat}
                chatRemover={onRemoveChat}
              />
            }
          />
          <Route
            path=":chatId"
            element={
              <ChatPage
                chats={chats}
                chatSetter={onAddChat}
                messages={messages}
                addMessage={addMessage}
                name={name}
                chatRemover={onRemoveChat}
              />
            }
          />
        </Route>
        <Route path="*" element={<h2>404 page</h2>}></Route>
      </Route>
    </Routes>
  );
};
