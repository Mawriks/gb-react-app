import { TextField, Button } from '@material-ui/core';
import React, { FC } from 'react';
import { useState } from 'react';

interface ChangeNameProps{
  nameSetter: any
}

const nameError:string = 'Fill the name field!';

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
    console.dir(e);
    const { name } = e.target.elements;
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
      <Button type="submit" variant="contained" size="large" color="default">
        Change
      </Button>
    </form>
  );
}
