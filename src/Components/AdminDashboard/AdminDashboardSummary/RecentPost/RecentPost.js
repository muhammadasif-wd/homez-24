import React from "react";
import RecentPostTable from "./RecentPostTable";

const RecentPost = () => {
  const data = [
    { sl: 1, name: "property 1" },
    { sl: 2, name: "property 1" },
    { sl: 3, name: "property 1" },
    { sl: 4, name: "property 1" },
    { sl: 5, name: "property 1" },
    { sl: 6, name: "property 1" },
  ];
  return (
    <div className="lg:w-11/12 lg:px-10 p-5 mx-auto">
      <div className="w-fit mb-10">
        <h2 className="text-left text-xl font-bold">Recent Post</h2>
        <div className="w-[50%] h-[4px] bg-primary rounded-full mt-1"></div>
      </div>
      {/* agent details info here */}
      <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th class="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                SL
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                Name
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left text-gray-900 font-semibold">
                Create At
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {data?.map((property) => (
              <RecentPostTable key={property?.sl} property={property} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPost;
