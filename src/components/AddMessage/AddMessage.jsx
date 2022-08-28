export function AddMessage({ messageSetter, messageSend, author }) {
  const addMessageHandler = (e) => {
    e.preventDefault();
    messageSetter(e.target.message.value, author);
    e.target.message.value = '';
    messageSend();
  };

  return (
    <form onSubmit={addMessageHandler}>
      <h3>Hey, send your message!</h3>
      <input type="text" name="message" placeholder="Type your message" />
      <button>Send</button>
    </form>
  );
}
