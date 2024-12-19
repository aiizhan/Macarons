import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../../../shared/Container/Container";
import cake from "../../../shared/assets/png/cake.png";
import bag from "../../../shared/assets/svg/bag.svg";
import { motion } from "framer-motion";
import { WeddingSetGet } from "../store/actions";
import { addToCart } from "../../../widgets/Cart/store/slice";
import { toast } from "react-toastify";

const WeddingSetPage = () => {
  const dispatch = useDispatch();
  const { WeddingSet, status, error } = useSelector((state) => state.wedding);

  useEffect(() => {
    dispatch(WeddingSetGet());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  if (status === "loading") {
    return <p className="text-center">Загрузка...</p>; // Consider adding a spinner here
  }

  if (status === "error") {
    return (
      <div className="text-center">
        <p>Ошибка: {error}</p>
        <button onClick={() => dispatch(WeddingSetGet())} className="mt-4">Попробуйте еще раз</button>
      </div>
    );
  }

  const handleAddTo = (wedding) => {
    if (wedding.available) {
      dispatch(addToCart(wedding));
      toast.success(`Товар "${wedding.name}" добавлен в корзину!`);
    } else {
      toast.error("Товар недоступен для добавления в корзину.");
    }
  };

  return (
    <Container>
      <motion.p className="text-[#989898] font-proxima text-sm font-normal leading-[17.05px] text-center mt-[80px] mb-[-50px] md:text-base lg:text-lg">
        <Link to="/" className="text-[#989898]">Главная</Link>
        &nbsp;/&nbsp;
        <span className="text-[#4e9dd3]">Предложение для свадеб</span>
        &nbsp;/&nbsp;
      </motion.p>

      <div className="flex flex-col md:flex-row md:justify-between">
        <motion.img
          src={cake}
          alt="Cake"
          className="w-full md:w-1/2 lg:w-1/3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div className="flex flex-col items-center md:items-start md:w-1/2 lg:w-1/2">
          <motion.h1
            className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-semibold leading-[51.2px] text-center mt-[136px] ml-[-57px] text-[#292929]"
            initial={{ scale: 0.8, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
          >
            Свадебное предложение
          </motion.h1>
          <motion.p
            className="font-proxima text-md md:text-lg text-center mt-4 text-[#292929]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Нежные пирожные макаронс с разными вкусами для <br /> украшения
            вашего свадебного торжества
          </motion.p>
          <motion.p
            className="font-proxima text-sm md:text-md text-left text-[#292929] mt-[40px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Рыба-текст предложения
            <br />
            Приятно, граждане, наблюдать, как действия представителей
            оппозиции...
          </motion.p>
        </motion.div>
      </div>

      <motion.h1
        className="my-[100px] text-center font-montserrat text-xl md:text-2xl lg:text-3xl font-semibold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Наборы для свадьбы
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[100px]">
        {WeddingSet.map((wedding, index) => (
          <motion.div
            key={wedding.id}
            className="border rounded-lg p-4"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <img
              src={wedding.image}
              className="w-full h-auto"
              alt={`wedding set ${index + 1}`}
            />
            <h1 className="text-md md:text-lg font-medium leading-[21.94px] text-black mt-4">
              {wedding.name}
            </h1>
            <p className="font-proxima text-sm md:text-md leading-[17.05px] text-left text-[#292929] my-2">
              {wedding.description}
            </p>
            <div className="border-t border-[#EDEDF0] mt-4 flex justify-between">
              <p className="font-montserrat text-lg md:text-xl font-medium leading-[60.94px] text-left p-4 text-[#E7426A]">
                {wedding.price} руб
              </p>
              <div
                onClick={() => handleAddTo(wedding)}
                className="cursor-pointer border-[#EDEDF0] ml-2 mt-2 pb-2 pt-1 flex items-center w-[120px] justify-between"
              >
                <span>
                  <img
                    className="mt-1 ml-2"
                    src={bag}
                    alt="Bag"
                  />
                </span>
                <motion.h1
                  className="font-montserrat cursor-pointer text-sm md:text-md font-semibold leading-[17.07px] text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  В корзину
                </motion.h1>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default WeddingSetPage;
