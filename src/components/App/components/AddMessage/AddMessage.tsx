import { TextField, Button } from '@material-ui/core';
import { FC, useState } from 'react';

const nameError = 'Please type your message!';

interface AddMessageProps {
  messageSetter: (mes: string, auth: string) => void;
  author: string;
}

interface FormData {
  message: { value: string };
}

export const AddMessage: FC<AddMessageProps> = ({ messageSetter, author }) => {
  const [error, setError] = useState(false);

  const errorChange = (state: boolean) => {
    setError(state);
  };

  const handleChange = () => {
    setError(false);
  };

  const addMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { message } = e.target as typeof e.target & FormData;
    if (message.value) {
      messageSetter(message.value, author);
    } else {
      errorChange(true);
    }
    message.value = '';
  };

  return (
    <form data-testid="addmessage" onSubmit={addMessageHandler}>
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
        color="primary"
        name="message"
        variant="filled"
        placeholder="Type your message"
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" size="large" color="default">
        Send
      </Button>
    </form>
  );
};
