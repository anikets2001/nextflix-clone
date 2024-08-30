import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
        <form className="bg-black py-12 px-16 flex flex-col bg-opacity-80">
          <h1 className="font-bold text-2xl text-white mb-5 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              title="Full Name"
              type="text"
              placeholder="Enter you full name"
              className="mb-4 p-2 bg-gray-700 rounded-sm"
            />
          )}
          <input
            title="Email or mobile number"
            type="text"
            placeholder="Email or mobile number"
            className="mb-4 p-2 bg-gray-700 rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 bg-gray-700 rounded-sm"
          />
          <button className="bg-red-700 text-white text-base font-medium mb-16 p-2 rounded-sm">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-500 text-xs mb-2">
            {isSignInForm ? (
              <>
                New to Netflix?
                <button className="text-white" onClick={toggleSignInForm}>
                  Sign up now.
                </button>
              </>
            ) : (
              <>
                Already registered?{" "}
                <button className="text-white" onClick={toggleSignInForm}>
                  Sign in now.
                </button>
              </>
            )}
          </p>
          <p className="text-gray-500 text-xs text-wrap w-[250px]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
