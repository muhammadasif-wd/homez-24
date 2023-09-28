import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AreaSqftDropdown from "../../Home/AreaSqftDropdown";
import BedsBathsDropdown from "../../Home/BedsBathsDropdown";
import PriceDropdown from "../../Home/PriceDropdown";
import RentBuyDropDown from "../../Home/RentBuyDropDown";
import ResidentialCommercial from "../../Home/ResidentialCommercial";
import ListAndMapToggle from "./ListAndMapToggle";

const PropertyFilter = () => {
  const [openRent, setOpenRent] = useState(false);
  const [openResidential, setOpenResidential] = useState(false);
  const [openBedsBaths, setOpenBedsBaths] = useState(false);
  const [openArea, setOpenArea] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const residentialName = [
    "Apartment",
    "Villa",
    "Townhouse",
    "Penthouse",
    "Vila Compound",
    "Hotel Apartment",
    "Residential Plot",
    "Residential Floor",
    "Residential Building",
  ];
  const commercialName = [
    "Office",
    "Shop",
    "Warehouse",
    "Labour Camp",
    "Commercial Vila",
    "Bulk Unit",
    "Commercial Plot",
    "Commercial Floor",
    "Commercial Building",
    "Factory",
    "Industrial Land",
    "Mixed Use Land",
    "Showroom",
    "Other Commercial",
  ];
  return (
    <div className="md:w-10/12 w-11/12 mx-auto ">
      <div className="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 gap-3 mt-5">
        <div className="box-border">
          <button
            onClick={() => setOpenRent(!openRent)}
            className=" text-gray-900 border border-gray-300 text-sm rounded-lg w-full p-2.5  bg-white flex items-center justify-between"
          >
            Rent
            {openRent ? (
              <Icon
                className="text-2xl"
                icon="material-symbols:keyboard-arrow-up-rounded"
              />
            ) : (
              <Icon
                className="text-2xl"
                icon="material-symbols:keyboard-arrow-down"
              />
            )}
          </button>
          {/* dropdown body */}
          {openRent && (
            <RentBuyDropDown openRent={openRent} setOpenRent={setOpenRent} />
          )}
        </div>
        {/* Location */}

        <div className="md:col-span-2">
          <label
            for="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Enter location
          </label>
          <div className="relative">
            <input
              type="search"
              id="search"
              className=" text-gray-900 border border-gray-300 text-sm rounded-lg block w-full p-3"
              placeholder="Enter location"
              required
            />

            <Icon
              className="absolute inset-y-0 right-2 my-auto text-2xl text-dark flex items-center pointer-events-none"
              icon="material-symbols:location-on-outline"
            />
          </div>
        </div>

        {/* Residential */}
        <div className="box-border">
          <button
            onClick={() => setOpenResidential(!openResidential)}
            className=" text-gray-900 border border-gray-300  text-sm rounded-lg bg-white flex items-center justify-between p-2.5"
          >
            Residential
            {openResidential ? (
              <Icon
                className="text-2xl"
                icon="material-symbols:keyboard-arrow-up-rounded"
              />
            ) : (
              <Icon
                className="text-2xl"
                icon="material-symbols:keyboard-arrow-down"
              />
            )}
          </button>
          {/* dropdown body */}
          {openResidential && (
            <ResidentialCommercial
              setOpenResidential={setOpenResidential}
              openResidential={openResidential}
              residentialName={residentialName}
              commercialName={commercialName}
            />
          )}
        </div>
        {/* Beds and baths */}
        <div className="box-border">
          <button
            onClick={() => setOpenBedsBaths(!openBedsBaths)}
            className="text-gray-900 border border-gray-300  text-sm rounded-lg bg-white flex items-center justify-between p-2.5"
          >
            Beds & Baths
            {openBedsBaths ? (
              <Icon
                className="text-2xl"
                icon="material-symbols:keyboard-arrow-up-rounded"
              />
            ) : (
              <Icon
                className="text-2xl"
                icon="material-symbols:keyboard-arrow-down"
              />
            )}
          </button>
          {/* dropdown body */}
          {openBedsBaths && (
            <BedsBathsDropdown
              openBedsBaths={openBedsBaths}
              setOpenBedsBaths={setOpenBedsBaths}
            />
          )}
        </div>

        {/* min and max price */}
        <div className="box-border">
          <button
            onClick={() => setOpenPrice(!openPrice)}
            className="text-gray-900 border border-gray-300  text-sm rounded-lg bg-white flex items-center justify-between p-2.5"
          >
            Price (AED)
            {openPrice ? (
              <Icon
                className="text-2xl"
                icon="material-symbols:keyboard-arrow-up-rounded"
              />
            ) : (
              <Icon
                className="text-2xl"
                icon="material-symbols:keyboard-arrow-down"
              />
            )}
          </button>
          {/* dropdown body */}
          {openPrice && (
            <PriceDropdown openPrice={openPrice} setOpenPrice={setOpenPrice} />
          )}
        </div>
        {/* button */}
        <Link
          to="/property"
          className="md:col-span-1 col-span-2 bg-primary py-3 px-10 rounded-lg text-white hover:bg-primary/90 font-medium cursor-pointer"
        >
          <p className="text-center">Search</p>
        </Link>
      </div>

      {/* list & map toggle */}
      <ListAndMapToggle />
      {/* divider */}
      <div className="w-full h-[1px] bg-gray-300 my-5"></div>
    </div>
  );
};

export default PropertyFilter;
