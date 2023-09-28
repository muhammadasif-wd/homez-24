import React from "react";
import "../Styles/home.css";

const Card = ({
  rentCardImage,
  rentCardName,
  rentCardDetails,
  rentButtonName,
  saleCardImage,
  saleCardName,
  saleCardDetails,
  saleButtonName,
}) => {
  return (
    <div className=" border border-dark h-60 w-52 rounded-xl box-content">
      <div
        style={{
          backgroundImage: `url(${rentCardImage || saleCardImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
        className="card_background h-44 p-3"
      >
        <p className="bg-dark text-white rounded-full text-center w-28 drop-shadow-2xl">
          {rentButtonName || saleButtonName}
        </p>
        <p className="text-white rounded-full text-start py-1 drop-shadow-2xl">
          {rentCardName || saleCardName}
        </p>
      </div>
      <div>
        <p className="font-medium p-3 drop-shadow-2xl text-black">{rentCardDetails || saleCardDetails}</p>
      </div>
    </div>
  );
};

export default Card;
