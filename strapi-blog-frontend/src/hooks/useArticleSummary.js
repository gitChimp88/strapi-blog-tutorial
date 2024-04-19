import { useState } from 'react';
import { fetchArticleSummary } from '../api/articleRoutes';

function useArticleSummary() {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSummary = async (article) => {
    setIsLoading(true);
    try {
      const response = await fetchArticleSummary(article);
      setSummary(response.data.message);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { summary, error, isLoading, fetchSummary };
}

export default useArticleSummary;
