import { forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../../../shared/Container/Container";
import LeftP from "../../assets/Png/LeftP.png";
import LogoCart from "../../assets/Svg/LogoCart.svg";
import RightP from "../../assets/Png/RightP.png";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { giftsetsProduct } from "../../store/actions";
import { addToCart } from "../../../../widgets/Cart/store/slice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PopularSetsTwo = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.gift);

  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    dispatch(giftsetsProduct());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch]);

  if (status === "loading") {
    return <p>Загрузка...</p>;
  }

  if (status === "error") {
    return <p>Что-то пошло не так. Пожалуйста, попробуйте позже.</p>;
  }

  const handleAddToCart = (item) => {
    if (item.available) {
      dispatch(addToCart(item));
      toast.success(`Товар "${item.name}" добавлен в корзину!`);
    } else {
      toast.error("Товар недоступен для добавления в корзину.");
    }
  };

  return (
    <Container>
      <div>
        <h1 ref={ref} className="text-2xl sm:text-3xl font-bold text-center mt-10 sm:mt-20">
        Подарочные наборы
        </h1>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          <img
            className="hidden md:block absolute right-[-60px] top-0"
            src={LeftP}
            alt="Левая декорация"
          />
          <img
            className="hidden md:block absolute left-[-9rem]"
            src={RightP}
            alt="Правая декорация"
          />
          {items && items.length > 0 ? (
            items.map((item) => (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={cardAnimation}
              >
                <div className="p-4 bg-white rounded-lg shadow-lg">
                  <Link to={`/ProductCart/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="sm:w-[450px] w-full h-40 sm:h-60 object-cover mb-4 rounded-lg"
                    />
                  </Link>
                  <h2 className="title text-gray-900 font-bold text-sm sm:text-lg mb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-700 text-xs sm:text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <h2 className="text-pink-600 font-bold text-sm sm:text-lg">
                      {item.price} руб
                    </h2>
                    <button
                      className={`text-black font-Montserrat text-xs sm:text-base font-semibold flex items-center ${!item.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={() => handleAddToCart(item)}
                      disabled={!item.available}
                    >
                      <img className="w-4 h-4 sm:w-5 sm:h-5 mr-1" src={LogoCart} alt="Cart" />
                      {item.in_cart ? 'В корзине' : 'В корзину'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p>Нет доступных популярных наборов.</p>
          )}
        </div>
        <ToastContainer />
      </div>
    </Container>
  );
});

PopularSetsTwo.displayName = "PopularSetsTwo";

export default PopularSetsTwo;
