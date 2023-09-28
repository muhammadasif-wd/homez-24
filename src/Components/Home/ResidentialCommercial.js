import React, { useState } from "react";

const ResidentialCommercial = ({
  residentialName,
  openResidential,
  setOpenResidential,
  commercialName,
}) => {
  const [onActiveMenu, setOnActiveMenu] = useState("residential");
  const [residential, setResidential] = useState("");
  const [commercial, setCommercial] = useState("");

  //   colors
  const active = `px-3 py-1 w-full text-xs border border-green-400 bg-green-50 text-green-600 shadow-md rounded-full`;
  const normal = `px-3 py-1 w-full text-xs border border-gray-300 shadow-md rounded-full  hover:bg-gray-300`;
  return (
    <div className="absolute mt-4 bg-white rounded-md w-fit text-dark max-w-xs shadow-lg border border-gray-300 z-50">
      <div className="relative w-full h-full">
        <div className="w-5 h-5 absolute -top-2 left-14 bg-white rotate-45"></div>
      </div>
      <div className="p-5">
        <div className="w-full bg-white p-1 flex gap-2 border border-gray-300 shadow-md items-center rounded-lg">
          <button
            onClick={() => setOnActiveMenu("residential")}
            className={
              onActiveMenu === "commercial"
                ? "bg-white py-1 px-5 w-full font-medium rounded "
                : "bg-secondary/10 text-secondary py-1 px-5 w-full font-medium rounded "
            }
          >
            Residential
          </button>
          <button
            onClick={() => setOnActiveMenu("commercial")}
            className={
              onActiveMenu === "residential"
                ? "bg-white py-1 px-5 w-full font-medium rounded "
                : "bg-secondary/10 text-secondary py-1 px-5 w-full font-medium rounded "
            }
          >
            commercial
          </button>
        </div>
        {onActiveMenu === "residential" ? (
          <div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {residentialName?.map((r) => (
                <button
                  onClick={() => setResidential(r)}
                  className={residential === r ? active : normal}
                >
                  {r}
                </button>
              ))}
            </div>
            {/* btn */}
            <div className="flex justify-evenly items-center mt-5 gap-5">
              <button
                onClick={() => setResidential("")}
                className="px-5 py-2 w-full border border-gray-500 rounded-md bg-white"
              >
                Reset
              </button>
              <button
                onClick={() => setOpenResidential(false)}
                className="px-5 py-2  w-full border text-white rounded-md bg-secondary/70"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {commercialName?.map((c) => (
                <button
                  onClick={() => setCommercial(c)}
                  className={commercial === c ? active : normal}
                >
                  {c}
                </button>
              ))}
            </div>
            {/* btn */}
            <div className="flex justify-evenly items-center mt-5 gap-5">
              <button
                onClick={() => setCommercial("")}
                className="px-5 py-2 w-full border border-gray-500 rounded-md bg-white"
              >
                Reset
              </button>
              <button
                onClick={() => setOpenResidential(false)}
                className="px-5 py-2  w-full border text-white rounded-md bg-secondary/70"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResidentialCommercial;
