import { ref, set } from 'firebase/database';
import React, { FC, useState } from 'react';
import { db } from 'src/services/firebase';

export const CreateChat: FC = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      set(ref(db, `chats/${value}`), {
        id: Date.now(),
        name: value,
      });
      set(ref(db, `messages/${value}`), {
        name: value,
      });
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
