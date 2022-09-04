export function AddMessage({ messageSetter, author }) {
  const addMessageHandler = (e) => {
    e.preventDefault();
    const { message } = e.target.elements;
    messageSetter(message.value, author);
    message.value = '';
  };

  return (
    <form data-testid="addmessage" onSubmit={addMessageHandler}>
      <h3>Hey, send your message!</h3>
      <input type="text" name="message" placeholder="Type your message" />
      <button>Send</button>
    </form>
  );
}
