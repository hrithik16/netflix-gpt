import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
  const email = useSelector((store) => store.user);

  const getCurrentMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await res.json()
    console.log(json)
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    console.log("Called"); 
    getCurrentMovies()
  }, []);
}

export default useNowPlayingMovies;