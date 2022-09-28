import { FC } from 'react';
import { AddMessageFunc } from 'src/components/App/components/AddMessage';
import { ChatList } from 'src/components/App/components/ChatList';
import { MessagesList } from 'src/components/App/components/MessagesList';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';

export const ChatPage: FC<any> = ({ messages, chats }) => {
  const { chatId } = useParams();
  // const messages = useSelector(selectMessages);

  const preparedMessages = [
    ...Object.values((chatId && messages[chatId].messages) || {}),
  ];

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }
  return (
    <>
      <ChatList chats={chats} />
      <MessagesList messageList={preparedMessages} />
      <AddMessageFunc />
    </>
  );
};
