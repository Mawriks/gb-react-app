import { FC } from 'react';
import { Messages } from 'src/types';

interface MessageListProps {
  messageList: Messages;
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
