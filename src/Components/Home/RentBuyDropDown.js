import React, { useState } from "react";

const RentBuyDropDown = ({ openRent, setOpenRent }) => {
  const [onActiveMenu, setOnActiveMenu] = useState("rent");
  const [rent, setRent] = useState("yearly");
  const [buy, setBuy] = useState("all");

  //   class name
  const active = `px-3 py-1 border border-green-400 bg-green-50 text-green-600 shadow-md rounded-full text-sm`;
  const normal = `px-3 py-1 border border-gray-300 shadow-md rounded-full text-sm hover:bg-gray-300`;
  return (
    <div className="absolute mt-5 bg-white rounded-md w-fit text-dark max-w-xs border border-gray-300 z-50 shadow-lg">
      <div className="relative w-full h-full ">
        <div className="w-5 h-5 absolute -top-3 left-14 bg-white rotate-45"></div>
      </div>
      <div className="p-5">
        <p className="font-medium text-sm mb-2">Purpose</p>
        <div className="w-full bg-white p-1 flex gap-2 border border-gray-300 shadow-md items-center rounded-lg">
          <button
            onClick={() => setOnActiveMenu("buy")}
            className={
              onActiveMenu === "rent"
                ? "bg-white py-1 px-5 w-full font-medium rounded "
                : "bg-secondary/10 text-secondary py-1 px-5 w-full font-medium rounded "
            }
          >
            Buy
          </button>
          <button
            onClick={() => setOnActiveMenu("rent")}
            className={
              onActiveMenu === "buy"
                ? "bg-white py-1 px-5 w-full font-medium rounded "
                : "bg-secondary/10 text-secondary py-1 px-5 w-full font-medium rounded "
            }
          >
            Rent
          </button>
        </div>
        {onActiveMenu === "buy" ? (
          <div className="">
            <p className="font-medium my-5 text-sm">Completion Status</p>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setBuy("all")}
                className={buy === "all" ? active : normal}
              >
                All
              </button>
              <button
                onClick={() => setBuy("ready")}
                className={buy === "ready" ? active : normal}
              >
                Ready
              </button>
              <button
                onClick={() => setBuy("underConstruction")}
                className={buy === "underConstruction" ? active : normal}
              >
                Under Construction
              </button>
            </div>
            {/* btn */}
            <div className="flex justify-evenly items-center mt-5 gap-5">
              <button
                onClick={() => setBuy("all")}
                className="px-5 py-2 w-full border border-gray-500 rounded-md bg-white"
              >
                Reset
              </button>
              <button
                onClick={() => setOpenRent(false)}
                className="px-5 py-2  w-full border text-white rounded-md bg-secondary/70"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="">
            <p className="font-medium my-5 text-sm">Rent Frequency</p>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setRent("yearly")}
                className={rent === "yearly" ? active : normal}
              >
                Yearly
              </button>
              <button
                onClick={() => setRent("monthly")}
                className={rent === "monthly" ? active : normal}
              >
                Monthly
              </button>
              <button
                onClick={() => setRent("weekly")}
                className={rent === "weekly" ? active : normal}
              >
                Weekly
              </button>
              <button
                onClick={() => setRent("daily")}
                className={rent === "daily" ? active : normal}
              >
                Daily
              </button>
              <button
                onClick={() => setRent("any")}
                className={rent === "any" ? active : normal}
              >
                Any
              </button>
            </div>
            {/* btn */}
            <div className="flex justify-evenly items-center mt-5 gap-5">
              <button
                onClick={() => setRent("yearly")}
                className="px-5 py-2 w-full border border-gray-500 rounded-md bg-white"
              >
                Reset
              </button>
              <button
                onClick={() => setOpenRent(false)}
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

export default RentBuyDropDown;
