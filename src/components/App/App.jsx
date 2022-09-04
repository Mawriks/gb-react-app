import { useState, useEffect } from 'react';
import { AddMessage } from './components/AddMessage';
import { ChangeMode } from './components/ChangeMode';
import { ChangeName } from './components/ChangeName';
import { Header } from './components/Header';
import { Time } from './components/Time';
import { MessagesList } from './components/MessagesList';
import './App.css';

const botAnswer = 'Hey, my name is Bot! I can type this message!';

export function App() {
  const [name, setName] = useState('Max');
  const [mode, setMode] = useState(true);
  const [messages, setMessages] = useState([]);

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
    <div data-testid="app" className={`App ${mode ? 'app-dark' : 'app-light'}`}>
      <ChangeMode mode={mode} modeSetter={changeMode} />
      <Time />
      <Header name={name} />
      <ChangeName nameSetter={changeName} />
      <br />
      <hr />
      <br />
      <AddMessage messageSetter={addMessage} author={name} />
      <MessagesList messageList={messages} />
    </div>
  );
}
