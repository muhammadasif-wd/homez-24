import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import login_bg from "../../../Assets/images/login_bg.jpg";
import logo from "../../../Assets/images/logo.png";

const Login = () => {
  // login state
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const handelLogin = (e) => {
    e.preventDefault();

    const emailRegEx = /^\S+@\S+\.\S+$/;
    if (!emailRegEx.test(loginInput.email)) {
      toast.error("Email address is not valid");
      return;
    }
    if (loginInput.password.length <= 5) {
      toast.error("Password must be included 6 charecter");
      return;
    }

    toast.success("Your request has been submitted.");

    setLoginInput({ email: "", password: "" });
  };
  return (
    <div className="relative mt-5">
      <img
        className="absolute inset-0 sm:object-[25%] object-cover sm:opacity-100 z-[-1]"
        src={login_bg}
        alt="round bg img"
      />
      <div className="py-32">
        <div className="md:max-w-md w-11/12 bg-white rounded-lg md:px-8 px-4 py-10 mx-auto shadow-xl ">
          <img className="w-20 mx-auto" src={logo} alt="" />
          <h4 className="my-5 text-lg font-semibold">Login</h4>
          <form onSubmit={handelLogin}>
            <label className="font-medium text-dark">Email</label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Your email"
              autoComplete="off"
              type="email"
              required
              onChange={(e) =>
                setLoginInput({ ...loginInput, email: e.target.value })
              }
              value={loginInput.email}
            />
            <label className="font-medium text-dark">Password</label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type your password"
              autoComplete="off"
              type="password"
              required
              onChange={(e) =>
                setLoginInput({ ...loginInput, password: e.target.value })
              }
              value={loginInput.password}
            />
            <p className="text-sm hover:underline my-2 text-right text-dark cursor-pointer">
              Forgot password?
            </p>
            <input
              className="bg-primary w-full py-2.5 rounded-md my-5 cursor-pointer hover:bg-primary/80 text-white"
              type="submit"
              value="Login"
            />
          </form>
          <button className="w-full border border-gray-400 py-2.5 rounded-md flex justify-center items-center gap-2 font-semibold text-dark">
            <Icon className="text-lg" icon="logos:google-icon" /> SignIn With
            Google
          </button>
          <p className="text-sm text-center mt-5">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary font-medium hover:underline cursor-pointer"
            >
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
