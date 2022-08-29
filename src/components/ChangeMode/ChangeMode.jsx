export const ChangeMode = ({ mode, modeSetter }) => (
  <button onClick={modeSetter}>{mode ? 'Light Mode' : 'Dark Mode'}</button>
);
