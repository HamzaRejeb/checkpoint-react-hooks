import React from "react";
import StarRating from "../StarRating/StarRating";
import "./MovieCard.css";

const MovieCard = ({ film }) => {
  return (
    <div className="movie-card">
      <img src={film.image} alt={film.name} />
      <h3>{film.name} </h3>
      <p>{film.date} </p>
      <StarRating rate={film.rating} />
    </div>
  );
};

export default MovieCard;
