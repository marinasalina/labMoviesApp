import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  mustWatch: number[]; //new
  myReviews: { [key: number]: Review };
  addToFavourites: (movie: BaseMovieProps) => void;
  removeFromFavourites: (movie: BaseMovieProps) => void;
  addReview: (movie: BaseMovieProps, review: Review) => void;
  addToMustWatch: (movie: BaseMovieProps) => void; //new
}

const initialContextState: MovieContextInterface = {
  favourites: [],
  myReviews: {},
  mustWatch: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  addReview: () => {},
  addToMustWatch: () => {}, //new
};

export const MoviesContext =
  React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<number[]>([]);
  const [myReviews, setMyReviews] = useState<{ [key: number]: Review }>({});
  const [mustWatch, setMustWatch] = useState<number[]>([]);

  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(movie.id)) {
        return [...prevFavourites, movie.id];
      }
      return prevFavourites;
    });
  }, []);

  const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((mId) => mId !== movie.id),
    );
  }, []);

  const addReview = useCallback((movie: BaseMovieProps, review: Review) => {
    setMyReviews((prevReviews) => ({
      ...prevReviews,
      [movie.id]: review,
    }));
  }, []);

  const addToMustWatch = useCallback((movie: BaseMovieProps) => {
    setMustWatch((prevMustWatch) => {
      if (!prevMustWatch.includes(movie.id)) {
        const updated = [...prevMustWatch, movie.id];
        console.log("Must Watch:", updated);
        return updated;
      }
      console.log("Must Watch:", prevMustWatch);
      return prevMustWatch;
    });
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        mustWatch,
        myReviews,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToMustWatch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
