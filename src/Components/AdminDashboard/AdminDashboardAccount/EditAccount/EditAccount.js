import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditAccount = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // user state
  const [editAccountInput, setEditAccountInput] = useState({
    firstName: "",
    lastName: "",
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
  const handelUpdate = (e) => {
    e.preventDefault();
    // received user data
    const {
      firstName,
      lastName,
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
    } = editAccountInput;
    const userRegisterData = {
      firstName,
      lastName,
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

    toast.success("Your has been updated.");
  };
  return (
    <div className="lg:w-11/12 lg:px-10 p-5 mx-auto">
      <div className="w-fit mb-10">
        <div className="flex items-center gap-5">
          <button
            onClick={() => navigate(-1)}
            className="text-3xl p-1 rounded-full bg-primary hover:bg-primary/80 text-white"
          >
            <Icon icon="material-symbols:keyboard-double-arrow-left-sharp" />
          </button>
          <div className="w-fit">
            <h2 className="text-left text-2xl font-bold">
              Edit Account <span className="text-primary">{id}</span>
            </h2>
            <div className="w-[50%] h-[4px] bg-primary rounded-full mt-1"></div>
          </div>
        </div>
      </div>
      <form onSubmit={handelUpdate}>
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
                setEditAccountInput({
                  ...editAccountInput,
                  firstName: e.target.value,
                })
              }
              value={editAccountInput.firstName}
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
                setEditAccountInput({
                  ...editAccountInput,
                  lastName: e.target.value,
                })
              }
              value={editAccountInput.lastName}
            />
          </div>
        </div>

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
                setEditAccountInput({
                  ...editAccountInput,
                  img: e.target.value,
                })
              }
              id="dropzone-file"
              type="file"
              className="hidden"
              value={editAccountInput.img}
            />
          </label>
        </div>

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
            setEditAccountInput({
              ...editAccountInput,
              address: e.target.value,
            })
          }
          value={editAccountInput.address}
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
            setEditAccountInput({
              ...editAccountInput,
              description: e.target.value,
            })
          }
          value={editAccountInput.description}
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
            setEditAccountInput({
              ...editAccountInput,
              positions: e.target.value,
            })
          }
          value={editAccountInput.positions}
        />
        <label className="font-medium text-dark">Facebook Url</label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Enter your fb url"
          autoComplete="off"
          type="text"
          onChange={(e) =>
            setEditAccountInput({
              ...editAccountInput,
              facebookUrl: e.target.value,
            })
          }
          value={editAccountInput.facebookUrl}
        />
        <label className="font-medium text-dark">twitter Url</label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Enter your twitter Url"
          autoComplete="off"
          type="text"
          onChange={(e) =>
            setEditAccountInput({
              ...editAccountInput,
              twitterUrl: e.target.value,
            })
          }
          value={editAccountInput.twitterUrl}
        />
        <label className="font-medium text-dark">Instagram Url</label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Enter your Instagram Url"
          autoComplete="off"
          type="text"
          onChange={(e) =>
            setEditAccountInput({
              ...editAccountInput,
              instagramUrl: e.target.value,
            })
          }
          value={editAccountInput.instagramUrl}
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
                setEditAccountInput({
                  ...editAccountInput,
                  country: e.target.value,
                })
              }
              value={editAccountInput.country}
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
                setEditAccountInput({
                  ...editAccountInput,
                  city: e.target.value,
                })
              }
              value={editAccountInput.city}
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
                setEditAccountInput({
                  ...editAccountInput,
                  postCode: e.target.value,
                })
              }
              value={editAccountInput.postCode}
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
                setEditAccountInput({
                  ...editAccountInput,
                  region: e.target.value,
                })
              }
              value={editAccountInput.region}
            />
          </div>
        </div>

        <input
          className="bg-primary w-full py-2.5 rounded-md my-5 cursor-pointer hover:bg-primary/80 text-white"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default EditAccount;
