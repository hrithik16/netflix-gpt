import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR1 } from "../utils/constant";
import { toggleSearchView } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between bg-transparent">
      <img className="w-44" src={LOGO} alt="logo-img" />
      <div className="flex p-2">
        {user && (
          <>
            <button
              className="py-2 px-4 mx-4 my-2 text-white rounded-lg"
              onClick={handleSearch}
            >
              🔎
            </button>
            <img className="w-12 h-12" alt="usericon" src={USER_AVATAR1} />
            <button onClick={handleSignOut} className="font-bold text-white">
              (Sign Out)
            </button>
          </>
        )}
        <select
          className="p-2 m-2 bg-gray-900 text-white"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifer} value={lang.identifer}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
