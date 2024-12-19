import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom"; 
import Container from "../../../../shared/Container/Container";
import Modal from "./Modal";
import { getAdditionallyItems } from "../store/actions"; 
import { addToCart } from "../../../../widgets/Cart/store/slice"; 

const Additionally = () => {
  const [onOpen, setOnOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const { totalPrice, quantities } = location.state || { totalPrice: 0, quantities: {} };

  const { additionallyItems, status } = useSelector((state) => state.additional);
  
  const [additionalQuantities, setAdditionalQuantities] = useState({});
  const [cardQuantity, setCardQuantity] = useState(0); // State for postcard quantity

  useEffect(() => {
    dispatch(getAdditionallyItems());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch]);

  const handleAdditionalQuantityChange = (id, action) => {
    setAdditionalQuantities((prev) => {
      const currentQuantity = prev[id] || 0;
      const newQuantity =
        action === "increment" ? currentQuantity + 1 : Math.max(currentQuantity - 1, 0);
      return {
        ...prev,
        [id]: newQuantity,
      };
    });
  };

  const calculateTotalAdditionalPrice = () => {
    return additionallyItems.reduce((total, item) => {
      const quantity = additionalQuantities[item.id] || 0;
      return total + item.price * quantity;
    }, 1400) + cardQuantity * 30; // Добавляем стоимость открыток
  };
  

  const calculateTotalItems = () => {
    return Object.values(additionalQuantities).reduce((total, quantity) => total + quantity, 0) + cardQuantity;
  };

  const handleAddToCart = () => {
    additionallyItems.forEach(item => {
      const quantity = additionalQuantities[item.id] || 0;
      if (quantity > 0) {
        dispatch(
          addToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity,
          })
        );
        // Reset quantity after adding to cart
        setAdditionalQuantities(prev => ({
          ...prev,
          [item.id]: 0,
        }));
      }
    });
  };

  const addCardToCart = (cardItem) => {
    if (cardQuantity > 0) {
      dispatch(
        addToCart({
          id: cardItem.id, // Unique ID of the postcard
          title: cardItem.title, // Title of the postcard
          price: cardItem.price, // Price of the postcard
          quantity: cardQuantity,
        })
      );
      setCardQuantity(0); // Resetting postcard quantity after adding
    }
  };

  const onClickBtn = () => {
    setOnOpen(true);
  };

  const closeModal = () => {
    setOnOpen(false);
  };

  if (status === "loading") {
    return <div>Loading...</div>; 
  }

  if (status === "error") {
    return <div>Error loading items</div>; 
  }

  const totalAdditionalPrice = calculateTotalAdditionalPrice();
  const totalItems = calculateTotalItems();
  const TOTAL_MACARONS = 12; // Adjust this value as needed

  return (
    <Container>
      <div className="">
        <div>
          <div className="text-center">
            <p>Главная Собрать набор Выбрать количество Выбрать вкусы</p>
            <h2 className="uppercase pt-5 font-bold">Дополнительно</h2>
          </div>

          <div className="flex mt-10 gap-4 flex-col lg:flex-row">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
              {additionallyItems.map((el) => (
                <div key={el.id} className="border-2 p-4">
                  <img
                    className="w-full h-auto mx-auto"
                    src={el.image}
                    alt={el.title}
                  />
                  <p className="text-center pt-6">{el.title}</p>
                  <hr className="my-6" />
                  <div className="flex items-center justify-between">
                    <p className="text-[#E7426A]">{el.price} руб.</p>
                    <div className="flex items-center gap-2">
                      <button
                        className="border-2 w-[30px] h-[30px] rounded flex items-center justify-center"
                        onClick={() =>
                          handleAdditionalQuantityChange(el.id, "decrement")
                        }
                      >
                        -
                      </button>
                      <span className="text-center">
                        {additionalQuantities[el.id] || 0}
                      </span>
                      <button
                        className="border-2 w-[30px] h-[30px] rounded flex items-center justify-center"
                        onClick={() =>
                          handleAdditionalQuantityChange(el.id, "increment")
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-2 w-full lg:w-[270px] h-auto">
              <span className="pl-4">{totalItems} из {TOTAL_MACARONS} шт. {totalAdditionalPrice} руб.</span>
              <div>
                {additionallyItems.map(
                  (el) =>
                    additionalQuantities[el.id] > 0 && (
                      <div key={el.id} className="flex justify-between p-4">
                        <h3>{el.title}</h3>
                        <div className="flex gap-4">
                          <button
                            className="border-2 w-[20px] h-[20px] rounded flex justify-center"
                            onClick={() =>
                              handleAdditionalQuantityChange(el.id, "decrement")
                            }
                          >
                            -
                          </button>
                          <span>{additionalQuantities[el.id]}</span>
                          <button
                            className="border-2 w-[20px] h-[20px] rounded flex justify-center"
                            onClick={() =>
                              handleAdditionalQuantityChange(el.id, "increment")
                            }
                            disabled={totalItems >= TOTAL_MACARONS}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    )
                )}
              </div>
              <hr className="my-10" />
              <div className="w-[230px] flex flex-col lg:items-start">
                <p className="text-center p-4">
                  Для продолжения количество макарон должно равняться {TOTAL_MACARONS} шт.
                </p>
                <Link to={'/cart'}>
                  <button
                    className={`bg-[#E7426A] text-white w-full ml-14 sm:w-auto lg:w-[142px] h-[40px] mb-10 rounded-sm mt-5 ${
                      totalItems < TOTAL_MACARONS ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={totalItems < TOTAL_MACARONS}
                    onClick={() => {
                      handleAddToCart(); // Добавляем все дополнительные товары
                      addCardToCart({
                        id: 'card_id', // ID открытки (замените на реальный ID)
                        title: 'Postcard', // Название открытки
                        price: 30, // Цена открытки
                      });
                    }}
                  >
                    Оформить заказ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {onOpen && <Modal closeModal={closeModal} />}
    </Container>
  );
};

export default Additionally;
