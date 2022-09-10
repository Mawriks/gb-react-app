import { useState, useEffect } from 'react';
import { AddMessage } from './components/AddMessage';
import { ChangeMode } from './components/ChangeMode';
import { ChangeName } from './components/ChangeName';
import { Header } from './components/Header';
import { Time } from './components/Time';
import { MessagesList } from './components/MessagesList';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid, Container, ListItem, List } from '@mui/material';

const theme = createTheme({
  palette: {
    dark: {
      main: '#fff',
      contrastText: '#000',
    },
  },
});

const botAnswer = 'Hey, my name is Bot! I can type this message!';

export function App() {
  const [name, setName] = useState('Max');
  const [mode, setMode] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chats] = useState([
    { name: 'EL', id: Date.now() },
    { name: 'EL2', id: Date.now() + 10 },
    { name: 'EL2', id: Date.now() + 20 },
  ]);

  const changeName = (name) => {
    setName(name);
  };

  const changeMode = () => {
    setMode((prev) => !prev);
  };

  const addMessage = (message, name) => {
    setMessages((messagesPrev) => [
      ...messagesPrev,
      { author: name, text: message },
    ]);
  };

  useEffect(() => {
    let id;
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
}
