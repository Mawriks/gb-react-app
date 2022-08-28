export const MessagesList = ({ messageList }) => (
  <ul>
    {messageList.map((message, index) => (
      <li key={index}>
        {message.author}: {message.text}
      </li>
    ))}
  </ul>
);
