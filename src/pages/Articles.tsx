import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { StoreState } from 'src/store';
import { fetchArticles } from 'src/store/articles/slice';

export const Articles: FC = () => {
  const loading = useSelector((state: StoreState) => state.articles.loading);
  const articles = useSelector((state: StoreState) => state.articles.articles);
  const error = useSelector((state: StoreState) => state.articles.error);

  const fetchDispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();

  const handleFetchArticles = () => {
    fetchDispatch(fetchArticles());
  };

  useEffect(() => {
    handleFetchArticles();
  }, []);

  return (
    <>
      <h2>Articles Page</h2>
      {loading && <div>Loading...</div>}
      <button onClick={() => handleFetchArticles()}>reload</button>
      <ul>
        {articles.map((item) => {
          return (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <p>{item.summary}</p>
            </li>
          );
        })}
      </ul>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
