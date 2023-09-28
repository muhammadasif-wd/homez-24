import { Icon } from "@iconify/react";
import React, { useState } from "react";

const PropertiesCardHeader = ({ setView, view }) => {
  const [onActiveMenu, setOnActiveMenu] = useState("all");
  return (
    <div className="flex flex-wrap justify-between gap-3 my-4 w-full text-dark">
      {/* left side */}
      <div className="flex items-center gap-2">
        <p className="text-sm">Furnish Type:</p>
        <div className="max-w-sm bg-white p-1 flex border border-gray-300 shadow-md items-center rounded-lg">
          <button
            onClick={() => setOnActiveMenu("all")}
            className={
              onActiveMenu === "all"
                ? "bg-secondary/10 text-secondary py-1 px-3 w-full font-medium rounded text-sm "
                : "bg-white py-1 px-3 w-full font-medium rounded text-sm"
            }
          >
            All
          </button>
          <button
            onClick={() => setOnActiveMenu("furnished")}
            className={
              onActiveMenu === "furnished"
                ? "bg-secondary/10 text-secondary py-1 px-3 w-full font-medium rounded text-sm "
                : "bg-white py-1 px-3 w-full font-medium rounded text-sm"
            }
          >
            Furnished
          </button>
          <button
            onClick={() => setOnActiveMenu("Unfurnished")}
            className={
              onActiveMenu === "Unfurnished"
                ? "bg-secondary/10 text-secondary py-1 px-3 w-full font-medium rounded text-sm "
                : "bg-white py-1 px-3 w-full font-medium rounded text-sm"
            }
          >
            Unfurnished
          </button>
        </div>
      </div>
      {/* right side */}
      <div className="flex items-center gap-4 ">
        <select className=" text-gray-900  text-sm rounded-lg block w-fit border border-gray-300 p-2 focus:outline-none">
          <option selected disabled hidden>
            Popular
          </option>
          <option value="TrueCheck">TrueCheck</option>
          <option value="Newest">Newest</option>
          <option value="LowestPrice">Lowest Price</option>
          <option value="HighestPrice">Highest Price</option>
        </select>
        <Icon
          onClick={() => setView("list")}
          className={
            view === "list"
              ? "text-4xl p-1 rounded-md bg-green-50 text-green-500 cursor-pointer"
              : "text-4xl p-1 rounded-md cursor-pointer"
          }
          icon="material-symbols:format-list-bulleted"
        />
        <Icon
          onClick={() => setView("grid")}
          className={
            view === "grid"
              ? "text-4xl p-1 rounded-md bg-green-50 text-green-500 cursor-pointer"
              : "text-4xl p-1 rounded-md cursor-pointer"
          }
          icon="material-symbols:grid-view-rounded"
        />
      </div>
    </div>
  );
};

export default PropertiesCardHeader;
