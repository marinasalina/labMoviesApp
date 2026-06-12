import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MovieDetailsProps } from "../../types/interfaces";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const MovieHeader: React.FC<MovieDetailsProps> = (movie) => {
  // Read favourites
  const raw = JSON.parse(localStorage.getItem("favourites") || "[]");

  // Support both: [1,2,3] and [{id:1}, {id:2}]
  const favouriteIds = raw.map((m: any) => (typeof m === "number" ? m : m.id));

  const isFavourite = favouriteIds.includes(movie.id);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {/* If the movie is in favourites, show the favourite icon */}
        {isFavourite && (
          <Avatar
            sx={{
              backgroundColor: "red",
              display: "inline-flex",
              marginRight: "100px",
            }}
          >
            <FavoriteIcon />
          </Avatar>
        )}{" "}
        {movie.title}
        <a href={movie.homepage}>
          <HomeIcon color="primary" fontSize="small" />
        </a>
        <br />
        <span>"{movie.tagline}"</span>
      </Typography>

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
