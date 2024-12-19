import React from "react";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import { Link } from "react-router-dom";
import { slidesData } from "../Data/Constant";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Константа с данными для слайдов


// Константа для кнопки
const newsButton = (
  <motion.div className="text-center md:text-center mt-8" variants={fadeInUp}>
    <Link to={"/news"}>
      <button className="text-black border-2 border-blue-300 w-[260px] h-[42px] rounded-lg">
        Все новости
      </button>
    </Link>
  </motion.div>
);

const NewProduct = () => {
  return (
    <Container>
      <section className="py-8">
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.h2
            className="text-2xl md:text-center  sm:text-3xl font-bold my-10 text-center"
            variants={fadeInUp}
          >
            Новости
          </motion.h2>
          
          <Swiper
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 }, // 1 слайд для малых экранов (sm)
              768: { slidesPerView: 3 }, // 3 слайда для средних экранов (md)
              1024: { slidesPerView: 3 }, // 3 слайда для больших экранов (lg)
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div className="bg-white p-6 rounded-lg" variants={fadeInUp}>
                  <img src={slide.img} alt={`Image ${index + 1}`} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="mt-4">
                    <p className="text-gray-600 text-sm mb-2">{slide.date}</p>
                    <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                    <p className="text-gray-700">{slide.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {newsButton}
        </motion.div>
      </section>
    </Container>
  );
};

export default NewProduct;
