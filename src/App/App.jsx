import { useState, useEffect } from 'react';
import { AddMessage } from '../components/AddMessage/AddMessage';
import { ChangeMode } from '../components/ChangeMode/ChangeMode';
import { ChangeName } from '../components/ChangeName/ChangeName';
import { Header } from '../components/Header/Header';
import { MessagesList } from '../components/MessagesList/MessagesList';
import './App.css';

const botAnswer = 'Hey, my name is Bot! I can type this message!';

export function App() {
  const [name, setName] = useState('Max');
  const [mode, setMode] = useState(true);
  const [messages, setMessages] = useState([]);
  const [sended, setSended] = useState(false);

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

  const messageSended = () => {
    setSended((prev) => !prev);
  };

  useEffect(() => {
    let id;
    if (sended) {
      id = setTimeout(() => {
        addMessage(botAnswer, 'Bot');
        messageSended();
      }, 1500);
    }

    return () => clearTimeout(id);
  }, [sended]);

  return (
    <div className={`App ${mode ? 'app-dark' : 'app-light'}`}>
      <ChangeMode mode={mode} modeSetter={changeMode} />
      <Header name={name} />
      <ChangeName nameSetter={changeName} />
      <br />
      <hr />
      <br />
      <AddMessage
        messageSetter={addMessage}
        messageSend={messageSended}
        author={name}
      />
      <MessagesList messageList={messages} />
    </div>
  );
}
