import { TextField, Button } from '@material-ui/core';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessage } from 'src/store/messages/actions';
import { selectName } from 'src/store/profile/selectors';

const nameError = 'Please type your message!';

export const AddMessage: FC = () => {
  const author = useSelector(selectName);
  const { chatId } = useParams();
  const [error, setError] = useState(false);
  const [messageVar, setMessageVar] = useState('');
  const dispatch = useDispatch();

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
      dispatch(addMessage(chatId, { text: messageVar, author: author }));
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
