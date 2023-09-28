import React, { useState } from "react";
import { toast } from "react-hot-toast";

const AdminDashboardAddPackages = () => {
  // user state
  const [addPackageInput, setAddPackageInput] = useState({
    name: "",
    price: 0,
    currency: "",
    percentSave: 0,
    numberOfListing: 0,
  });

  //   handel user Register fun
  const handelAddPackage = (e) => {
    e.preventDefault();
    // received user data
    const { name, price, currency, percentSave, numberOfListing } =
      addPackageInput;
    const addPackageData = {
      name,
      price,
      currency,
      percentSave,
      numberOfListing,
    };
    console.log(addPackageData);

    toast.success("Your package has been submitted");
    setAddPackageInput({
      name: "",
      price: 0,
      currency: "",
      percentSave: 0,
      numberOfListing: 0,
    });
  };
  return (
    <div className="lg:w-11/12 lg:px-10 p-5 mx-auto">
      <div className="w-fit mb-10">
        <div className="w-fit">
          <h2 className="text-left text-2xl font-bold">Add Package</h2>
          <div className="w-[50%] h-[4px] bg-primary rounded-full mt-1"></div>
        </div>
      </div>
      <form onSubmit={handelAddPackage}>
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
            setAddPackageInput({
              ...addPackageInput,
              name: e.target.value,
            })
          }
          value={addPackageInput.name}
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
                setAddPackageInput({
                  ...addPackageInput,
                  price: e.target.value,
                })
              }
              value={addPackageInput.price}
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
                setAddPackageInput({
                  ...addPackageInput,
                  currency: e.target.value,
                })
              }
              value={addPackageInput.currency}
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
                setAddPackageInput({
                  ...addPackageInput,
                  percentSave: e.target.value,
                })
              }
              value={addPackageInput.percentSave}
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
                setAddPackageInput({
                  ...addPackageInput,
                  numberOfListing: e.target.value,
                })
              }
              value={addPackageInput.numberOfListing}
            />
          </div>
        </div>

        <input
          className="bg-primary w-full py-2.5 rounded-md my-5 cursor-pointer hover:bg-primary/80 text-white"
          type="submit"
          value="Add Package"
        />
      </form>
    </div>
  );
};

export default AdminDashboardAddPackages;
