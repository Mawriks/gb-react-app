import { FC, useEffect, useState } from 'react';
import { api } from 'src/constants';

interface Article {
  id: string;
  title: string;
  summary: string;
}

export const Articles: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    setError('');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const res = await fetch(`${api}/v3/articles`);
      const data: Article[] = await res.json();
      setArticles(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('ERROR');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Articles Page</h2>
      {loading && <div>Loading...</div>}
      <button onClick={fetchArticles}>reload</button>
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
