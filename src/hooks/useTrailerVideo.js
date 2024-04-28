import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getTrailer = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await res.json();
    const trailer = json.results.filter((video) => video.type === "Trailer");
    dispatch(addTrailerVideo(trailer[0]));
  };

  useEffect(() => {
    if (!trailerVideo) getTrailer();
  }, []);
};

export default useTrailerVideo;
