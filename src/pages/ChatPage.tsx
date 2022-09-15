import { FC, useEffect } from 'react';
import { AddMessage } from 'src/components/App/components/AddMessage';
import { ChatList } from 'src/components/App/components/ChatList';
import { MessagesList } from 'src/components/App/components/MessagesList';
import { Chat, Chats, Message, Messages } from 'src/types';
import { useParams, Navigate } from 'react-router-dom';

/* 
const botAnswer = 'Hey, my name is Bot! I can type this message!';
const [name, setName] = useState<string>('Max');
const [mode, setMode] = useState<boolean>(false);
const [messages, setMessages] = useState<Messages>([]);
const [chats] = useState<Chats>([
  { name: 'EL', id: 1 },
  { name: 'EL2', id: 2 },
  { name: 'EL2', id: 3 },
]);

const changeName = (name: string) => {
  setName(name);
};

const changeMode = () => {
  setMode((prev) => !prev);
};

const addMessage = (message: string, name: string) => {
  setMessages((messagesPrev) => [
    ...messagesPrev,
    { author: name, text: message },
  ]);
};

useEffect(() => {
  let id: NodeJS.Timeout;
  if (messages.length > 0 && messages[messages.length - 1].author === name) {
    id = setTimeout(() => {
      addMessage(botAnswer, 'Bot');
    }, 1500);
  }
  return () => clearTimeout(id);
}, [messages, name]);
 */
{
  /* <div
        data-testid="app"
        className={`App ${mode ? 'app-dark' : 'app-light'}`}
      >
        <ChangeMode mode={mode} modeSetter={changeMode} />
        <Time />
        <Header name={name} />
        <ChangeName nameSetter={changeName} />
        <br />
        <hr />
        <br />
        <Container maxWidth="md">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <List>
                {chats.map((item) => {
                  return (
                    <ListItem key={item.id}>
                      {item.id + ':'} {item.name}
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={6}>
              <AddMessage messageSetter={addMessage} author={name} />
              <MessagesList messageList={messages} />
            </Grid>
          </Grid>
        </Container>
      </div> */
}
interface ChatPageProps {
  messages: Messages;
  chats: Chats;
  chatSetter: (chat: Chat) => void;
  addMessage: (chatId: string, message: Message) => void;
  name: string;
  chatRemover: (chatId: string | number) => void;
}

const botAnswer = 'Hey, my name is Bot! I can type this message!';

export const ChatPage: FC<ChatPageProps> = ({
  messages,
  chats,
  chatSetter,
  addMessage,
  chatRemover,
  name,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === name
    ) {
      id = setTimeout(() => {
        addMessage(chatId, { text: botAnswer, author: 'Bot' });
      }, 1500);
    }
    return () => clearTimeout(id);
  }, [messages, addMessage, chatId, name]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }
  return (
    <>
      <ChatList
        chats={chats}
        chatSetter={chatSetter}
        chatRemover={chatRemover}
      />
      <MessagesList messageList={chatId ? messages[chatId] : []} />
      <AddMessage
        messageSetter={addMessage}
        chatId={chatId ? chatId : ''}
        author={name}
      />
    </>
  );
};
