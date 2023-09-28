import React, { useState } from "react";
import login_bg from "../../../Assets/images/login_bg.jpg";
import AgentRegister from "./AgentRegister";
import OwnerRegister from "./OwnerRegister";
import UserRegister from "./UserRegister";

const Register = () => {
  const [onActiveMenu, setOnActiveMenu] = useState("user");
  return (
    <div className="relative mt-5">
      <img
        className="absolute inset-0 sm:object-[25%] object-cover sm:opacity-100 z-[-1]"
        src={login_bg}
        alt="round bg img"
      />

      <div className="py-10">
        <div className="md:max-w-2xl w-11/12 bg-white border border-gray-400 rounded-lg md:px-8 px-4 py-10 mx-auto shadow-xl ">
          {/* toggle btn */}
          <div className="max-w-sm bg-white p-1 flex border border-gray-300 shadow-md items-center rounded-lg">
            <button
              onClick={() => setOnActiveMenu("user")}
              className={
                onActiveMenu === "user"
                  ? "bg-secondary/10 text-secondary py-1 px-3 w-full font-medium rounded text-sm "
                  : "bg-white py-1 px-3 w-full font-medium rounded text-sm"
              }
            >
              User
            </button>
            <button
              onClick={() => setOnActiveMenu("agent")}
              className={
                onActiveMenu === "agent"
                  ? "bg-secondary/10 text-secondary py-1 px-3 w-full font-medium rounded text-sm "
                  : "bg-white py-1 px-3 w-full font-medium rounded text-sm"
              }
            >
              Agent
            </button>
            <button
              onClick={() => setOnActiveMenu("owner")}
              className={
                onActiveMenu === "owner"
                  ? "bg-secondary/10 text-secondary py-1 px-3 w-full font-medium rounded text-sm "
                  : "bg-white py-1 px-3 w-full font-medium rounded text-sm"
              }
            >
              Owner
            </button>
          </div>
          {/* toggle btn */}
          <div className="mt-10 text-dark">
            {onActiveMenu === "user" && <UserRegister />}
            {onActiveMenu === "agent" && <AgentRegister />}
            {onActiveMenu === "owner" && <OwnerRegister />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
