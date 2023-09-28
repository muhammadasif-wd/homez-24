import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const OwnerRegister = () => {
  // user state
  const [userRegisterInput, setUserRegisterInput] = useState({
    email: "",
    firstName: "",
    lastName: "",
    Phone: 0,
    password: "",
    confirmPassword: "",
    img: "",
    description: "",
    positions: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
    region: "",
    plans: "",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
  });

  //   handel user Register fun
  const handelRegister = (e) => {
    e.preventDefault();
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
    if (!userRegisterInput?.img) {
      toast.error("Please provide an image");
      return;
    }
    if (userRegisterInput.password.length <= 5) {
      toast.error("Password must be included 6 character");
      return;
    }
    if (userRegisterInput.password !== userRegisterInput.confirmPassword) {
      toast.error("Please type same password");
      return;
    }

    // received user data
    const {
      phone,
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      img,
      description,
      positions,
      address,
      city,
      postCode,
      country,
      region,
      plans,
      facebookUrl,
      twitterUrl,
      instagramUrl,
    } = userRegisterInput;
    const userRegisterData = {
      email,
      firstName,
      lastName,
      phone,
      password,
      confirmPassword,
      img,
      description,
      positions,
      address,
      city,
      postCode,
      country,
      region,
      plans,
      facebookUrl,
      twitterUrl,
      instagramUrl,
      role: "agent",
    };
    console.log(userRegisterData);

    toast.success("Your request has been submitted.");

    setUserRegisterInput({
      email: "",
      firstName: "",
      lastName: "",
      Phone: 0,
      password: "",
      confirmPassword: "",
      img: "",
      description: "",
      positions: "",
      address: "",
      city: "",
      postCode: "",
      country: "",
      region: "",
      plans: "",
      facebookUrl: "",
      twitterUrl: "",
      instagramUrl: "",
    });
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-10">Owner Register</h2>
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
        {/* image input */}
        <label className="font-medium text-dark">
          Image <span className="text-warning">*</span>
        </label>
        <div className="flex items-center justify-center w-full mt-1 mb-5">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              onChange={(e) =>
                setUserRegisterInput({
                  ...userRegisterInput,
                  img: e.target.value,
                })
              }
              id="dropzone-file"
              type="file"
              className="hidden"
              value={userRegisterInput.img}
            />
          </label>
        </div>
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
        <label className="font-medium text-dark">
          Address <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Type your address"
          autoComplete="off"
          type="text"
          required
          onChange={(e) =>
            setUserRegisterInput({
              ...userRegisterInput,
              address: e.target.value,
            })
          }
          value={userRegisterInput.address}
        />
        <label className="font-medium text-dark">
          Description <span className="text-warning">*</span>
        </label>
        <textarea
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Write something about you.."
          rows={10}
          autoComplete="off"
          type="tel"
          required
          onChange={(e) =>
            setUserRegisterInput({
              ...userRegisterInput,
              description: e.target.value,
            })
          }
          value={userRegisterInput.description}
        />
        <label className="font-medium text-dark">
          positions
          <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Type your Position"
          autoComplete="off"
          type="text"
          required
          onChange={(e) =>
            setUserRegisterInput({
              ...userRegisterInput,
              positions: e.target.value,
            })
          }
          value={userRegisterInput.positions}
        />
        <label className="font-medium text-dark">Facebook Url</label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Enter your fb url"
          autoComplete="off"
          type="text"
          onChange={(e) =>
            setUserRegisterInput({
              ...userRegisterInput,
              facebookUrl: e.target.value,
            })
          }
          value={userRegisterInput.facebookUrl}
        />
        <label className="font-medium text-dark">twitter Url</label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Enter your twitter Url"
          autoComplete="off"
          type="text"
          onChange={(e) =>
            setUserRegisterInput({
              ...userRegisterInput,
              twitterUrl: e.target.value,
            })
          }
          value={userRegisterInput.twitterUrl}
        />
        <label className="font-medium text-dark">Instagram Url</label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Enter your Instagram Url"
          autoComplete="off"
          type="text"
          onChange={(e) =>
            setUserRegisterInput({
              ...userRegisterInput,
              instagramUrl: e.target.value,
            })
          }
          value={userRegisterInput.instagramUrl}
        />
        <div className="flex items-center gap-3 w-full">
          <div className="w-full">
            <label className="font-medium text-dark">
              Country <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type your country"
              autoComplete="off"
              type="text"
              required
              onChange={(e) =>
                setUserRegisterInput({
                  ...userRegisterInput,
                  country: e.target.value,
                })
              }
              value={userRegisterInput.country}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-dark">
              City <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type your city"
              autoComplete="off"
              type="text"
              required
              onChange={(e) =>
                setUserRegisterInput({
                  ...userRegisterInput,
                  city: e.target.value,
                })
              }
              value={userRegisterInput.city}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="w-full">
            <label className="font-medium text-dark">
              Post Code <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type Post code"
              autoComplete="off"
              type="text"
              required
              onChange={(e) =>
                setUserRegisterInput({
                  ...userRegisterInput,
                  postCode: e.target.value,
                })
              }
              value={userRegisterInput.postCode}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-dark">
              Region <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type Your Region"
              autoComplete="off"
              type="text"
              required
              onChange={(e) =>
                setUserRegisterInput({
                  ...userRegisterInput,
                  region: e.target.value,
                })
              }
              value={userRegisterInput.region}
            />
          </div>
        </div>
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

export default OwnerRegister;
