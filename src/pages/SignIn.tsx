import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/store/profile/slice';

export const SignIn: FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    if (login === 'gb' && password === 'gb') {
      dispatch(auth(true));
      navigate('/chats');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h2>Sing In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Login:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          name="text"
          id="text"
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>Uncorrect login or password</p>}
    </>
  );
};
