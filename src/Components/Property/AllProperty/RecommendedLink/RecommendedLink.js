import { Icon } from "@iconify/react";
import React from "react";

const RecommendedLink = () => {
  return (
    <div className="w-full text-dark md:grid md:grid-cols-2 lg:grid-cols-1 md:gap-5">
      {/* first */}
      <div>
        <img
          className="rounded-lg"
          src="https://www.bayut.com/assets/commuteMapEntryIcon_noinline.8bcba62c2255059649a8f8b627b4f117.svg"
          alt=""
        />
        <p className="text-xs my-5 text-center">
          Be the first to hear about new properties
        </p>
        <button className="flex items-center gap-2 justify-center w-full py-3 border border-secondary hover:bg-secondary/10 rounded-md uppercase font-medium text-secondary text-sm">
          <Icon
            className="text-lg text-secondary"
            icon="zondicons:notification"
          />
          Alert me of new properties
        </button>
      </div>
      {/* second */}
      <div>
        <p className="p-2 bg-secondary/5 text-black rounded-md my-5 text-sm font-medium">
          Recommended searches
        </p>

        <div className="space-y-3 text-[13px] p-2">
          <a className="block hover:underline" href="#">
            1. Bedroom Apartments for rent in Dubai
          </a>
          <a className="block hover:underline" href="#">
            2. Bedroom Apartments for rent in Dubai
          </a>
          <a className="block hover:underline" href="#">
            3. Bedroom Apartments for rent in Dubai
          </a>
          <a className="block hover:underline" href="#">
            4. Bedroom Apartments for rent in Dubai
          </a>
          <a className="block hover:underline" href="#">
            5. Bedroom Apartments for rent in Dubai
          </a>
        </div>
      </div>
      {/* third */}
      <div>
        <p className="p-2 bg-secondary/5 text-black rounded-md my-5 text-sm font-medium">
          Useful links
        </p>
        <div className="space-y-3 text-[13px] p-2">
          <a className="block hover:underline" href="#">
            1. Apartments for sale in Dubai
          </a>
          <a className="block hover:underline" href="#">
            2. Apartments for sale in Dubai
          </a>
          <a className="block hover:underline" href="#">
            3. Apartments for sale in Dubai
          </a>
          <a className="block hover:underline" href="#">
            4. Apartments for sale in Dubai
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecommendedLink;
