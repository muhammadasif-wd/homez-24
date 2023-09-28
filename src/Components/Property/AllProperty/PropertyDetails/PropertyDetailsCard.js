import { Icon } from "@iconify/react";
import React, { useState } from "react";
import img from "../../../../Assets/images/Property/card1.jpg";
import SeeAllPhotoModal from "./SeeAllPhotoModal";

const PropertyDetailsCard = () => {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full rounded-lg relative">
        <img className="rounded-lg w-full" src={img} alt="details card img" />
        <button
          onClick={() => setOpen(true)}
          className="px-5 py-2 flex items-center gap-2 rounded-full bg-secondary/60 hover:bg-secondary/70 text-white absolute bottom-2 right-2"
        >
          <Icon icon="material-symbols:photo-camera-back" />
          All Photos
        </button>
        <button className="px-5 py-2 flex items-center gap-2 rounded-full bg-secondary/60 hover:bg-secondary/70 text-white absolute bottom-2 left-2">
          <Icon icon="subway:location-3" /> Map
        </button>
      </div>
      <div className="text-[15px] text-dark mt-5 space-y-5">
        <h2 className="text-3xl font-semibold">AED 340,000 Yearly</h2>
        <h4 className="text-lg font-medium">
          Amber, Tiara Residences, Palm Jumeirah, Dubai
        </h4>
        <div className="flex items-center gap-4 text-lg">
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
        <p className="text-lg font-medium">
          Are you ready to rent Three bedroom Study in Palm
        </p>
        <p>
          Stunning 3B/r for rent in a gated community with private beach
          apartment comes with partial sea view
        </p>
        <div>
          <p>Tiara residence</p>
          <p>Three Bedroom +Study</p>
          <p>Area: 2288</p>
        </div>
        {/* show more btn */}
        {show && (
          <button
            onClick={() => setShow(!show)}
            className="text-secondary flex items-center gap-2 text-[16px] font-medium"
          >
            Read More{" "}
            <Icon
              className="text-2xl"
              icon="material-symbols:keyboard-arrow-down"
            />
          </button>
        )}
        <div className={show ? "hidden" : ""}>
          <h5 className="text-lg font-medium">Additional information:</h5>
          <p>
            The seven 15-storey buildings are located at the top right hand side
            of the trunk of Palm Jumeirah and enjoy sea views all round. <br />
            This is the first development by Zabeel Properties and was delivered
            in 2009. <br />
            The gated community comprises 644 one, two and three bedroom
            apartments and penthouses ranging from 1,300 to 5,500 square feet.{" "}
            <br />
            Amenities at Tiara Residence include a bespoke health club with a
            gym and a kids club, a restaurant, an infinity swimming pool and
            access to the private beach and landscaped gardens. <br />
            ‡ Watch Video Tour of this property on: https://famproperties.
            com/palm-jumeirah-dubai/amber/3-bedroom-Apartment-for-Rent-76950 ¶
            Property Features: <br />
            * Built In Wardrobes* Kitchen Appliances* Balcony* Basement* Private
            Beach* Beachfront* Gated Community* Air Conditioning* Open Kitchen*
            Fitness Centre
            <br />
          </p>
          <div>
            <h4 className="my-3 text-lg font-medium">fam Properties:</h4>
            Contact Us - View Contact Detail <br />
            Toll free: 800famView Contact Detail <br />
            Email: Send e-mail <br />
            Visit our website: famproperties. com <br />
            Office Registration no: 1858 <br />
            RERA Broker ID: 8976 <br />
            Permit No:View Contact Detail <br />
          </div>

          {/* read less btn */}
          <button
            onClick={() => setShow(!show)}
            className="text-secondary flex items-center gap-2 text-[16px] font-medium mt-5"
          >
            Read Less{" "}
            <Icon
              className="text-2xl"
              icon="material-symbols:keyboard-arrow-up-rounded"
            />
          </button>
        </div>
        {/* Property Information */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-semibold mb-5">Property Information</h2>
          <div className="flex gap-10  items-center py-2 border-b border-gray-300 ">
            <p>Type:</p>
            <p className="text-[16px] font-medium">Apartment</p>
          </div>
          <div className="flex gap-10  items-center py-2 border-b border-gray-300 ">
            <p>Purpose:</p>
            <p className="text-[16px] font-medium">For Rent</p>
          </div>
          <div className="flex gap-10  items-center py-2 border-b border-gray-300 ">
            <p>Reference no:</p>
            <p className="text-[16px] font-medium">Bayut - B-AR-76950</p>
          </div>
        </div>
      </div>
      {/* see all photos modal */}
      <SeeAllPhotoModal setOpen={setOpen} open={open} />
    </div>
  );
};

export default PropertyDetailsCard;
