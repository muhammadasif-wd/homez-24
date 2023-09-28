import React from "react";

const AdminDashboardSummary = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="h-30 bg-primary rounded-lg hover:scale-105 text-white px-6 py-8 md:w-[210px] w-full cursor-pointer duration-300">
        <h1 className="text-4xl font-bold text-right">21</h1>
        <p className="text-right">Active Properties</p>
      </div>
      <div className="h-30 bg-secondary rounded-lg hover:scale-105 text-white px-6 py-8 md:w-[210px] w-full cursor-pointer duration-300">
        <h1 className="text-4xl font-bold text-right">0</h1>
        <p className="text-right">Panging Properties</p>
      </div>
      <div className="h-30 bg-pink-600 rounded-lg hover:scale-105 text-white px-6 py-8 md:w-[210px] w-full cursor-pointer duration-300">
        <h1 className="text-4xl font-bold text-right">5</h1>
        <p className="text-right">Expired Properties</p>
      </div>
      <div className="h-30 bg-purple-500 rounded-lg hover:scale-105 text-white px-6 py-8 md:w-[210px] w-full cursor-pointer duration-300">
        <h1 className="text-4xl font-bold text-right">29</h1>
        <p className="text-right">Agents</p>
      </div>
    </div>
  );
};

export default AdminDashboardSummary;
