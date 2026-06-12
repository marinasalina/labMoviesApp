import React, { useEffect, useState } from "react";
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";

const UpcomingMoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      console.log("Upcoming movies:", movies);
      setMovies(movies);
    });
  }, []);

  return <PageTemplate title="Upcoming Movies" movies={movies} />;
};

export default UpcomingMoviesPage;
