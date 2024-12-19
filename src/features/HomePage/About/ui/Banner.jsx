import { motion } from "framer-motion";
import Container from "../../../../shared/Container/Container";
import bg from "../../../../shared/assets/svg/беграунт.svg";

function Banner() {
  const animation = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.3,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className=" h-screen">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className="relative  md:bg-start  bg-cover h-full lg:w-full top-[10rem] md:top-0  lg:top-0 md:mt-[100px] md:w-full sm:w-full md:justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
        <Container>
        <div className="  md:bottom-[28rem]  lg:right-[100px]   absolute lg:bottom-60 bottom-[33rem]  flex flex-col items-center justify-center text-center">
        <motion.div
              variants={animation}
              custom={3}
              className="flex flex-col items-center mb-4"
            >
              <h1 className="text-[22px]   font-semibold uppercase text-[#292929] leading-[27px] font-montserrat">
                Macaronshop
              </h1>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-7 h-[0.3px] bg-black rounded-full border-[1.5px] border-black"></div>
                <p className="text-[16px] font-semibold text-[#292929] leading-5 font-montserrat">
                  since 2013
                </p>
                <div className="w-7 h-[0.3px] bg-black rounded-full border-[1.5px] border-black"></div>
              </div>
            </motion.div>
            <div className="flex flex-col items-center">
              <motion.h1
                variants={animation}
                custom={1}
                className="text-[42px] font-semibold text-[#292929] leading-[51px] mb-4 font-montserrat"
              >
                Настоящая любовь
              </motion.h1>
              <motion.p
                variants={animation}
                custom={2}
                className="text-[18px] text-[#292929] font-normal leading-none w-full sm:w-[90%] md:w-[499px] font-proxima-nova"
              >
                Пирожные макарон и другие десерты из натуральных ингредиентов,
                приготовленные с любовью
              </motion.p>
            </div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
}

export default Banner;
