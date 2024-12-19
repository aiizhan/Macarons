import React, { useState } from "react";
import map from "../../shared/assets/svg/map.svg";
import Phone from "../../shared/assets/svg/phone.svg";
import Cart from "../../shared/assets/svg/basket.svg";
import Container from "../../shared/Container/Container.jsx";
import telegramm from "../../shared/assets/svg/telegramm.svg";
import wk from "../../shared/assets/svg/wka.svg";
import okk from "../../shared/assets/svg/okk.svg";
import { Link } from "react-router-dom";
import Logoo from "../../shared/assets/svg/logo.svg";
import { useSelector } from "react-redux";

const HeaderTwo = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Бишкек");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCity = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  const cartItems = useSelector((state) => state.cart.products);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="bg-rose-100  w-full lg:w-full md:w-full sm:w-full">
      <Container>
        <div className="flex  justify-between  items-center md:justify-center md:items-center h-[48px]">
          <h1></h1>
          <Link to="/">
            <img
              className="md:hidden block md:static lg:static lg:w-[124px]  h-[124px] sm:w-[40px] w-[40px]"
              src={Logoo}
              alt=""
            />
          </Link>
          <div className="flex gap-5  items-center ">
            <nav className="relative  hidden md:flex items-center">
              <img src={map} alt="Map icon" className="w-6 h-6" />
              <h1 className="cursor-pointer ml-2 " onClick={toggleDropdown}>
                {selectedCity}▾
              </h1>
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 bg-white border rounded shadow-lg">
                  <div className="flex flex-col">
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => selectCity("Бишкек")}
                    >
                      Бишкек
                    </button>
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => selectCity("Талас")}
                    >
                      Талас
                    </button>
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => selectCity("Нарын")}
                    >
                      Нарын
                    </button>
                  </div>
                </div>
              )}
            </nav>
            <nav className="items-center hidden md:flex">
              <img src={Phone} alt="Phone icon" className="w-6 h-6" />
              <h1 className="ml-2">+996 (505) 439 323</h1>
            </nav>

            <Link to={"/cart"}>
              <nav className="flex justify-end sm:justify-end">
                <img src={Cart} alt="Cart icon" className="w-6 h-6" />
                <h1 className="hidden sm:block">В корзине</h1>
                {totalQuantity > 0 && (
                  <span className="text-black">( {totalQuantity} товара)</span>
                )}
              </nav>
            </Link>

            <div className="hidden md:flex sm:items-end items-center gap-2">
              <Link to={"https://web.telegram.org/a/"}>
                <img src={telegramm} alt="Telegram" className="w-6 h-6" />
              </Link>
              <Link to={"https://vk.com/feed"}>
                <img src={wk} alt="VK" className="w-6 h-6" />
              </Link>
              <Link to={"https://ok.ru/"}>
                <img src={okk} alt="Odnoklassniki" className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTwo;
