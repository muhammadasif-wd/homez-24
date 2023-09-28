import { Icon } from "@iconify/react";
import React, { useState } from "react";
import img from "../../Assets/images/Property/card1.jpg";
import logo from "../../Assets/images/Property/brand_log.png";
import { useNavigate } from "react-router-dom";

const WishlistPropertyCard = ({ property }) => {
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="md:flex md:items-center md:gap-5 md:border md:border-gray-300 md:shadow md:rounded-lg my-5 md:overflow-hidden md:p-3 lg:p-0">
      <div className="md:w-[90%] md:h-full  relative">
        <img
          onClick={() => navigate(`/property/${property._id}`)}
          className="rounded-lg min-h-full z-0 cursor-pointer"
          src={img}
          alt="card img"
        />
        {favorite ? (
          <div className="absolute top-2 right-2 z-10 cursor-pointer w-fit p-1 hover:bg-dark/30 rounded-md">
            <Icon
              onClick={() => setFavorite(!favorite)}
              className="text-red-500 text-3xl "
              icon="mdi:cards-heart"
            />
          </div>
        ) : (
          <div className="absolute top-2 right-2 z-10 cursor-pointer w-fit p-1 hover:bg-dark/30 rounded-md">
            <Icon
              onClick={() => setFavorite(!favorite)}
              className="text-white text-3xl"
              icon="mdi:cards-heart-outline"
            />
          </div>
        )}
      </div>
      <div className="w-[100%] space-y-2 md:pr-5 p-2 md:p-0">
        <h2 className="text-lg font-medium">
          AED <span className="text-2xl">85,000</span> Yearly
        </h2>

        <p>Samara, Arabian Ranches 2, Dubai</p>
        <p>Villa</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Icon icon="mdi:bed" />5
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="uil:bath" />7
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="ic:twotone-grid-4x4" />
            2,345 <span className="text-xs">sqft</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <button className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary/60  flex items-center text-white">
              {" "}
              <Icon
                className="text-lg mr-[6px]"
                icon="material-symbols:call"
              />{" "}
              call
            </button>
            <button className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary/60 flex items-center text-white">
              {" "}
              <Icon
                className="text-lg mr-[6px]"
                icon="ic:baseline-email"
              />{" "}
              Email
            </button>
            <button className="py-2 px-6 rounded-lg bg-green-600 hover:bg-green-700 text-white md:block hidden">
              {" "}
              <Icon className="text-2xl" icon="ic:sharp-whatsapp" />
            </button>
          </div>
          <img className="md:w-20 hidden" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default WishlistPropertyCard;
