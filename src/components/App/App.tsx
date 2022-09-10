import { useState, useEffect, FC } from 'react';
import { AddMessage } from './components/AddMessage';
import { ChangeMode } from './components/ChangeMode';
import { ChangeName } from './components/ChangeName';
import { Header } from './components/Header';
import { Time } from './components/Time';
import { MessagesList } from './components/MessagesList';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid, Container, ListItem, List } from '@mui/material';
import { Messages, Chats } from 'src/types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000',
    },
  },
});

const botAnswer = 'Hey, my name is Bot! I can type this message!';

export const App: FC = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <div
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
        {/* TODO: Переместить безобразие в отдельные компоненты */}
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
      </div>
    </ThemeProvider>
  );
};
