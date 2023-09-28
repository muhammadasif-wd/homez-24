import React from "react";

const RecentPostTable = ({ property }) => {
  return (
    <tr>
      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {property?.sl}.
      </td>
      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        a thing or things owned by someone; a possession or possessions
      </td>
      <td class="whitespace-nowrap px-4 py-2 text-gray-700">07-03-2023</td>
    </tr>
  );
};

export default RecentPostTable;
