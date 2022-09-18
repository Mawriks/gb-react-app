import { FC, useEffect } from 'react';
import { AddMessage } from 'src/components/App/components/AddMessage';
import { ChatList } from 'src/components/App/components/ChatList';
import { MessagesList } from 'src/components/App/components/MessagesList';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';
import { selectName } from 'src/store/profile/selectors';
import { addMessage } from 'src/store/messages/actions';

const botAnswer = 'Hey, my name is Bot! I can type this message!';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === name
    ) {
      id = setTimeout(() => {
        dispatch(addMessage(chatId, { text: botAnswer, author: 'Bot' }));
      }, 1500);
    }
    return () => clearTimeout(id);
  }, [messages, chatId, name, dispatch]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }
  return (
    <>
      <ChatList />
      <MessagesList messageList={chatId ? messages[chatId] : []} />
      <AddMessage />
    </>
  );
};
