import { Icon } from "@iconify/react";
import React, { useState } from "react";

const ListAndMapToggle = () => {
  const [onActiveMenu, setOnActiveMenu] = useState("list");
  return (
    <div className="flex flex-wrap justify-between gap-3 my-4 w-full">
      <div className=" w-fit">
        {/* <button className=" px-4 border border-gray-300 shadow-md rounded-full text-sm hover:bg-gray-300">
          TruCheck™ listings first
        </button> */}
        <button className="px-4 py-1 border border-green-400 bg-green-50 text-green-600 shadow-md rounded-full text-sm ">
          Properties with floor plans
        </button>
      </div>
      <div className="max-w-xs bg-white p-1 flex gap-2 border border-gray-300 shadow-md items-center rounded-lg">
        <button
          onClick={() => setOnActiveMenu("list")}
          className={
            onActiveMenu === "map"
              ? "bg-white py-1 px-5 w-full font-medium rounded text-sm flex gap-2 items-center"
              : "bg-secondary/10 text-secondary py-1 px-5 w-full font-medium rounded text-sm flex gap-2 items-center"
          }
        >
          <Icon icon="material-symbols:format-list-bulleted" /> List
        </button>
        <button
          onClick={() => setOnActiveMenu("map")}
          className={
            onActiveMenu === "list"
              ? "bg-white py-1 px-5 w-full font-medium rounded text-sm flex gap-2 items-center"
              : "bg-secondary/10 text-secondary py-1 px-5 w-full font-medium rounded text-sm flex gap-2 items-center"
          }
        >
          <Icon icon="subway:location-3" /> Map
        </button>
      </div>
    </div>
  );
};

export default ListAndMapToggle;
