import { useEffect, useState } from "react";
import Container from "../../../shared/Container/Container";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/actions";

const Sale = () => {
  const [startIndex, setStartIndex] = useState(0);
  
  const dispatch = useDispatch();
  const { sale } = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // Проверяем, есть ли данные в sale, чтобы избежать ошибки
  const numSets = sale ? Math.ceil(sale.length / 4) : 0;

  const goToSet = (index) => {
    setStartIndex(index * 4);
  };

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

  return (
    <Container>
      <div>
        <h2 className="text-center text-3xl text-slate-950 pt-20 pb-7 font-bold">
          Акции
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {sale?.slice(startIndex, startIndex + 4).map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              custom={index + 1}
              variants={cardAnimation}
              className="flex flex-col items-center"
            >
              <div className="relative mb-4">
                <img
                  className="lg:w-[270px] md:w-[300px] sm:w-[340px] h-[300px] object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute top-0 left-0 p-2">
                  <div className="bg-pink-500 text-white text-sm px-3 py-1 rounded">
                    БЕСПЛАТНАЯ ДОСТАВКА
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-pink-500 bg-opacity-50 text-white p-4">
                  <p className="text-center">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {numSets > 1 && (
          <div className="flex justify-center mt-4">
            {[...Array(numSets)].map((_, index) => (
              <div
                key={index}
                onClick={() => goToSet(index)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  startIndex === index * 4 ? "bg-pink-500" : "bg-pink-200"
                } mx-1`}
              ></div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Sale;
