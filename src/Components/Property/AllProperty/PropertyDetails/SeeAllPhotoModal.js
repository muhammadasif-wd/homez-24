import { Icon } from "@iconify/react";
import React, { useState } from "react";
import logo from "../../../../Assets/images/Property/brand_log.png";
import img2 from "../../../../Assets/images/Property/card2.jpg";
import img3 from "../../../../Assets/images/Property/card3.jpg";
import img4 from "../../../../Assets/images/Property/card4.jpg";
import img5 from "../../../../Assets/images/Property/card5.jpg";
import img6 from "../../../../Assets/images/Property/card6.jpg";
import img7 from "../../../../Assets/images/Property/card7.jpg";
import img8 from "../../../../Assets/images/Property/card8.jpg";
import img9 from "../../../../Assets/images/Property/card9.jpg";

const SeeAllPhotoModal = ({ open, setOpen }) => {
  const [onActiveMenu, setOnActiveMenu] = useState("photos");
  return (
    <>
      {open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-[70%] md:w-[90%] w-full my-6 mx-auto max-w-6xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-10 md:py-5 md:px-10 px-5">
                {/* header */}

                {/* toggle start */}

                <div className="w-full bg-white p-1 flex gap-5 border border-gray-300 shadow-md items-center rounded-lg ">
                  <button
                    onClick={() => setOnActiveMenu("photos")}
                    className={
                      onActiveMenu === "map"
                        ? "bg-white py-1 px-5 w-full font-medium rounded  flex gap-2 items-center justify-center"
                        : "bg-secondary/10 text-secondary py-1 px-5 w-full font-medium rounded  flex gap-2 items-center justify-center"
                    }
                  >
                    <Icon icon="material-symbols:photo-camera-back" /> Photos
                  </button>
                  <button
                    onClick={() => setOnActiveMenu("map")}
                    className={
                      onActiveMenu === "photos"
                        ? "bg-white py-1 px-5 w-full font-medium rounded  flex gap-2 items-center justify-center"
                        : "bg-secondary/10 text-secondary py-1 px-5 w-full font-medium rounded  flex gap-2 items-center justify-center"
                    }
                  >
                    <Icon icon="subway:location-3" /> Map
                  </button>
                </div>

                {/* toggle end */}
                <button
                  className="px-2 p-[2px] ml-auto bg-red-500/90 text-white  rounded-full font-medium hover:bg-red-500 absolute top-2 right-2"
                  onClick={() => setOpen(false)}
                >
                  X
                </button>

                {/*body*/}
                <div className="relative w-full grid md:grid-cols-2 grid-cols-1 gap-2 h-[400px] overflow-y-auto my-5">
                  <img
                    className="rounded-md hover:opacity-80 cursor-pointer w-full"
                    src={img2}
                    alt=""
                  />
                  <img
                    className="rounded-md hover:opacity-80 cursor-pointer w-full"
                    src={img3}
                    alt=""
                  />
                  <img
                    className="rounded-md hover:opacity-80 cursor-pointer w-full "
                    src={img4}
                    alt=""
                  />
                  <img
                    className="rounded-md hover:opacity-80 cursor-pointer w-full"
                    src={img5}
                    alt=""
                  />
                  <img
                    className="rounded-md hover:opacity-80 cursor-pointer w-full"
                    src={img6}
                    alt=""
                  />
                  <img
                    className="rounded-md hover:opacity-80 cursor-pointer w-full"
                    src={img7}
                    alt=""
                  />
                  <img
                    className="rounded-md hover:opacity-80 cursor-pointer w-full"
                    src={img8}
                    alt=""
                  />
                  <img
                    className="rounded-md hover:opacity-80 cursor-pointer w-full"
                    src={img9}
                    alt=""
                  />
                </div>
                {/* modal footer */}
                <div className="flex md:flex-row flex-col gap-5 md-gap-0 items-center justify-between">
                  {/* company logo */}
                  <div className="flex items-center gap-5">
                    <img className="w-28" src={logo} alt="logo" />
                    <div>
                      <p className="text-sm mb-2 font-medium">
                        Listing by:{" "}
                        <span className="text-secondary">Spotify</span>
                      </p>
                      <p className="text-xs">Agent: Justan David</p>
                    </div>
                  </div>
                  {/* contact icon */}
                  <div className="flex gap-2 items-center">
                    <button className="p-3 rounded-lg bg-secondary/70 hover:bg-secondary/80  flex items-center text-white">
                      {" "}
                      <Icon
                        className="text-lg mr-[6px]"
                        icon="material-symbols:call"
                      />{" "}
                      call
                    </button>
                    <button className="p-3 rounded-lg bg-secondary/70 hover:bg-secondary/80 flex items-center text-white">
                      {" "}
                      <Icon
                        className="text-lg mr-[6px]"
                        icon="ic:baseline-email"
                      />{" "}
                      Email
                    </button>
                    <button className="py-3 px-6 rounded-lg bg-green-600 hover:bg-green-700 text-white ">
                      {" "}
                      <Icon className="text-2xl" icon="ic:sharp-whatsapp" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SeeAllPhotoModal;
