import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../../shared/Container/Container";
import basket2 from "../../../shared/assets/svg/basket2.svg";
import group227 from "../../../shared/assets/svg/group227.svg";
import group226 from "../../../shared/assets/svg/group226.svg";
import group225 from "../../../shared/assets/svg/group225.svg";
import Tabls from "../Tabls/Tabls";
import ProductBlock from "../ProductBlock/ProductBlock";
import { fetchGiftsetById } from "../../PopularSets/store/actions";
import { Status } from "../../GiftSets/store/slice";
import { addToCart } from "../../../widgets/Cart/store/slice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";

const ProductCart = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selectedItem, status, error } = useSelector((state) => state.gift);

  useEffect(() => {
    if (id) {
      dispatch(fetchGiftsetById(id));
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch, id]);

  if (status === Status.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === Status.ERROR) {
    return <p>Something went wrong: {error}</p>;
  }

  if (!selectedItem) {
    return <p>No details found.</p>;
  }

// Добавляем проверку на наличие selectedItem
const handleAddToCart = (item) => {
  if (!item) return; // Если item не загружен, не выполняем действие
  dispatch(addToCart(item));
  toast.success(`Товар "${item.name}" добавлен в корзину!`);
};

  
  
  
  
  

  return (
    <Container>
      <div className="mt-6 md:mt-40 flex flex-col md:flex-row gap-5">
        <div className="s:flex s:flex-col-reverse md:flex md:flex-col gap-5">
          {/* Изображение товара */}
          <img
            className="w-full  md:w-[570px] lg:w-[500px] h-[250px] md:h-[430px] object-cover rounded-lg"
            src={selectedItem.image}

            alt={selectedItem.name}
          />

          {/* Описание товара */}
          <div className="flex flex-col sm:items-center md:items-start">
            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-gray-800 text-center md:text-left">
              {selectedItem.name}
            </h2>
            <p className="py-3 md:py-5 text-gray-700 text-sm md:text-base text-center md:text-left">
              {selectedItem.description}
            </p>
          </div>
        </div>

        <div className="flex-1 px-2 md:px-0">
          {/* Добавляем md:flex-row-reverse для смены местоположения на малых экранах */}
          <div className="sm:flex-col md:flex ">
            <div className="flex flex-col md:flex-col-reverse gap-4">
              {/* Секция с кнопкой "В корзину" */}
              <div className="flex flex-row justify-between border-2 rounded-xl border-gray-200 shadow p-3 md:p-5 md:gap-3 items-center">
                {/* Цена */}
                <p className="text-[#E7426A] text-lg md:text-2xl font-bold mb-3 md:mb-0">
                  {selectedItem.price}
                </p>

                {/* Кнопка "В корзину" */}
                <div className="flex gap-2 bg-[#E7426A] w-[50%] md:w-[178px] h-[45px] md:h-[50px] rounded items-center justify-center">
                  <img className="w-[16px] md:w-[18px]" src={basket2} alt="Add to basket" />
                  <button onClick={() => handleAddToCart(selectedItem)} className="text-white text-sm md:text-base">
                    В корзину
                  </button>
                </div>
              </div>

              {/* Секция с вкусами */}
              <div className="border-2 border-gray-200 rounded-xl p-3 md:p-5 flex-1">
                <h4 className="text-lg md:text-2xl font-medium text-gray-800">Вкусы:</h4>
                {Array.isArray(selectedItem.flavors) ? (
                  <ul className="list-disc pl-5 text-gray-600 text-sm md:text-base">
                    {selectedItem.flavors.map((flavor, index) => (
                      <li key={index} className="flex justify-between py-1">
                        <p>{flavor.name}</p>
                        <p>{flavor.quantity} шт.</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">Нет информации о вкусах</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 md:mt-10 space-y-4">
            <DeliveryInfo />
          </div>
        </div>
      </div>
      <div className="my-10 md:my-20 border-2 p-4 md:p-5 bg-white shadow-lg rounded">
        <Tabls />
      </div>
      <ProductBlock />
    </Container>
  );
};

const DeliveryInfo = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <img className="w-6" src={group227} alt="Delivery" />
      <p className="text-sm md:text-base text-gray-600">
        Доставка от 400 руб. в день заказа с 12 до 17 или с 17 до 21. Бесплатно
        при заказе на сумму от 2000 руб
      </p>
    </div>
    <div className="flex items-center gap-3">
      <img className="w-6" src={group226} alt="Pickup" />
      <p className="text-sm md:text-base text-gray-600">
        Самовывоз бесплатно через 3 часа после оплаты заказа
      </p>
    </div>
    <div className="flex items-center gap-3">
      <img className="w-6" src={group225} alt="Anonymous Gift" />
      <p className="text-sm md:text-base text-gray-600">
        Можем преподнести как анонимный подарок :)
      </p>
    </div>
  </div>
);

export default ProductCart;
