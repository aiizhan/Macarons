import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../../../../shared/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../widgets/Cart/store/slice";
import { assemblesetsProducts } from './../../store/actions';

const AssembleDetail = ({ totalPrice }) => {  // Получение totalPrice как пропса
  const dispatch = useDispatch();
  const location = useLocation();
  const { assembles } = useSelector((state) => state.assembless);
  const [quantities, setQuantities] = useState({});
  const TOTAL_MACARONS = 12;

  // Вы можете удалить следующий код, так как вы передаете totalPrice через пропсы
  // const totalPriceFromAssemble = location.state?.totalPrice || 0;

  useEffect(() => {
    dispatch(assemblesetsProducts());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch]);

  useEffect(() => {
    if (assembles.length > 0) {
      const initialQuantities = assembles.reduce((acc, item) => {
        acc[item.id] = 0;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    }
  }, [assembles]);

  const handleQuantityChange = (id, action) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[id] || 0;
      const newQuantity =
        action === "increment" ? currentQuantity + 1 : currentQuantity - 1;

      const totalSelected = Object.values({
        ...prevQuantities,
        [id]: newQuantity,
      }).reduce((acc, qty) => acc + qty, 0);

      if (totalSelected <= TOTAL_MACARONS && newQuantity >= 0) {
        return {
          ...prevQuantities,
          [id]: newQuantity,
        };
      }

      return prevQuantities;
    });
  };

  const addToCartHandler = (item) => {
    const quantity = quantities[item.id];
    if (quantity > 0) {
      dispatch(
        addToCart({
          id: item.id,
          title: item.the_name_of_the_taste,
          price: item.price,
          quantity,
        })
      );
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: 0,
      }));
    }
  };

  const totalItems = Object.values(quantities).reduce(
    (acc, qty) => acc + (qty || 0),
    0
  );

  const selectedItemsPrice = Object.keys(quantities).reduce((acc, id) => {
    const quantity = quantities[id];
    const item = assembles.find((el) => el.id === id);
    const itemPrice = item ? Number(item.price) : 0;
    return acc + itemPrice * (quantity || 0);
  }, 0);

  const totalPriceWithSelectedItems =
    totalPrice - selectedItemsPrice >= 0
      ? totalPrice - selectedItemsPrice
      : 0;

  return (
    <Container>
      <div className="">
        <div className="text-center">
          <p>Главная → Собрать набор → Выбрать количество → Выбрать вкусы</p>
          <h2 className="uppercase pt-5 font-bold">Выберите вкусы</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-3 w-full lg:h-[30px] lg:w-[900px]">
            {assembles.map((el) => {
              const quantity = quantities[el.id] || 0;
              return (
                <div key={el.id} className="border-2">
                  <img
                    className="w-[200px] pl-[3rem]"
                    src={el.image}
                    alt={el.title}
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-center">
                      {el.the_name_of_the_taste}
                    </h4>
                    <p className="text-center">{el.description}</p>
                    <div className="text-center flex gap-3 pl-20">
                      <button
                        onClick={() => handleQuantityChange(el.id, "decrement")}
                        disabled={quantity === 0}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(el.id, "increment")}
                        disabled={totalItems >= TOTAL_MACARONS}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-2 w-full lg:w-[340px] h-[auto] mt-3 fixed right-0 bottom-0 lg:static bg-white lg:h-[500px]">
            <h2 className="py-4 text-center">
              {totalItems} из {TOTAL_MACARONS} шт.1400 руб.
            </h2>
            <hr className="my-3" />
            <div>
              {assembles.map(
                (el) =>
                  quantities[el.id] > 0 && (
                    <div key={el.id} className="flex justify-between p-4">
                      <h3>{el.the_name_of_the_taste}</h3>
                      <div className="flex gap-4">
                        <button
                          className="border-2 w-[20px] h-[20px] rounded flex justify-center"
                          onClick={() => handleQuantityChange(el.id, "decrement")}
                        >
                          -
                        </button>
                        <span>{quantities[el.id]}</span>
                        <button
                          className="border-2 w-[20px] h-[20px] rounded flex justify-center"
                          onClick={() => handleQuantityChange(el.id, "increment")}
                          disabled={totalItems >= TOTAL_MACARONS}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )
              )}
            </div>
            <hr className="my-10  " />
            <div className="flex justify-center">
            <div className="w-[340px] flex flex-col  ">
              <p className="text-center pl-2">
                Для продолжения количество макарон должно равняться{" "}
                {TOTAL_MACARONS} шт.
              </p>
              <Link to={totalItems === TOTAL_MACARONS ? "/Additionally" : "#"}>
              <div className="flex  justify-center  ">
                <button
                  className={`bg-[#E7426A] text-white  w-[230px]  sm:w-[130px] lg:w-[222px] h-[40px] rounded-sm mt-5 ${
                    totalItems < TOTAL_MACARONS
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={totalItems < TOTAL_MACARONS}
                >
                  Оформить заказ
                </button>

              </div>
              </Link>
            </div>

            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AssembleDetail;
