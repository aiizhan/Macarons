import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg relative ">
        {children}

        <div className="w-[470px] h-[160px]">
          <div className="text-center">
            <h2 className="font-bold">Готово!</h2>
            <p>Ваш набор из 12 макарон собран и добавлен в корзину.</p>
          </div>
          <button
            onClick={onClose}
            className=" left-[33rem] text-2xl text-gray-200 bottom-[12rem] rounded absolute"
          >
            x
          </button>
          <div className="flex items-center mt-10 gap-5">
            <Link to={"/"}>
              <button className="border-blue-400 border-2 text-blue-400 w-[224px] h-[40px]">
                На главную{" "}
              </button>
            </Link>
            <Link to={"/cart"}>
              <button className="w-[224px] text-white h-[40px] bg-[#E7426A]">
                Перейти в корзину
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
