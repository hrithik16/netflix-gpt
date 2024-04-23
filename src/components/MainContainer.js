import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies )
    if (!movies) return 

    const mainMovie = movies[0]
    console.log(mainMovie)
  return (
    <div>MainContainer</div>
  )
}

export default MainContainer