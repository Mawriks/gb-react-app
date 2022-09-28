import { FC } from 'react';
import { Message } from 'src/types';

interface MessageListProps {
  messageList: Message[];
}

export const MessagesList: FC<any> = ({ messageList }) => (
  <ul data-testid="messagelist">
    {messageList.map((message: any, index: any) => (
      <li key={index}>
        {message.author}: {message.text}
      </li>
    ))}
  </ul>
);
