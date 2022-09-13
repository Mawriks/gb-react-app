import { FC } from 'react';
import { Message } from 'src/types';

interface MessageListProps {
  messageList: Message[];
}

export const MessagesList: FC<MessageListProps> = ({ messageList }) => (
  <ul data-testid="messagelist">
    {messageList.map((message, index) => (
      <li key={index}>
        {message.author}: {message.text}
      </li>
    ))}
  </ul>
);
