import { FC } from 'react';
import { Greetings } from './components/Greetings';
import HeaderCSS from './Header.module.css';
import { NavLink, Outlet } from 'react-router-dom';

interface HeaderProps {
  name: string;
}

const nav = [
  { name: 'Main', path: '/' },
  { name: 'Chats', path: 'chats' },
  { name: 'Profile', path: 'profile' },
];

export const Header: FC<HeaderProps> = ({ name }) => (
  <>
    <header className={HeaderCSS.header}>
      My first react App
      <Greetings name={name} />
      <ul>
        {nav.map((item) => (
          <li key={item.name}>
            <NavLink
              className={({ isActive }) =>
                isActive ? HeaderCSS.activeLink : ''
              }
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
