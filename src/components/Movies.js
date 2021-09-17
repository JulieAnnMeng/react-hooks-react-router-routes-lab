import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map(movie => {
    const genreList = movie.genres.map(genre => {
      return (
        <li key={genre}>{genre}</li>
      )
    });
    return(
      <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres: </p>
        <ul>
          {genreList}
        </ul>
      </div>
    );
  })


  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  )
}

export default Movies;
