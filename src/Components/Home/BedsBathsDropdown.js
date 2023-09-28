import React, { useState } from "react";

const BedsBathsDropdown = ({ setOpenBedsBaths, openBedsBaths }) => {
  const [bedQuantity, setBedQuantity] = useState("");
  const [bathQuantity, setBathQuantity] = useState("");

  //   class name
  const active = `px-3 py-1 border border-green-400 bg-green-50 text-green-600 shadow-md rounded-full text-sm`;
  const normal = `px-3 py-1 border border-gray-300 shadow-md rounded-full text-sm hover:bg-gray-300`;
  return (
    <div className="absolute bg-white mt-5 rounded-md w-fit text-dark max-w-xs shadow-lg border border-gray-300 z-50">
      <div className="relative w-full h-full">
        <div className="w-5 h-5 absolute -top-3 left-14 bg-white rotate-45"></div>
      </div>
      <div className="p-5">
        <p className="font-medium text-sm">Beds</p>
        <div className="my-5 flex flex-wrap gap-x-2 gap-y-4">
          <button
            onClick={() => setBedQuantity("studio")}
            className={bedQuantity === "studio" ? active : normal}
          >
            Studio
          </button>
          <button
            onClick={() => setBedQuantity(1)}
            className={bedQuantity === 1 ? active : normal}
          >
            1
          </button>
          <button
            onClick={() => setBedQuantity(2)}
            className={bedQuantity === 2 ? active : normal}
          >
            2
          </button>
          <button
            onClick={() => setBedQuantity(3)}
            className={bedQuantity === 3 ? active : normal}
          >
            3
          </button>
          <button
            onClick={() => setBedQuantity(4)}
            className={bedQuantity === 4 ? active : normal}
          >
            4
          </button>
          <button
            onClick={() => setBedQuantity(5)}
            className={bedQuantity === 5 ? active : normal}
          >
            5
          </button>
          <button
            onClick={() => setBedQuantity(6)}
            className={bedQuantity === 6 ? active : normal}
          >
            6
          </button>

          <button
            onClick={() => setBedQuantity(7)}
            className={bedQuantity === 7 ? active : normal}
          >
            7
          </button>
          <button
            onClick={() => setBedQuantity("8+")}
            className={bedQuantity === "8+" ? active : normal}
          >
            8+
          </button>
        </div>
        <p className="font-medium text-sm">Baths</p>
        <div className="my-5 flex flex-wrap gap-x-2 gap-y-4">
          <button
            onClick={() => setBathQuantity(1)}
            className={bathQuantity === 1 ? active : normal}
          >
            1
          </button>
          <button
            onClick={() => setBathQuantity(2)}
            className={bathQuantity === 2 ? active : normal}
          >
            2
          </button>
          <button
            onClick={() => setBedQuantity(3)}
            className={bathQuantity === 3 ? active : normal}
          >
            3
          </button>
          <button
            onClick={() => setBathQuantity(4)}
            className={bathQuantity === 4 ? active : normal}
          >
            4
          </button>
          <button
            onClick={() => setBathQuantity(5)}
            className={bathQuantity === 5 ? active : normal}
          >
            5
          </button>
          <button
            onClick={() => setBathQuantity(6)}
            className={bathQuantity === 6 ? active : normal}
          >
            6
          </button>

          <button
            onClick={() => setBathQuantity(7)}
            className={bathQuantity === 7 ? active : normal}
          >
            7
          </button>
          <button
            onClick={() => setBathQuantity("8+")}
            className={bathQuantity === "8+" ? active : normal}
          >
            8+
          </button>
        </div>
      </div>
    </div>
  );
};

export default BedsBathsDropdown;
