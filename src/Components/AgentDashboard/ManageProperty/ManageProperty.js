import React, { useState } from "react";
import ManagePropertyTable from "./ManagePropertyTable";
import img1 from "../../../Assets/images/Property/card2.jpg";
import img2 from "../../../Assets/images/Property/card3.jpg";
import img3 from "../../../Assets/images/Property/card4.jpg";
import img4 from "../../../Assets/images/Property/card5.jpg";
import img5 from "../../../Assets/images/Property/card6.jpg";

const ManageProperty = () => {
  const [filterText, setFilterText] = useState("");
  const handelFilter = (e) => {
    e.preventDefault();
    console.log(filterText);
  };

  //   fake property data for map
  const properties = [
    { name: "property1", primaryImg: `${img1}` },
    { name: "property2", primaryImg: `${img2}` },
    { name: "property3", primaryImg: `${img3}` },
    { name: "property4", primaryImg: `${img4}` },
    { name: "property5", primaryImg: `${img5}` },
  ];
  return (
    <div className="px-5 mx-auto sm:px-8">
      <div className="py-8">
        <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
          <h2 className="text-2xl leading-tight">Manage Property</h2>
          <div className="text-end">
            <form
              onSubmit={() => handelFilter()}
              className="flex justify-center gap-2 items-center max-w-sm space-y-3  md:w-full md:space-x-3 md:space-y-0"
            >
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  onChange={(e) => setFilterText(e.target.value)}
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:secondary/40 focus:border-transparent"
                  placeholder="name"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2  text-base font-semibold text-white bg-primary/90 rounded-lg shadow-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-2 focus:ring-offset-primary/20"
                type="submit"
              >
                Filter
              </button>
            </form>
          </div>
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
                    Image
                  </th>
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
                    Property Status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <ManagePropertyTable property={property} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProperty;
