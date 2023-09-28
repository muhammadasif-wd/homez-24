import React from "react";
import FooterControl from "./FooterControl";

const Footer = () => {
  return (
    <div className="mt-20">
      <h1 className="sml:text-4xl text-xl text-center font-medium text-black leading-loose">
        Popular searches in the UAE
      </h1>
      <FooterControl />
    </div>
  );
};

export default Footer;
