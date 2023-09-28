import React from "react";
import property1 from "../Assets/images/home.property1.jpg";
import property2 from "../Assets/images/home.property2.jpg";
import property3 from "../Assets/images/home.property3.jpg";

const HomeProperty = () => {
  return (
    <div className="my-20 grid lgl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
      <div
        style={{
          backgroundImage: `url(${property1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <h1 className="text-2xl text-white font-semibold drop-shadow-2xl">
          Agent Hub:
        </h1>
        <h2 className="text-4xl text-white pt-4 font-medium">
          List your property with us
        </h2>
        <button className="bg-white p-2 rounded-lg text-warning font-semibold mt-5 drop-shadow-2xl">
          Get Started
        </button>
      </div>
      <div
        style={{
          backgroundImage: `url(${property2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <h1 className="text-2xl text-white font-semibold drop-shadow-2xl">
          Agent Hub:
        </h1>
        <h2 className="text-4xl text-white pt-4">List your property with us</h2>
        <button className="bg-white p-2 rounded-lg text-warning font-semibold mt-4 drop-shadow-2xl">
          Get Started
        </button>
      </div>
      <div
        style={{
          backgroundImage: `url(${property3})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <h1 className="text-2xl text-white font-semibold drop-shadow-2xl">
          Agent Hub:
        </h1>
        <h2 className="text-4xl text-white pt-4">List your property with us</h2>
        <button className="bg-white p-2 rounded-lg text-warning font-semibold mt-4 drop-shadow-2xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomeProperty;
