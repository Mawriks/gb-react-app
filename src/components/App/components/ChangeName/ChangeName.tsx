import { TextField, Button } from '@material-ui/core';
import React, { FC } from 'react';
import { useState } from 'react';

const nameError = 'Fill the name field!';

interface ChangeNameProps {
  nameSetter: (name: string) => void;
}

interface FormData {
  name: { value: string };
}

export const ChangeName: FC<ChangeNameProps> = ({ nameSetter }) => {
  const [error, setError] = useState(false);

  const errorChange = (state: boolean) => {
    setError(state);
  };

  const handleChange = () => {
    setError(false);
  };

  const changeNameHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name } = e.target as typeof e.target & FormData;
    if (name.value) {
      nameSetter(name.value);
    } else {
      errorChange(true);
    }
    name.value = '';
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
