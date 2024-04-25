import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='pr-4 w-48'>
        <img alt="poster" src={TMDB_IMG_URL + posterPath} />
    </div>
  )
}

export default MovieCard