const useMovieFilterSort = (data, setMovies, filter) => {
  const filteredMovies =
    filter === "All"
      ? data.results
      : data.results.filter((movie) =>
          movie.genre_ids.includes(parseInt(filter))
        );
  return filteredMovies;
};

export default useMovieFilterSort;
