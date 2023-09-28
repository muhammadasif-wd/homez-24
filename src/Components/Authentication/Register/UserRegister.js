import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const UserRegister = () => {
  // user state
  const [userRegisterInput, setUserRegisterInput] = useState({
    email: "",
    firstName: "",
    lastName: "",
    Phone: 0,
    password: "",
    confirmPassword: "",
  });

  //   handel user Register fun
  const handelRegister = (e) => {
    e.preventDefault();
    console.log("nppppp");
    const emailRegEx = /^\S+@\S+\.\S+$/;
    const phoneRegEx = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
    if (!emailRegEx.test(userRegisterInput.email)) {
      toast.error("Email address is not valid");
      return;
    }
    if (!phoneRegEx.test(userRegisterInput.phone)) {
      toast.error("Phone number is not valid");
      return;
    }
    if (userRegisterInput.password.length <= 5) {
      toast.error("Password must be included 6 character");
      return;
    }
    if (userRegisterInput.password == userRegisterInput.confirmPassword) {
      toast.error("Please type same password");
      return;
    }

    // received user data
    const { phone, firstName, lastName, password, confirmPassword, email } =
      userRegisterInput;
    const userRegisterData = {
      phone,
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      role: "user",
    };
    console.log(userRegisterData);

    toast.success("Your request has been submitted.");

    setUserRegisterInput({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
    });
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-10">User Register</h2>
      <form onSubmit={handelRegister}>
        {/* first and last name */}
        <div className="flex items-center gap-3 w-full">
          <div className="w-full">
            <label className="font-medium text-dark">
              FirstName <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="First Name"
              autoComplete="off"
              type="text"
              required
              onChange={(e) =>
                setUserRegisterInput({
                  ...userRegisterInput,
                  firstName: e.target.value,
                })
              }
              value={userRegisterInput.firstName}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-dark">
              LastName <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Last Name"
              autoComplete="off"
              type="text"
              required
              onChange={(e) =>
                setUserRegisterInput({
                  ...userRegisterInput,
                  lastName: e.target.value,
                })
              }
              value={userRegisterInput.lastName}
            />
          </div>
        </div>
        <label className="font-medium text-dark">
          Email <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Your email"
          autoComplete="off"
          type="email"
          required
          onChange={(e) =>
            setUserRegisterInput({
              ...userRegisterInput,
              email: e.target.value,
            })
          }
          value={userRegisterInput.email}
        />
        <label className="font-medium text-dark">
          Phone <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Your phone"
          autoComplete="off"
          type="number"
          required
          onChange={(e) =>
            setUserRegisterInput({
              ...userRegisterInput,
              phone: e.target.value,
            })
          }
          value={userRegisterInput.phone}
        />
        <div className="flex items-center gap-3 w-full">
          <div className="w-full">
            <label className="font-medium text-dark">
              Password <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type password"
              autoComplete="off"
              type="password"
              required
              onChange={(e) =>
                setUserRegisterInput({
                  ...userRegisterInput,
                  password: e.target.value,
                })
              }
              value={userRegisterInput.password}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-dark">
              Confirm Password <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type Confirm Password"
              autoComplete="off"
              type="password"
              required
              onChange={(e) =>
                setUserRegisterInput({
                  ...userRegisterInput,
                  confirmPassword: e.target.value,
                })
              }
              value={userRegisterInput.confirmPassword}
            />
          </div>
        </div>
        <input
          className="bg-primary w-full py-2.5 rounded-md my-5 cursor-pointer hover:bg-primary/80 text-white"
          type="submit"
          value="Register"
        />
      </form>
      <p className="text-sm text-center mt-5">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary font-medium hover:underline cursor-pointer"
        >
          Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default UserRegister;
