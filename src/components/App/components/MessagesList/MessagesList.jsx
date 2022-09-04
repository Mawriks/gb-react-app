export const MessagesList = ({ messageList }) => (
  <ul data-testid="messagelist">
    {messageList.map((message, index) => (
      <li key={index}>
        {message.author}: {message.text}
      </li>
    ))}
  </ul>
);
