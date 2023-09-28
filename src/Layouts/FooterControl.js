import React, { useState } from "react";
import FooterRent from "./FooterRent";
import FooterSale from "./FooterSale";

const FooterControl = () => {
  const [onActiveMenu, setOnActiveMenu] = useState("forSale");
  return (
    <div>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-10">
          <div>
            <button
              onClick={() => setOnActiveMenu("forSale")}
              className={
                onActiveMenu === "forSale"
                  ? "text-black font-semibold border-b-4 border-secondary text-xl"
                  : "text-black/60 font-semibold text-xl"
              }
            >
              For Sale
            </button>
          </div>
          <div>
            <button
              onClick={() => setOnActiveMenu("forRent")}
              className={
                onActiveMenu === "forRent"
                  ? "text-black font-semibold border-b-4 border-secondary text-xl"
                  : "text-black/60 font-semibold text-xl"
              }
            >
              For Rent
            </button>
          </div>
        </div>
        <div className="my-10">
          {onActiveMenu === "forSale" && <FooterSale />}
          {onActiveMenu === "forRent" && <FooterRent />}
        </div>
      </div>
    </div>
  );
};

export default FooterControl;
