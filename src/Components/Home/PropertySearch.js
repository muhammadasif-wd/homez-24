import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AreaSqftDropdown from "./AreaSqftDropdown";
import BedsBathsDropdown from "./BedsBathsDropdown";
import PriceDropdown from "./PriceDropdown";
import RentBuyDropDown from "./RentBuyDropDown";
import ResidentialCommercial from "./ResidentialCommercial";

const PropertySearch = () => {
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
    <div className="max-w-[720px] mx-auto bg-dark/50 p-5 rounded-lg">
      <div className="grid md:grid-cols-4 grid-cols-3 gap-3">
        <div className="box-border">
          <button
            onClick={() => setOpenRent(!openRent)}
            className="text-gray-900  text-sm rounded-lg  w-full p-3 bg-white flex items-center justify-between"
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

        <div className="col-span-2">
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
              className="block w-full p-4 text-sm text-gray-900 rounded-lg bg-white focus:outline-none"
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
            className="text-gray-900  text-sm rounded-lg  w-full p-3 bg-white flex items-center justify-between"
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
            className="text-gray-900  text-sm rounded-lg  w-full p-3 bg-white flex items-center justify-between"
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
        {/* Area sqft */}
        <div className="box-border">
          <button
            onClick={() => setOpenArea(!openArea)}
            className="text-gray-900  text-sm rounded-lg  w-full p-3 bg-white flex items-center justify-between"
          >
            Area sqft
            {openArea ? (
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
          {openArea && (
            <AreaSqftDropdown openArea={openArea} setOpenArea={setOpenArea} />
          )}
        </div>
        {/* min and max price */}
        <div className="box-border">
          <button
            onClick={() => setOpenPrice(!openPrice)}
            className="text-gray-900  text-sm rounded-lg  w-full p-3 bg-white flex items-center justify-between"
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
        {/* div */}
        <div className="md:col-span-4 col-span-3 p-3 bg-white text-dark rounded-lg">
          <p>Search 2.0Find homes by drive time</p>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
