import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch()

  const getCurrentMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await res.json()

    dispatch(addPopularMovies(json.results))
  }

  useEffect(() => {
    getCurrentMovies()
  }, []);
}

export default usePopularMovies;