import { CircularProgress } from '@mui/material';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'src/services/firebase';

export const SignIn: FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      setLoading(true);
      await logIn(login, password);
      navigate('/chats');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Sing In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Login:</label>
        <br />
        <input
          type="email"
          required
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
          pattern="[a-zA-Z0-9]{6,}"
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity(
              'Min length of password equal to 6'
            )
          }
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      {loading && <CircularProgress />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
