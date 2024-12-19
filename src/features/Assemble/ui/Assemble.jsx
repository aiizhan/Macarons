import React, { useEffect, forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getMacItems, assemblesetsProducts } from "../store/actions"; 
import Container from "../../../shared/Container/Container";

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Assemble = forwardRef((_, ref) => {
  const dispatch = useDispatch();
  const { macItems } = useSelector((state) => state.macItems);

  const [totalPrice, setTotalPrice] = useState(0); // Состояние для суммы

  useEffect(() => {
    dispatch(getMacItems());
    dispatch(assemblesetsProducts());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch]);
  
  // Вычисление общей суммы цен
  useEffect(() => {
    const total = macItems.reduce((acc, item) => acc + item.price, 1400); // Начальная сумма 1400
    setTotalPrice(total);
  }, [macItems]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Something went wrong. Please try again later.</p>;
  }

  return (
    <Container>
      <div className="mt-[2rem]">
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-7">
            <Link to="/" className="text-center">Главная</Link>
            <Link 
              to={`/AssembleDetail?totalPrice=${totalPrice}`} 
              ref={ref} 
              className="text-center"
            >
              Собрать набор
            </Link>
          </div>
          <p className="text-center">Выбрать количество</p>
        </div>
        <h2 className="text-center uppercase pt-5 font-sans">Выберите количество</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {macItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              custom={index + 1}
              variants={cardAnimation}
            >
              <div className="border-2 w-full sm:w-[260px] h-[340px] p-3 mx-auto flex flex-col items-center">
                <Link to={`/AssembleDetail/${item.id}?price=${item.price}`}>
                  <img
                    className="w-[200px] h-[200px] object-contain"
                    src={item.image}
                    alt={item.quantity}
                  />
                </Link>
                <div className="text-center">
                  <h2 className="title text-gray-900 pt-5">{item.quantity}</h2>
                  <Link to={`/AssembleDetail/${item.id}`}>
                    <h2 className="text-pink-600 font-bold text-lg pb-9">{item.price} руб.</h2>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </Container>
  );
});

export default Assemble;
