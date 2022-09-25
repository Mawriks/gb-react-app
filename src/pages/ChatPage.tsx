import { FC } from 'react';
import { AddMessageFunc } from 'src/components/App/components/AddMessage';
import { ChatList } from 'src/components/App/components/ChatList';
import { MessagesList } from 'src/components/App/components/MessagesList';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }
  return (
    <>
      <ChatList />
      <MessagesList messageList={chatId ? messages[chatId] : []} />
      <AddMessageFunc />
    </>
  );
};
