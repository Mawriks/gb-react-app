import { TextField, Button } from '@material-ui/core';
import React, { FC } from 'react';
import { useState } from 'react';

const nameError = 'Fill the name field!';

interface ChangeNameProps {
  nameSetter: (name: string) => void;
}

export const ChangeName: FC<ChangeNameProps> = ({ nameSetter }) => {
  const [error, setError] = useState(false);
  const [nameVar, setNameVar] = useState('');

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
      nameSetter(nameVar);
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
