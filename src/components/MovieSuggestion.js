import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const MovieSuggestion = () => {
const {searchResultMoviesName, searchResultMoviesData} = useSelector((store)=> store.search)
if(!searchResultMoviesName) return null

  return (
    <div className='p-4 m-2 bg-black text-white bg-opacity-90'>
        {searchResultMoviesName.map((movieName, index) => (
            <MovieList key={movieName} title={movieName} movies={searchResultMoviesData[index]}/>
        ))}
    </div>
  )
}

export default MovieSuggestion