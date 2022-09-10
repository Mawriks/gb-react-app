import { FC } from 'react';
import { Greetings } from './components/Greetings';
import HeaderCSS from './Header.module.css';

interface HeaderProps {
  name: string;
}

export const Header: FC<HeaderProps> = ({ name }) => (
  <header className={HeaderCSS.header}>
    My first react App
    <Greetings name={name} />
  </header>
);
