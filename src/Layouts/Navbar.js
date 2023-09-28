import TopBar from "./TopBar";
import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navData, setNavData] = useState([]);
  const [navBuy, setNavBuy] = useState([]);
  const [navProperty, setNavProperty] = useState([]);
  const [navBedBath, setNavBedBath] = useState([]);
  const [navPrice, setNavPrice] = useState([]);
  const [navMore, setNavMore] = useState([]);

  useEffect(() => {
    fetch("json/nav.data.json")
      .then((res) => res.json())
      .then((d) => setNavData(d));
  }, []);
  useEffect(() => {
    fetch("json/nav.buy.json")
      .then((res) => res.json())
      .then((d) => setNavBuy(d));
  }, []);
  useEffect(() => {
    fetch("json/nav.property.json")
      .then((res) => res.json())
      .then((d) => setNavProperty(d));
  }, []);
  useEffect(() => {
    fetch("json/nav.bedBath.json")
      .then((res) => res.json())
      .then((d) => setNavBedBath(d));
  }, []);
  useEffect(() => {
    fetch("json/nav.price.json")
      .then((res) => res.json())
      .then((d) => setNavPrice(d));
  }, []);
  useEffect(() => {
    fetch("json/nav.more.json")
      .then((res) => res.json())
      .then((d) => setNavMore(d));
  }, []);
  return (
    <div className="text-dark">
      <TopBar />
      <nav>
        <div className="mt-1">
          <ul className="flex flex-wrap gap-x-2 md:justify-between md:text-xl text-[9px] font-medium p-5 pr-2 bg-gray-200">
            {navData.map((d, index) => {
              return (
                <Link
                  to={`${d?.path}`}
                  key={index}
                  className="cursor-pointer hover:text-secondary duration-200 ease-in flex items-center gap-1"
                >
                  {d.name}
                  <Icon icon={d.icon} />
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2 cursor-pointer my-5 md:text-xl text-[9px]">
              <li className="hover:text-secondary duration-200 ease-in">
                <Menu>
                  <MenuHandler>
                    <button className="border border-gray-400 shadow rounded font-medium md:p-2 p-1 flex items-center">
                      Buy
                      <Icon
                        className="md:w-6 md:h-6"
                        icon="material-symbols:keyboard-arrow-down-rounded"
                      />
                    </button>
                  </MenuHandler>
                  <MenuList>
                    {navBuy.map((buyData, index) => {
                      return (
                        <MenuItem
                          key={index}
                          className="hover:underline hover:bg-white"
                        >
                          {buyData.name}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </li>
              <li className="hover:text-secondary duration-200 ease-in">
                <Menu>
                  <MenuHandler>
                    <button className="border border-gray-400 shadow rounded font-medium md:p-2 p-1 flex items-center">
                      Property type
                      <Icon
                        className="md:w-6 md:h-6"
                        icon="material-symbols:keyboard-arrow-down-rounded"
                      />
                    </button>
                  </MenuHandler>
                  <MenuList>
                    {navProperty.map((property, index) => {
                      return (
                        <MenuItem
                          key={index}
                          className="hover:underline hover:bg-white"
                        >
                          {property.name}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </li>
              <li className="hover:text-secondary duration-200 ease-in">
                <Menu>
                  <MenuHandler>
                    <button className="border border-gray-400 shadow rounded font-medium md:p-2 p-1 flex items-center">
                      Beds & Baths
                      <Icon
                        className="md:w-6 md:h-6"
                        icon="material-symbols:keyboard-arrow-down-rounded"
                      />
                    </button>
                  </MenuHandler>
                  <MenuList>
                    {navBedBath.map((bedBath, index) => {
                      return (
                        <MenuItem
                          key={index}
                          className="hover:underline hover:bg-white"
                        >
                          {bedBath.name}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </li>
              <li className="hover:text-secondary duration-200 ease-in">
                <Menu>
                  <MenuHandler>
                    <button className="border border-gray-400 shadow rounded font-medium md:p-2 p-1 flex items-center">
                      Price
                      <Icon
                        className="md:w-6 md:h-6"
                        icon="material-symbols:keyboard-arrow-down-rounded"
                      />
                    </button>
                  </MenuHandler>
                  <MenuList>
                    {navPrice.map((price, index) => {
                      return (
                        <MenuItem
                          key={index}
                          className="hover:underline hover:bg-white"
                        >
                          {price.price}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </li>
              <li className="hover:text-secondary duration-200 ease-in">
                <Menu>
                  <MenuHandler>
                    <button className="border border-gray-400 shadow rounded font-medium md:p-2 p-1 flex items-center">
                      More Filters
                      <Icon
                        className="md:w-6 md:h-6"
                        icon="material-symbols:keyboard-arrow-down-rounded"
                      />
                    </button>
                  </MenuHandler>
                  <MenuList>
                    {navMore.map((more, index) => {
                      return (
                        <MenuItem
                          key={index}
                          className="hover:underline hover:bg-white"
                        >
                          {more.name}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </li>
              <li className="flex gap-2">
                <input
                  className="border border-gray-400 md:p-2 p-1 rounded outline-none w-full"
                  type="search"
                  name="search"
                  id="search"
                  placeholder="City, community or building"
                />
                <input
                  className="bg-primary text-white px-4 w-fit cursor-pointer rounded font-bold"
                  type="submit"
                  value="Search"
                />
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
