import { FC } from "react";

interface Message{
  author: string;
  text: string;
}

interface MessageListProps {
  messageList: Message[]
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
