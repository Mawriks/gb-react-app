import { TextField, Button } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeProfileName } from 'src/store/profile/actions';

const nameError = 'Fill the name field!';

export const ChangeName: FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<boolean>(false);
  const [nameVar, setNameVar] = useState<string>('');

  const errorChange = (state: boolean) => {
    setError(state);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameVar(e.currentTarget.value);
    setError(false);
  };

  const changeNameHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameVar) {
      dispatch(changeProfileName(nameVar));
    } else {
      errorChange(true);
    }
    setNameVar('');
  };

  return (
    <form data-testid="form" onSubmit={changeNameHandler}>
      <h3>Whant to change your name?</h3>
      <TextField
        InputLabelProps={{ shrink: true }}
        size="small"
        error={error}
        helperText={error ? nameError : false}
        id="filled-basic"
        label="Name"
        value={nameVar}
        color="primary"
        name="name"
        variant="filled"
        placeholder="Your new name"
        onChange={handleChange}
      />
      <Button
        data-testid="mui-btn"
        type="submit"
        variant="contained"
        size="large"
        color="default"
      >
        Change
      </Button>
    </form>
  );
};
