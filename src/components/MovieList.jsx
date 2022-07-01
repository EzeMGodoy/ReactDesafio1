import React from "react";
import Movie from "../Movie/Movie";
import "./MovieList.css";

function MovieList(props) {
  return (
    <div className="movies-list">
      {props.movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} description={movie.description} />
      ))}
    </div>
  );
}

export default MovieList;
