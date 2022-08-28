import { Greetings } from '../Greetings/Greetings';
import HeaderCSS from './Header.module.css';

export function Header({ name }) {
  return (
    <header className={HeaderCSS.header}>
      My first react App
      <Greetings name={name} />
    </header>
  );
}
