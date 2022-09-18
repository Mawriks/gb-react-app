import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChat } from 'src/store/messages/actions';

export const CreateChat: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      dispatch(addChat(value));
      setValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Create</button>
    </form>
  );
};
