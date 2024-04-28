import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSearch: false,
  searchResultMoviesName: null,
  searchResultMoviesData: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearchView: (state, action) => {
      state.showSearch = !state.showSearch;
    },
    addSearchResults: (state, action) => {
      state.searchResultMoviesName = action.payload.movieName;
      state.searchResultMoviesData = action.payload.movieData;
    },
    removeSearch: (state, action) => initialState,
  },
});

export const { toggleSearchView, addSearchResults, removeSearch } =
  searchSlice.actions;

export default searchSlice.reducer;
