import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../../../shared/Container/Container";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../widgets/Cart/store/slice";
import { getReadykits } from './../store/actions';
import bag from "../../../shared/assets/svg/bag.svg";
import { Status } from "../store/slice";
import { toast } from "react-toastify"; // Импортируем toast

const ProductSet = () => {
  const dispatch = useDispatch();
  const { readykits, status, error } = useSelector((state) => state.ready);
  
  useEffect(() => {
    dispatch(getReadykits());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch]);

  const handleAddToCart = (item) => {
    if (item.available) {
      dispatch(addToCart(item));
      toast.success(`Товар "${item.name}" добавлен в корзину!`);
    } else {
      toast.error("Товар недоступен для добавления в корзину.");
    }
  };

  if (status === Status.LOADING) return <p>Загрузка...</p>;
  if (status === Status.ERROR) return <p>Ошибка: {error}</p>;
  if (readykits.length === 0) return <p>Нет готовых наборов.</p>;

  return (
    <Container className="relative">
      <p className="text-[#989898] font-proxima text-sm font-normal leading-[17.05px] text-center mt-[40px] md:mt-[80px] mb-[-30px] md:mb-[-50px]">
        <Link to={"/"}>Главная</Link> &nbsp;/&nbsp;   <span className="text-[#4e9dd3]">Готовые наборы</span>
      </p>

      <h1 className="my-[100px] text-center font-montserrat text-[30px] font-semibold leading-[36.57px]">
        Готовые наборы
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[100px]">
        {readykits.map((product, index) => (
          <motion.div
            key={product.id}
            className="border rounded-lg"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <img src={product.image} alt={product.text} className="w-full h-auto" />
            <h2 className="font-montserrat text-[18px] font-medium leading-[21.94px] text-[#292929] text-left mt-[21px] mx-[20px]">
              {product.text}
            </h2>
            <p className="font-proxima text-[14px] font-normal leading-[17.05px] text-left mx-[20px] text-[#292929] my-[14px]">
              {product.title}
            </p>
            <div className="border-t border-[#EDEDF0] flex justify-around">
              <p className="font-montserrat text-[18px] font-medium leading-[21.94px] text-left p-4 text-[#E7426A]">
                {product.price} руб
              </p>
              <div
                onClick={() => handleAddToCart(product)}
                className="flex justify-between items-center gap-5 cursor-pointer"
              >
                <div>
                  <img src={bag} alt="Add to cart" />
                </div>
                <h1 className="font-montserrat text-[14px] font-semibold leading-[17.07px]">
                  В корзину
                </h1>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default ProductSet;
