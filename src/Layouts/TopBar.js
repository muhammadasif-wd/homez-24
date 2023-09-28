import { Icon } from "@iconify/react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import logo from "../Assets/images/logo.png";
import bd from "../Assets/images/bd.svg";
import pk from "../Assets/images/pk.svg";
import sa from "../Assets/images/sa.svg";
import uae from "../Assets/images/uae.svg";
import maxico from "../Assets/images/maxico.svg";
import jordan from "../Assets/images/jordan.svg";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="text-dark">
      <ul className="flex items-center">
        <Link to={"/"}>
          <img className="sm:w-24 p-1 sm:h-16w-16 h-16" src={logo} alt="logo" />
        </Link>
        <div className="flex justify-between w-full items-center bg-gray-200 p-3 mdl:text-2xl text-[12px]">
          <li className="hover:text-secondary ease-in duration-200">
            <Menu>
              <MenuHandler>
                <button className="flex items-center gap-1">
                  <img className="mdl:w-10 mdl:h-10" src={uae} alt="uae" />
                  <p className="mdl:text-2xl sm:text-[12px] text-[9px]">UAE</p>
                </button>
              </MenuHandler>
              <MenuList>
                <MenuItem className="hover:underline hover:bg-white flex gap-2">
                  <img className="w-6" src={pk} alt="pk" />
                  <p>Pakistan</p>
                </MenuItem>
                <MenuItem className="hover:underline hover:bg-white flex gap-2">
                  <img className="w-6" src={sa} alt="sa" />
                  <p>Saudi Arabia</p>
                </MenuItem>
                <MenuItem className="hover:underline hover:bg-white flex gap-2">
                  <img className="w-6" src={bd} alt="bd" />
                  <p>Bangladesh</p>
                </MenuItem>
                <MenuItem className="hover:underline hover:bg-white flex gap-2">
                  <img className="w-6" src={jordan} alt="jordan" />
                  <p>Jordan</p>
                </MenuItem>
                <MenuItem className="hover:underline hover:bg-white flex gap-2">
                  <img className="w-6" src={maxico} alt="maxico" />
                  <p>Maxico</p>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <div className="flex items-center mdl:gap-10 sm:gap-2 gap-1 mdl:text-2xl sm:text-[12px] text-[9px]">
            <Link
              to="/login"
              className="flex hover:text-secondary ease-in duration-200 cursor-pointer items-center gap-1"
            >
              <Icon
                className="mdl:w-10 w-5 h-5 mdl:h-10 text-white border-1 bg-secondary rounded-full p-1 border-secondary"
                icon="mdi:user"
              />
              <p className="font-medium">Login/Signup</p>
            </Link>
            <Link
              to="/favorite"
              className="flex items-center hover:text-error cursor-pointer duration-200 ease-in"
            >
              <Icon
                className={`mdl:w-10 w-5 h-5 mdl:h-10 cursor-pointer`}
                icon="mdi:cards-heart-outline"
              />
              <p className="font-medium">Favorite</p>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default TopBar;
