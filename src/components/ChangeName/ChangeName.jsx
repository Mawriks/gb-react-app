const nameError = 'Fill the name field!';

export function ChangeName({ nameSetter }) {
  const changeNameHandler = (e) => {
    e.preventDefault();
    if (e.target.name.value) {
      nameSetter(e.target.name.value);
      if (e.target.lastChild.classList.contains('message')) {
        e.target.lastChild.remove();
      }
    } else {
      e.target.name.style.borderColor = 'red';
      if (!e.target.lastChild.classList.contains('message')) {
        e.target.insertAdjacentHTML(
          'beforeend',
          `<p class="message">${nameError}</p>`
        );
      }
    }
    e.target.name.value = '';
  };

  return (
    <form onSubmit={changeNameHandler}>
      <h3>Whant to change your name?</h3>
      <input type="text" name="name" placeholder="Your new name" />
      <button>Change</button>
    </form>
  );
}
