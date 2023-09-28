import React from "react";
import RecommendedLink from "../../Components/Property/AllProperty/RecommendedLink/RecommendedLink";
import WishlistPropertyCard from "./WishlistPropertyCard";

const Wishlist = () => {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto">
      <div className="grid lg:grid-cols-11 gap-5">
        <div className="lg:col-span-8">
          <WishlistPropertyCard />
          <WishlistPropertyCard />
        </div>
        <div className="lg:col-span-3 mt-5">
          <RecommendedLink />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
