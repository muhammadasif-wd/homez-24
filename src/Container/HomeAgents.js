import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Icon } from "@iconify/react";

const HomeAgents = () => {
  const [agent, setAgent] = useState([]);
  useEffect(() => {
    fetch("json/home.agents.json")
      .then((res) => res.json())
      .then((data) => setAgent(data));
  }, []);

  return (
    <div className="mt-16">
      <h1 className="sml:text-4xl text-xl font-medium text-dark leading-loose">
        Meet the Agents
      </h1>
      <p className="font-medium text-secondary pt-3">
        <Link to={"/"}>Learn more about Super Agents</Link>
      </p>
      <div className="my-5">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
            },
            375: {
              width: 375,
              slidesPerView: 2,
              spaceBetween: 80,
            },
            640: {
              width: 620,
              slidesPerView: 2,
              spaceBetween: -180,
            },
            768: {
              width: 768,
              slidesPerView: 3,
              spaceBetween: 80,
            },
            769: {
              width: 769,
              slidesPerView: 3,
              spaceBetween: -120,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
            },

            1280: {
              width: 1280,
              slidesPerView: 5,
              spaceBetween: -120,
            },
            1366: {
              width: 1366,
              slidesPerView: 5,
              spaceBetween: -200,
            },
            1440: {
              width: 1440,
              slidesPerView: 6,
            },
          }}
          className="mySwiper"
        >
          {agent.map((d, index) => {
            const { img, name, details } = d;
            return (
              <SwiperSlide key={index}>
                <SwiperSlide key={index}>
                  <div className="h-fit w-56 hover:bg-dark/10 duration-300 ease-in rounded-lg text-center p-5 shadow-md ">
                    <div className="rounded-full w-fit mx-auto border-3 border-warning relative">
                      <div className="absolute top-0 right-0 rounded-full w-fit bg-warning p-[2px]">
                        <Icon
                          className="text-white text-2xl"
                          icon="mdi:trophy-award"
                        />
                      </div>
                      <img
                        className="w-28 h-28 rounded-full"
                        src={img}
                        alt="img"
                      />
                    </div>
                    <h1 className="text-[18px] font-semibold text-center text-dark my-2">
                      {name}
                    </h1>
                    <p className="text-black text-sm">
                      {details.length > 22
                        ? `${details.slice(0, 22)}...`
                        : details}
                    </p>
                  </div>
                </SwiperSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeAgents;
