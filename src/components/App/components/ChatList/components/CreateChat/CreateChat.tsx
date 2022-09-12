import React, { FC, useState } from 'react';
import { Chat } from 'src/types';

interface CreateChatProps {
  onAddChat: (chat: Chat) => void;
}

export const CreateChat: FC<CreateChatProps> = ({ onAddChat }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      onAddChat({
        id: new Date().valueOf(),
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
