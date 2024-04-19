import { useState, useEffect } from 'react';
import { fetchArticles } from '../api/articleRoutes';

function useGetArticle() {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetchArticles();
        const data = await response;
        setArticles(data.data);
      } catch (error) {
        setError(error);
      }
    };

    getArticles();
  }, []);

  return { articles, error };
}

export default useGetArticle;
