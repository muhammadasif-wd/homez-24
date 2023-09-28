import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import footer_bg from "../../Assets/images/footer_background.png";

const MainFooter = () => {
  return (
    <footer>
      <div
        style={{
          backgroundImage: `url(${footer_bg})`,
          backgroundSize: "28px 28px",
          padding: "4rem",
          backgroundRepeat: "repeat",
          backgroundColor: "#000",
        }}
      >
        <div className="md:w-10/12 mx-auto text-white font-[300] text-xs md:text-sm">
          <div className="flex flex-wrap gap-10 items-center justify-between">
            <div>
              <div className="flex flex-wrap gap-5">
                <Link to={"/about"} className="w-fit">
                  ABOUT US
                </Link>
                <p className="w-[2px] h-4 bg-white"></p>
                <Link to={"/careers"} className="w-fit">
                  CAREERS
                </Link>
                <p className="w-[2px] h-4 bg-white"></p>
                <Link to={"/careers"} className="w-fit">
                  CONTACT US
                </Link>
                <p className="w-[2px] h-4 bg-white"></p>
                <Link to={"/contact"} className="w-fit">
                  TERMS & PRIVACY POLICY
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://www.facebook.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Icon
                  className="w-10 h-10 hover:text-blue-500 duration-200 ease-in border border-blue-300 rounded-full bg-gray-900 p-1"
                  icon="ic:outline-facebook"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Icon
                  className="w-10 h-10 hover:text-red-800 duration-200 ease-in border border-blue-300 rounded-full bg-gray-900 p-1"
                  icon="mdi:instagram"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Icon
                  className="w-10 h-10 hover:text-blue-500 duration-200 ease-in border border-blue-300 rounded-full bg-gray-900 p-1"
                  icon="jam:twitter-square"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Icon
                  className="w-10 h-10 hover:text-blue-500 duration-200 ease-in border border-blue-300 rounded-full bg-gray-900 p-1"
                  icon="mdi:linkedin"
                />
              </a>
              <a
                href="https://www.youtube.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Icon
                  className="w-10 h-10 hover:text-red-800 duration-200 ease-in border border-blue-300 rounded-full bg-gray-900 p-1"
                  icon="mdi:youtube"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-10/12 w-11/12 mx-auto">
          <p className="text-white mt-12">© 2008 - 2023 homez24.com</p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
