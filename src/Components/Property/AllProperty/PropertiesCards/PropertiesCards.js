import React, { useState } from "react";
import PropertiesCardHeader from "./PropertiesCardHeader";
import PropertiesSingleCard from "./PropertiesSingleCard";

const PropertiesCards = () => {
  const [view, setView] = useState("list");
  const properties = [
    { _id: 1 },
    { _id: 2 },
    { _id: 3 },
    { _id: 4 },
    { _id: 5 },
    { _id: 6 },
  ];
  return (
    <div className="w-full">
      <PropertiesCardHeader view={view} setView={setView} />
      <div
        className={
          view === "list" ? "mt-5" : "grid md:grid-cols-3 gap-3 mt-5 gap-y-8"
        }
      >
        {properties?.map((property) => (
          <PropertiesSingleCard
            key={property?._id}
            property={property}
            view={view}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertiesCards;
