import { lang } from "../utils/languageConstant";
import useMovieSearch from "../hooks/useMovieSearch";

const SearchBar = () => {
  const { searchText, handleSearchClick, selectedLanguage } = useMovieSearch();

  return (
    <div className="pt-[5%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLanguage].searchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white col-span-3 "
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
