import React, { useEffect, useState } from "react";
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";

//component for the upcoming movies page
const UpcomingMoviesPage: React.FC = () => {
  //state for the movies
  //movies is an array of BaseMovieProps, which is the type for the movie objects returned by the API
  //setMovies is a function that updates the movies state
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);
  //useEffect is a hook that runs a function when the component mounts or when the dependencies change
  useEffect(() => {
    //calls the getUpcomingMovies function from the API and updates the movies state with the returned movies
    getUpcomingMovies().then((movies) => {
      //logs the upcoming movies to the console for debugging purposes
      console.log("Upcoming movies:", movies);
      //saves the movies to the state, which will trigger a re-render of the component and display the movies on the page
      setMovies(movies);
    });
  }, []);

  return <PageTemplate title="Upcoming Movies" movies={movies} />;
};

export default UpcomingMoviesPage;
