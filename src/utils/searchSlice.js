import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        showSearch: false,
        searchResultMoviesName: null,
        searchResultMoviesData: null
    },
    reducers: {
        toggleSearchView: (state, action) => {
            state.showSearch = !state.showSearch
        },
        addSearchResults: (state, action) => {
            state.searchResultMoviesName = action.payload.movieName
            state.searchResultMoviesData = action.payload.movieData
        }
    }
})

export const {toggleSearchView, addSearchResults} = searchSlice.actions

export default searchSlice.reducer