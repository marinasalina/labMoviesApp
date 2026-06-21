import React, { useEffect, useState } from "react";
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";

const UpcomingMoviesPage: React.FC = () => {
  // State for storing upcoming movies
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);

  // Fetch upcoming movies when the page loads
  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={() => <AddToMustWatchIcon />}
    />
  );
};

export default UpcomingMoviesPage;
