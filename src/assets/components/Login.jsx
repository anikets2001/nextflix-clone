import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Store/userSlice";
import { BG_IMAGE_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    // validate the form data
    const nameValue = name?.current?.value ?? "Aniket Singh";
    const emailValue = email?.current?.value;
    const passwordValue = password?.current?.value;

    const message = checkValidData(nameValue, emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    // signIn/signUp Logic
    if (!isSignInForm) {
      // signUp Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // signIn Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div
        className={`flex justify-center items-center h-screen bg-[url('${BG_IMAGE_URL}')] bg-cover bg-center bg-no-repeat`}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black py-12 px-16 flex flex-col bg-opacity-80"
        >
          <h1 className="font-bold text-2xl text-white mb-5 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              title="Full Name"
              type="text"
              placeholder="Enter you full name"
              className="mb-4 p-2 bg-gray-700 rounded-sm text-white"
            />
          )}
          <input
            ref={email}
            title="Email or mobile number"
            type="text"
            placeholder="Email or mobile number"
            className="mb-4 p-2 bg-gray-700 rounded-sm text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mb-4 p-2 bg-gray-700 rounded-sm text-white"
          />
          <p className="text-red-500 mb-2 text-sm">{errorMessage}</p>
          <button
            className="bg-red-700 text-white text-base font-medium mb-16 p-2 rounded-sm"
            onClick={handleButtonClick}
          >
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
