import React, { useState } from "react";

const AreaSqftDropdown = ({ setOpenArea, openArea }) => {
  const [minimumSqft, setMinimumSqft] = useState(0);
  const [maximumSqft, setMaximumSqft] = useState(500);

  return (
    <div className="absolute mt-5 bg-white rounded-md w-fit text-dark max-w-xs shadow-lg border border-gray-300 z-50">
      <div className="relative w-full h-full">
        <div className="w-5 h-5 absolute -top-3 left-14 bg-white rotate-45"></div>
      </div>
      <div className="p-5">
        <div className="flex gap-2">
          <div>
            <label className="text-sm mb-1">Minimum (Sqft)</label>
            <input
              className="py-2 px-3 w-full border border-secondary/50 rounded-md focus:outline-none text-black"
              type="text"
              name="minimumSqft"
              value={minimumSqft}
              onChange={(e) => setMinimumSqft(e.target.value)}
              placeholder="0"
            />
          </div>
          <div>
            <label className="text-sm mb-1">Maximum (Sqft)</label>
            <input
              className="py-2 px-3 w-full border  border-secondary/50 rounded-md focus:outline-none text-black"
              type="text"
              name="maximumSqft"
              value={maximumSqft}
              onChange={(e) => setMaximumSqft(e.target.value)}
              placeholder="Any"
            />
          </div>
        </div>
        {/* btn */}
        <div className="flex justify-evenly items-center mt-5 gap-5">
          <button
            onClick={() => {
              setMinimumSqft(0);
              setMaximumSqft(0);
            }}
            className="px-5 py-2 w-full border border-gray-500 rounded-md bg-white"
          >
            Reset
          </button>
          <button
            onClick={() => setOpenArea(false)}
            className="px-5 py-2  w-full border text-white rounded-md bg-secondary/70"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreaSqftDropdown;
