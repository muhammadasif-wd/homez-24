import React from "react";
import PropertySearch from "../Components/Home/PropertySearch";
import HomeAgents from "../Container/HomeAgents";
import HomeProperty from "../Container/HomeProperty";
import HomeRent from "../Container/HomeRent";
import HomeSale from "../Container/HomeSale";
import heroBg from "../Assets/images/hero.background.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/swiper.css";
import Footer from "../Layouts/Footer";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        {/* slider start */}
        <div className="absolute inset-0 h-[500px] object-cover z-[-1]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="h-[500px] object-cover"
                src={heroBg}
                alt="round bg img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[500px] object-cover"
                src={heroBg}
                alt="round bg img"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* slider end*/}

        {/* content */}
        <div className="my-10">
          <div className="py-[140px]">
            <PropertySearch />
          </div>
        </div>
        {/* content */}
      </div>

      {/* Home Properties For Rent */}
      <HomeRent />
      {/* Home Properties For Sale */}
      <HomeSale />
      {/* Home Agents in home pages */}
      <HomeAgents />
      {/* Home Property in home pages */}
      <HomeProperty />
      {/* Popular searches in the home page */}
      <Footer />
    </div>
  );
};

export default Home;
