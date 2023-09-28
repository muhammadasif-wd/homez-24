import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";

const HomeRent = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("json/home.rent.json")
      .then((res) => res.json())
      .then((d) => setCard(d));
  }, []);

  return (
    <div className="max-w-[1440px]">
      <h1 className="sml:text-4xl text-xl font-medium text-dark leading-loose">
        Something New Everyday
      </h1>
      <p className="font-medium text-dark leading-loose">
        New Properties{" "}
        <span className="text-secondary">
          <Link to={"/rent"}>for rent</Link>
        </span>
      </p>
      <div className="my-5 gap-5">
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
          {card.map((c, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <Card
                    rentButtonName={c.buttonName}
                    rentCardDetails={c.cardDetails}
                    rentCardName={c.cardName}
                    rentCardImage={c.img}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeRent;
