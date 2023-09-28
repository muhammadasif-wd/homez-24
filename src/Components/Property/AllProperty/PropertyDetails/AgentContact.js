import { Icon } from "@iconify/react";
import React from "react";
import logo from "../../../../Assets/images/Property/brand_log.png";

const AgentContact = () => {
  return (
    <div className="text-xs">
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-5">
        <div>
          <img className="w-24 mx-auto" src={logo} alt="" />
          <p className="text-center mt-2">Agent:Bharat Vadera</p>
          <p className="py-3 mt-2 border-t border-gray-300 text-[15px] font-medium text-center">
            Contact Agent for more information.
          </p>
          {/* agent contact form */}
          <div className="">
            <label>NAME</label>
            <input
              className="w-full block p-3 outline-none border border-gray-400 rounded-lg mb-2 mt-1 focus:border-gray-800"
              placeholder="Your Name"
              type="text"
              required
            />
            <label>EMAIL</label>
            <input
              className="w-full block p-3 outline-none border border-gray-400 rounded-lg mb-2 mt-1 focus:border-gray-800"
              placeholder="Your Email"
              type="email"
              required
            />
            <label>PHONE</label>
            <input
              className="w-full block p-3 outline-none border border-gray-400 rounded-lg mb-2 mt-1 focus:border-gray-800"
              placeholder="+880"
              type="number"
              required
            />
            <label>MESSAGE </label>
            <textarea
              className="w-full block p-3 pb-10 outline-none border border-gray-400 rounded-lg mb-2 mt-1 focus:border-gray-800"
              placeholder="Type your message..."
              type="tel"
              required
            />
          </div>
          {/* call | whatsapp | email */}

          <div className="flex gap-2 items-center">
            <button className="py-[13px] w-full rounded-lg bg-secondary/50 hover:bg-secondary/60  flex items-center text-white text-sm">
              {" "}
              <div className="text-center flex items-center w-fit mx-auto">
                <Icon
                  className="text-lg mr-[6px]"
                  icon="material-symbols:call"
                />{" "}
                call
              </div>
            </button>
            <button className="py-[13px] w-full rounded-lg bg-secondary/50 hover:bg-secondary/60 flex items-center text-white text-sm">
              {" "}
              <div className="text-center flex items-center w-fit mx-auto">
                <Icon className="text-lg mr-[6px]" icon="ic:baseline-email" />{" "}
                Email
              </div>
            </button>
            <button className="py-3 w-full rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm">
              {" "}
              <Icon className="text-2xl mx-auto" icon="ic:sharp-whatsapp" />
            </button>
          </div>
        </div>

        {/* useful link */}
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
            <a className="block hover:underline" href="#">
              5. Apartments for sale in Dubai
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentContact;
