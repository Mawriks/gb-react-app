import ChangeModeCSS from './ChangeMode.module.css';

export const ChangeMode = ({ mode, modeSetter }) => (
  <button data-testid="btn" className={ChangeModeCSS.btn} onClick={modeSetter}>
    {mode ? 'Light Mode' : 'Dark Mode'}
  </button>
);
