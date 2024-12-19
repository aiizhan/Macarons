import React from "react";
import { motion } from "framer-motion";
import Container from "./../../../shared/Container/Container";
import { Link } from "react-router-dom";
import { cardData } from "./../Data/Constan";

const cardAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

const SetPage = () => {
  return (
    <Container>
      <div className="lg:grid grid-cols-2 gap-[25px] md:flex md:flex-col-reverse items-center justify-between">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            custom={index + 1}
            variants={cardAnimation}
            className={`${
              index === 2
                ? "flex justify-center md:col-span-2"
                : "md:col-span-1"
            }`} // Центрируем третью карточку и делаем ее на всю ширину на md и выше
          >
            <div
              className={`lg:w-[570px] text-center md:w-[600px] sm:w-[390px] sm:p-10 lg:mt-0 mt-20 sm:h-[300px] h-[260px] bg-cover`}
              style={{ backgroundImage: `url(${card.color})` }}
            >
              <Link to={card.path}>
                <div className="flex flex-col items-center justify-center pt-[30px]">
                  <img src={card.svg} alt="" />
                  <h1>{card.title}</h1>
                  {card.description &&
                    card.description.map((desc, i) => <p key={i}>{desc}</p>)}
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default SetPage;
