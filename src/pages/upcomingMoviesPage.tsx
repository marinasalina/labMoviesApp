import React from "react";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";
//import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { BaseMovieProps } from "../types/interfaces";

import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch"; //new
const UpcomingMoviesPage: React.FC = () => {
  // Fetch upcoming movies using React Query
  const {
    data: movies,
    error,
    isLoading,
    isError,
  } = useQuery<BaseMovieProps[], Error>("upcoming", getUpcomingMovies);
  // Display a loading spinner while data is being fetched
  if (isLoading) return <Spinner />;

  // Display an error message if the request fails
  if (isError) return <h1>{error.message}</h1>;
  // Render the list of upcoming movies and provide
  // the Add to Favourites action for each movie card
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies || []}
      action={() => <AddToMustWatchIcon />}
    />
  );
};

export default UpcomingMoviesPage;
