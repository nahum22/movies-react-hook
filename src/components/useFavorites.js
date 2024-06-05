const useFavorites = (movieId, setFavorites) => {
  setFavorites((prevFavorites) =>
    prevFavorites.includes(movieId)
      ? prevFavorites.filter((id) => id !== movieId)
      : [...prevFavorites, movieId]
  );
};

export default useFavorites;
