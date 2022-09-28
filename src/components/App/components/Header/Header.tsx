import { FC, useContext } from 'react';
import { Greetings } from './components/Greetings';
import HeaderCSS from './Header.module.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ChangeMode } from './components/ChangeMode';
import { ThemeContext } from 'src/utils/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { selectName } from 'src/store/profile/selectors';
import { Wrapper, Title } from './styled';
import { StoreState } from 'src/store';
import { auth } from 'src/store/profile/slice';
import { logOut } from 'src/services/firebase';

const nav = [
  { name: 'Main', path: '/' },
  { name: 'Chats', path: 'chats' },
  { name: 'Profile', path: 'profile' },
  { name: 'Articles', path: 'articles' },
];

export const Header: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const name = useSelector(selectName);
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
  };
  const handleLogin = () => {
    navigate('/signin');
  };

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
        {isAuth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button onClick={handleLogin}>Login</button>
            <br />
            <button onClick={() => navigate('/signup')}>Sign Up</button>
          </>
        )}
        <Outlet />
      </main>
    </>
  );
};
