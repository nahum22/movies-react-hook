import { useState, useEffect } from "react";
import useMovieFilterSort from "./useMovieFilterSort";

const useFetchMovies = (filter, sort) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = "d1643824a81176e587be5c7c3ea339b6"; // Replace with your TMDb API key
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=${sort}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

 
          setMovies( useMovieFilterSort(data, setMovies, filter));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [filter, sort]);

  return { movies, loading, error };
};

export default useFetchMovies;
