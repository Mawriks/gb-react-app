import { TextField, Button } from '@material-ui/core';
import { FC, useState } from 'react';
import { Message } from 'src/types';

const nameError = 'Please type your message!';

interface AddMessageProps {
  chatId: string;
  messageSetter: (chatId: string, mes: Message) => void;
  author: string;
}

export const AddMessage: FC<AddMessageProps> = ({
  chatId,
  messageSetter,
  author,
}) => {
  const [error, setError] = useState(false);
  const [messageVar, setMessageVar] = useState('');

  const errorChange = (state: boolean) => {
    setError(state);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageVar(e.currentTarget.value);
    setError(false);
  };

  const addMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (messageVar && chatId) {
      messageSetter(chatId, { text: messageVar, author: author });
    } else {
      errorChange(true);
    }
    setMessageVar('');
  };

  return (
    <form onSubmit={addMessageHandler}>
      <h3>Hey, send your message!</h3>
      <TextField
        autoFocus
        InputLabelProps={{ shrink: true }}
        size="small"
        inputRef={(input) => input?.focus()}
        error={error}
        helperText={error ? nameError : false}
        id="filled-basic"
        label="Message"
        value={messageVar}
        color="primary"
        name="message"
        variant="filled"
        placeholder="Type your message"
        onChange={handleChange}
      />
      <Button
        data-testid="addmessage"
        type="submit"
        variant="contained"
        size="large"
        color="default"
      >
        Send
      </Button>
    </form>
  );
};
