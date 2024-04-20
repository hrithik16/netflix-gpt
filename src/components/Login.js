import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-3/12 absolute my-36 mx-auto p-12 bg-black bg-opacity-80 left-0 right-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-gray-950 bg-opacity-80"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-950 bg-opacity-80"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-950 bg-opacity-80"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          New to Netflix?{" "}
          <span className="text-red-700 font-bold" onClick={toggleIsSignInForm}>
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>{" "}
          Now
        </p>
      </form>
    </div>
  );
};

export default Login;
