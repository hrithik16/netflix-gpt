import React, { useRef, useState } from "react";
import Header from "./Header";
import { isEmailValid, isPasswordValid } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { BACKGROUND } from "../utils/constant";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstant";
import lockIcon from "../assets/lock-solid.svg"
import eyeIcon from "../assets/eye-solid.svg"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const selectedLanguage = useSelector((store) => store.config.lang);

  const email = useRef(null);
  const password1 = useRef(null);
  const password2 = useRef(null);

  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if (isEmailValid(email.current.value)) {
      if (isSignInForm) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password1.current.value
        )
          .then((userCredential) => {})
          .catch((error) => {
            if (error.code === "auth/wrong-password") {
              setErrMsg(lang[selectedLanguage].passwordErrorMsgsErrorMsgs[1]);
            } else if (error.code === "auth/user-not-found") {
              setErrMsg(lang[selectedLanguage].emailErrorMsgs[2]);
            }
          });
      } else {
        const r = isPasswordValid(
          password1.current.value,
          password2.current.value
        );
        if (r === -1) {
          createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password1.current.value
          )
            .then((userCredential) => {})
            .catch((error) => {
              if (error.code === "auth/email-already-in-use")
                setErrMsg(lang[selectedLanguage].emailErrorMsgs[1]);
            });
        } else {
          console.log(lang[selectedLanguage].passwordErrorMsgs[0]);
          setErrMsg(lang[selectedLanguage].passwordErrorMsgs[r]);
        }
      }
    } else {
      setErrMsg(lang[selectedLanguage].emailErrorMsgs[0]);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND} alt="background-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute my-36 mx-auto p-12 bg-black bg-opacity-80 left-0 right-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? lang[selectedLanguage].signIn : lang[selectedLanguage].signUp}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder={lang[selectedLanguage].emailAddress}
          className="p-2 my-4 w-full bg-gray-950 bg-opacity-80"
        />
        <div className="relative">
        <input
          ref={password1}
          type={
            showPassword ? "text" : "password"
        }
          placeholder={lang[selectedLanguage].password}
          className="p-2 my-4 w-full bg-gray-950 bg-opacity-80 pr-10"
        />
        <img src={showPassword?lockIcon:eyeIcon} alt="icon" onClick={toggleShowPassword} className="absolute inset-y-0 right-0 h-full mx-3 my-auto cursor-pointer0 w-4"/>
        </div>
        {!isSignInForm && (
          <input
            ref={password2}
            type="password"
            placeholder={lang[selectedLanguage].confirmPassword}
            className="p-2 my-4 w-full bg-gray-950 bg-opacity-80"
          />
        )}
        <p className="text-red-700 py-2">{errMsg}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSubmit}
        >
          {isSignInForm ? lang[selectedLanguage].signIn : lang[selectedLanguage].signUp}
        </button>
        <p className="py-4">
          {isSignInForm ? lang[selectedLanguage].newToNetflix: lang[selectedLanguage].alreadyUser}
          <span className="text-red-700 font-bold" onClick={toggleIsSignInForm}>
            {isSignInForm ? lang[selectedLanguage].signUp : lang[selectedLanguage].signIn}
          </span>{lang[selectedLanguage].now}
        </p>
      </form>
    </div>
  );
};

export default Login;
