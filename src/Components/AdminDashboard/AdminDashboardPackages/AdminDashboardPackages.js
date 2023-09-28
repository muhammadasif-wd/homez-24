import React, { useState } from "react";
import AdminDashboardPackagesTable from "./AdminDashboardPackagesTable";

const AdminDashboardPackages = () => {
  const [filterText, setFilterText] = useState("");
  const handelFilter = (e) => {
    e.preventDefault();
    console.log(filterText);
  };

  //   fake property data for map
  const adminPackages = [
    { name: "package1", _id: 1 },
    { name: "package2", _id: 2 },
    { name: "package3", _id: 3 },
    { name: "package4", _id: 4 },
    { name: "package5", _id: 5 },
  ];
  return (
    <div className="px-5 mx-auto sm:px-8">
      <div className="py-8">
        <div className="w-fit mb-5">
          <h2 className="text-left text-2xl font-bold">Packages</h2>
          <div className="w-[50%] h-[4px] bg-primary rounded-full mt-1"></div>
        </div>
        <div className="px-4 py-4 -mx-4 overflow-x-scroll sm:-mx-8 sm:px-8 ">
          <div className="inline-block min-w-full  rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-gray-100">
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  >
                    Created Id
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  >
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody>
                {adminPackages.map((adminPackage) => (
                  <AdminDashboardPackagesTable adminPackage={adminPackage} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPackages;
