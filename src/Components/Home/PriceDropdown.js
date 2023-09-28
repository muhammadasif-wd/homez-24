import React, { useState } from "react";

const PriceDropdown = ({ setOpenPrice, openPrice }) => {
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(5000);

  return (
    <div className="absolute mt-5 bg-white rounded-md w-fit text-dark max-w-xs shadow-lg border border-gray-300 z-50">
      <div className="relative w-full h-full">
        <div className="w-5 h-5 absolute -top-3 left-14 bg-white rotate-45"></div>
      </div>
      <div className="p-5">
        <div className="flex gap-2">
          <div>
            <label className="text-sm mb-1">Minimum Price</label>
            <input
              className="py-2 px-3 w-full border border-secondary/50 rounded-md focus:outline-none text-black"
              type="text"
              name="minPrice"
              value={minimumPrice}
              onChange={(e) => setMinimumPrice(e.target.value)}
              placeholder="0"
            />
          </div>
          <div>
            <label className="text-sm mb-1">Maximum Price</label>
            <input
              className="py-2 px-3 w-full border  border-secondary/50 rounded-md focus:outline-none text-black"
              type="text"
              name="minPrice"
              value={maximumPrice}
              onChange={(e) => setMaximumPrice(e.target.value)}
              placeholder="Any"
            />
          </div>
        </div>
        {/* btn */}
        <div className="flex justify-evenly items-center mt-5 gap-5">
          <button
            onClick={() => {
              setMinimumPrice(0);
              setMaximumPrice(0);
            }}
            className="px-5 py-2 w-full border border-gray-500 rounded-md bg-white"
          >
            Reset
          </button>
          <button
            onClick={() => setOpenPrice(false)}
            className="px-5 py-2  w-full border text-white rounded-md bg-secondary/70"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceDropdown;
