import Container from "../../../shared/Container/Container";
import { motion } from 'framer-motion';
import d from '../../../shared/assets/svg/d.svg';
import f from '../../../shared/assets/svg/f.svg';
import h from '../../../shared/assets/svg/h.svg';
import k from '../../../shared/assets/svg/k.svg';
import { Swiper, SwiperSlide } from "swiper/react";


const fadeInUp = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2 },
  }),
  };

const Services = () => {
    return (
      <Container>
        <section className="py-8 bg-white">
          <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ amount: 0.4, once: true }}
          >
            <motion.h2 className="text-3xl font-bold mb-8 text-center" variants={fadeInUp}>
              Мы обо всём позаботились
            </motion.h2>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <motion.div className="bg-white p-6  text-center" variants={fadeInUp}>
                  <img src={d} alt="Image 4" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Лучшие ингредиенты</h3>
                  <p className="text-gray-700">Только про суперингредиенты, лучшие наборы, свежесть и т.д.</p>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="bg-white p-6 text-center" variants={fadeInUp}>
                  <img src={f} alt="Image 5" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Упаковка</h3>  
                  <p className="text-gray-700">Что-то про суперудобные и быстрые в би би ба.</p>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="bg-white p-6 text-center" variants={fadeInUp}>
                  <img src={h} alt="Image 6" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Получение в день заказа</h3>
                  <p className="text-gray-700">В день заказа доставим курьером или заберёте самостоятельно.</p>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="bg-white p-6 text-center" variants={fadeInUp}>
                  <img src={k} alt="Image 7" className="w-full h-48 object-cover  mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Анонимная доставка</h3>
                  <p className="text-gray-700">Можем передавать Ваш заказ как анонимный подарок.</p>
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </section>
      </Container>
    );
  };
  

  export default Services