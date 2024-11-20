import Header from "../components/Header";
import SignInValidation from "../utils/SignInValidation";
import SignUpValidation from "../utils/SignUpValidation";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passInput = useRef(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setErrMsg("");
  };

  const handleButtonClk = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isSignIn) {
      const message = SignInValidation(
        users,
        emailInput.current.value,
        passInput.current.value
      );

      if (message == "acceptLogin") {
        navigate("/home");
      }
      setErrMsg(message);
    } else {
      const message = SignUpValidation(
        users,
        nameInput.current.value,
        emailInput.current.value,
        passInput.current.value
      );

      if (message) {
        setErrMsg(message);
        return;
      }
      setIsSignIn(!isSignIn);
      setErrMsg(null);
    }

    emailInput.current.value = "";
    passInput.current.value = "";
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          className="h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
          alt="bgImage"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 lg:w-3/12 sm:w-1/2 my-52 mx-auto right-0 left-0 bg-opacity-75
        bg-black text-white rounded-lg"
      >
        <h1 className="m-4 mb-8 font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={nameInput}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 mx-4 w-11/12 bg-transparent outline outline-slate-300 text-slate-300 rounded"
          />
        )}
        <input
          ref={emailInput}
          type="text"
          placeholder="Email or Mobile Number"
          className="p-4 my-2 mx-4 w-11/12 bg-transparent outline outline-slate-300 text-slate-300 rounded"
        />
        <input
          ref={passInput}
          type="password"
          placeholder="Password"
          className="p-4 my-2 mx-4 w-11/12 bg-transparent outline outline-slate-300 text-slate-300 rounded"
        />
        <p className="text-red-600 px-4 py-2">{errMsg}</p>
        <button
          onClick={handleButtonClk}
          className="py-3 my-2 mx-4 w-11/12 bg-red-600 rounded shadow-lg hover:bg-red-700"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div>
          <p className="text-slate-300 p-3 m-4">
            {isSignIn ? "New to Netflix?" : "Already Registered?"}{" "}
            <a
              onClick={toggleForm}
              className="text-white font-bold hover:underline cursor-pointer"
            >
              {isSignIn ? "Sign Up Now" : "Sign In Now"}
            </a>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
