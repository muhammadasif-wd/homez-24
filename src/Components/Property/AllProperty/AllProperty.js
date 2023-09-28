import React from "react";
import PropertiesCards from "./PropertiesCards/PropertiesCards";
import RecommendedLink from "./RecommendedLink/RecommendedLink";

const AllProperty = () => {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto">
      <h2 className="text-2xl mt-10 mb-5 text-left">
        Properties for rent in UAE
      </h2>
      <div className="grid lg:grid-cols-11 gap-5">
        <div className="lg:col-span-8">
          <PropertiesCards />
        </div>
        <div className="lg:col-span-3 mt-5">
          <RecommendedLink />
        </div>
      </div>
    </div>
  );
};

export default AllProperty;
