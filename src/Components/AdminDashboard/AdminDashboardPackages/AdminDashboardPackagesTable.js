import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboardPackagesTable = ({ adminPackage }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-900 whitespace-no-wrap">{adminPackage?.name}</p>
      </td>

      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-900 whitespace-no-wrap">2023-03-07</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <button className="bg-secondary/50 py-1 px-3 rounded-md text-white font-medium">
          Published
        </button>
      </td>

      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <div className="flex  gap-5 items-center">
          <button
            onClick={() =>
              navigate(`/admin-dashboard/edit-package/${adminPackage?._id}`)
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

export default AdminDashboardPackagesTable;
