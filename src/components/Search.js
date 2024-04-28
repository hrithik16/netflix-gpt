import React from "react";
import SearchBar from "./SearchBar";
import { BACKGROUND } from "../utils/constant";
import MovieSuggestion from "./MovieSuggestion";

const Search = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND} alt="background-img" />
      </div>
      <SearchBar />
      <MovieSuggestion />
    </div>
  );
};

export default Search;
