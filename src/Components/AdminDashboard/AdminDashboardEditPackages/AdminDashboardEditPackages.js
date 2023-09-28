import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const AdminDashboardEditPackages = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // user state
  const [editPackageInput, setEditPackageInput] = useState({
    name: "",
    price: 0,
    currency: "",
    percentSave: 0,
    numberOfListing: 0,
  });

  //   handel user Register fun
  const handelEditPackage = (e) => {
    e.preventDefault();
    // received user data
    const { name, price, currency, percentSave, numberOfListing } =
      editPackageInput;
    const editPackageData = {
      name,
      price,
      currency,
      percentSave,
      numberOfListing,
    };
    console.log(editPackageData);

    toast.success("Your package has been Updated");
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
      <form onSubmit={handelEditPackage}>
        <label className="font-medium text-dark">
          Name <span className="text-warning">*</span>
        </label>
        <input
          className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
          placeholder="Type your Package name"
          autoComplete="off"
          type="text"
          required
          onChange={(e) =>
            setEditPackageInput({
              ...editPackageInput,
              name: e.target.value,
            })
          }
          value={editPackageInput.name}
        />

        <div className="flex items-center gap-3 w-full">
          <div className="w-full">
            <label className="font-medium text-dark">
              Price <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type Package price"
              autoComplete="off"
              type="number"
              required
              onChange={(e) =>
                setEditPackageInput({
                  ...editPackageInput,
                  price: e.target.value,
                })
              }
              value={editPackageInput.price}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-dark">
              Currency <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type Currency name"
              autoComplete="off"
              type="text"
              required
              onChange={(e) =>
                setEditPackageInput({
                  ...editPackageInput,
                  currency: e.target.value,
                })
              }
              value={editPackageInput.currency}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="w-full">
            <label className="font-medium text-dark">
              Percent save <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type Percent save"
              autoComplete="off"
              type="number"
              required
              onChange={(e) =>
                setEditPackageInput({
                  ...editPackageInput,
                  percentSave: e.target.value,
                })
              }
              value={editPackageInput.percentSave}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-dark">
              Number of listings <span className="text-warning">*</span>
            </label>
            <input
              className="w-full block p-2.5 outline-none rounded-md mb-5 mt-1 border border-gray-400 text-sm focus:border-secondary/90"
              placeholder="Type Number of listings"
              autoComplete="off"
              type="number"
              required
              onChange={(e) =>
                setEditPackageInput({
                  ...editPackageInput,
                  numberOfListing: e.target.value,
                })
              }
              value={editPackageInput.numberOfListing}
            />
          </div>
        </div>

        <input
          className="bg-primary w-full py-2.5 rounded-md my-5 cursor-pointer hover:bg-primary/80 text-white"
          type="submit"
          value="Update Package"
        />
      </form>
    </div>
  );
};

export default AdminDashboardEditPackages;
