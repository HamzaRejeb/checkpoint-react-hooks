import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import MovieList from "./components/MovieList/MovieList";
import { moviesData } from "./Data";
import AddMovie from "./components/AddMovie/AddMovie";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [searchRate, setSearchRate] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => setSearchValue(event.target.value);
  const handleSearchRate = (newRate) => setSearchRate(newRate);

  const addMovie = (newMovie) => setMovies([...movies, newMovie]);
  return (
    <div>
      <Search
        searchValue={searchValue}
        handleSearch={handleSearch}
        searchRate={searchRate}
        handleSearchRate={handleSearchRate}
      />
      <MovieList
        movieList={movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLowerCase().trim()) &&
            movie.rating >= searchRate
        )}
      />
      <AddMovie handleAdd={addMovie} />
    </div>
  );
};

export default App;
