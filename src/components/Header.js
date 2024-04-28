import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR1 } from "../utils/constant";
import { toggleSearchView } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configSlice";
import searchIcon from "../assets/magnifying-glass.svg";
import homeIcon from '../assets/house-solid.svg'
import signOutIcon from "../assets/arrow-right-from-bracket-solid.svg";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.search.showSearch);

  useEffect(() => {
    // onAuthStateChanged returns a unsubscirbe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component is unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSearch = () => {
    dispatch(toggleSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between bg-transparent">
      <img className="w-44" src={LOGO} alt="logo-img" />
      <div className="flex p-2">
        {user && (
          <>
            <button className="mx-6 my-2 w-6" onClick={handleSearch}>
              <img src={showSearch?homeIcon:searchIcon} alt="search-icon" />
            </button>
            <button onClick={handleSignOut} className="mx-6 my-2 w-6">
              <img src={signOutIcon} alt="signout-icon" />
            </button>
          </>
        )}
        <select
          className="p-2 mr-2 bg-transparent text-white"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifer} value={lang.identifer} className="bg-black">
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
