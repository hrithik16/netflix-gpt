import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addSearchResults } from "../utils/searchSlice";
import openai from "../utils/openai";

const useMovieSearch = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=true&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await res.json();
    return json.results;
  };

  const handleSearchClick = async () => {
    const query =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      " only give me name of 5 movies, comma seprated like the example result ahead. Example: Gadar, Kung Fu Panda 4, koi mil gaya, krish, main hoon na";

    // This part is commented out since we're not using OpenAI here
    const results = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
    });

    // For the sake of example, I've mocked the response
    // const results = {
    //   id: "chatcmpl-9Is67ZwLhBbv7bKTPE43boK5DXvDT",
    //   object: "chat.completion",
    //   created: 1714284883,
    //   model: "gpt-3.5-turbo-0125",
    //   choices: [
    //     {
    //       index: 0,
    //       message: {
    //         role: "assistant",
    //         content:
    //           "Zindagi Na Milegi Dobara, 3 Idiots, Lagaan, Sita Ramam, Rab Ne Bana Di Jodi",
    //       },
    //       logprobs: null,
    //       finish_reason: "stop",
    //     },
    //   ],
    //   usage: {
    //     prompt_tokens: 68,
    //     completion_tokens: 20,
    //     total_tokens: 88,
    //   },
    //   system_fingerprint: "fp_3b956da36b",
    // };

    const movieName = results.choices[0].message.content.split(", ");
    const result = movieName.map((movie) => searchMovieTMDB(movie));
    const movieData = await Promise.all(result);
    dispatch(addSearchResults({ movieName, movieData }));
  };

  return { searchText, handleSearchClick, selectedLanguage };
};

export default useMovieSearch;
