import { FC, useContext } from 'react';
import { Greetings } from './components/Greetings';
import HeaderCSS from './Header.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { ChangeMode } from './components/ChangeMode';
import { ThemeContext } from 'src/utils/ThemeContext';
import { useSelector } from 'react-redux';
import { selectName } from 'src/store/profile/selectors';
import { Wrapper, Title } from './styled';

const nav = [
  { name: 'Main', path: '/' },
  { name: 'Chats', path: 'chats' },
  { name: 'Profile', path: 'profile' },
];

export const Header: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const name = useSelector(selectName);
  return (
    <>
      <header className={HeaderCSS.header}>
        <ChangeMode mode={theme} modeSetter={toggleTheme} />
        <br />
        <Wrapper>
          <Title>My first react App</Title>
        </Wrapper>
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
};
