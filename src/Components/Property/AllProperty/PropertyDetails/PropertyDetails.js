import React from "react";
import { useParams } from "react-router-dom";
import AgentContact from "./AgentContact";
import PropertyDetailsCard from "./PropertyDetailsCard";

const PropertyDetails = () => {
  const { id } = useParams();
  return (
    <div className="md:w-10/12 w-11/12 mx-auto">
      <div className="grid lg:grid-cols-12 gap-5 mt-10">
        <div className="lg:col-span-8">
          <PropertyDetailsCard />
        </div>
        <div className="lg:col-span-4 mt-5">
          <AgentContact />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
