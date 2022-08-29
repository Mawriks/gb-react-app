import { Greetings } from '../Greetings/Greetings';
import HeaderCSS from './Header.module.css';

export const Header = ({ name }) => (
  <header className={HeaderCSS.header}>
    My first react App
    <Greetings name={name} />
  </header>
);
