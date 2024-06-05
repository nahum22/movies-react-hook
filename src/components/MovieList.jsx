import { useState } from "react";
import "./MoiveList.css";
import Filters from "./Filters";
import MovieItems from "./MovieItems";
import useFetchMovies from "./useFetchMovies"; // Adjust the import path as necessary
import useFavorites from "./useFavorites";

const MovieList = () => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("popularity.desc");
  const [favorites, setFavorites] = useState([]);

  const { movies, loading, error } = useFetchMovies(filter, sort);

  // const triggeerFavourites = () => useFavorites(movieId, setFavorites);

  const toggleFavorite = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(movieId)
        ? prevFavorites.filter((id) => id !== movieId)
        : [...prevFavorites, movieId]
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">Movie List</h1>
      <Filters
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <MovieItems
        movies={movies}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default MovieList;
