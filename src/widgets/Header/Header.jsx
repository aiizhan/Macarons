import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperOne from "../../shared/assets/img/slide.png";
import SwiperThree from "../../shared/assets/img/slide3.png";
import SwiperFour from "../../shared/assets/svg/slide4.svg";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import HeaderTwo from "./HeaderTwo.jsx";
import Container from "../../shared/Container/Container.jsx";
import HeaderLogo from "./HeaderLogo.jsx";
import BurgerMenu from "./BurgerMenu.jsx";
import { Link } from "react-router-dom";
import Logoo from "../../shared/assets/svg/logo.svg"

const Header = ({ handlePopular }) => {
  return (
    <div>
      <div className="bg-blue-200 lg:w-full  hidden md:block relative">
        <Container>
          <Swiper
            autoplay={{ delay: 2000 }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            style={{ "--swiper-navigation-size": "15px" }}
            speed={4000}
          >
            <SwiperSlide>
              <div className="flex justify-center items-center ">
                <img src={SwiperOne} alt="" />
                <h1 className="text-black font-light text-lg">
                  ДОСТАВКА В ДЕНЬ ЗАКАЗА
                </h1>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center ">
                <img src={SwiperThree} alt="" />
                <h1 className="text-black font-light text-lg">
                  ВСЕГДА СВЕЖЕЕ{" "}
                </h1>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center ">
                <div>
                  <img src={SwiperFour} alt="" />
                </div>

                <h1 className="text-black font-light text-lg">
                  МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>

      <HeaderTwo />
      
      <BurgerMenu />
      
      <HeaderLogo handlePopular={handlePopular} />
    </div>
  );
};

export default Header;
