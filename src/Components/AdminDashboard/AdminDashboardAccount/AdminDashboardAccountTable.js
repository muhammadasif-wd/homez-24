import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboardAccountTable = ({ account }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td className="px-5 py-4  bg-white border-b border-gray-300">
        <div className="w-fit mr-auto">
          <img
            alt="property"
            src={account?.primaryImg}
            className="mx-auto object-cover rounded-md w-16"
          />
        </div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-900 whitespace-no-wrap">{account?.name}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-900 whitespace-no-wrap">
          ashikulislamifty@gmail.com
        </p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-900 whitespace-no-wrap">01704070091</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-900 whitespace-no-wrap">10</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-900 whitespace-no-wrap">1</p>
      </td>

      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <div className="flex  gap-5 items-center">
          <button
            onClick={() =>
              navigate(`/admin-dashboard/edit-account/${account?._id}`)
            }
            className="bg-secondary p-2 text-white rounded-full  hover:bg-secondary/80"
          >
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

export default AdminDashboardAccountTable;
