import { Icon } from "@iconify/react";
import React from "react";

const WishlistTable = ({ property }) => {
  return (
    <tr>
      <td className="px-5 py-4  bg-white border-b border-gray-300">
        <div className="w-fit mr-auto">
          <img
            alt="property"
            src={property?.primaryImg}
            className="mx-auto object-cover rounded-md w-16"
          />
        </div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-900 whitespace-no-wrap">{property?.name}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-900 whitespace-no-wrap">Rent</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-900 whitespace-no-wrap">$5003</p>
      </td>

      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <div className="flex  gap-5 items-center">
          <button className="bg-secondary p-2 text-white rounded-full  hover:bg-secondary/80">
            <Icon className="text-2xl" icon="material-symbols:edit-square" />
          </button>
          <button className="bg-primary p-2 text-white rounded-full hover:bg-primary/80">
            <Icon className="text-2xl" icon="ic:baseline-delete" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WishlistTable;
