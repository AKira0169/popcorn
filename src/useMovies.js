import { useState, useEffect } from 'react';
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // callback?.();
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=55798958&s=${query}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        if (data.Response === 'False') {
          throw new Error('Movie not found');
        }
        setMovies(data.Search);
        setError('');
      } catch (error) {
        if (error.name !== 'AbortError') setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (!query || query.length < 3) {
      return;
    }

    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
