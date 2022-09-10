import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';

const nameError = 'Please type your message!';

export function AddMessage({ messageSetter, author }) {
  const [error, setError] = useState(false);
  const errorChange = (state) => {
    setError(state);
  };

  const handleChange = () => {
    setError(false);
  };

  const addMessageHandler = (e) => {
    e.preventDefault();
    const { message } = e.target.elements;
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
}
