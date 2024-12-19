import React from "react";
import Container from "../../shared/Container/Container";
import MacaronShopGeoLogo from "./png/MacaronShopGeoLogo.png";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <Container>
      <h2 className="mt-20 sm:mt-10 text-center">
        <Link to={"/"}>Главная</Link> &nbsp;/&nbsp; Контакты &nbsp;/&nbsp;
      </h2>

      <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full lg:w-[900px] ml-[20px] lg:ml-[100px] my-10 lg:mt-0">
        <img
          src={MacaronShopGeoLogo}
          alt="Macaron Shop Logo"
          className="w-[200px] lg:w-auto mb-4 lg:mb-0 lg:ml-0 mx-auto"
        />

        <div className="mt-6 md:mt-0 md:ml-10">
          <h1 className="text-gray-700 font-Montserrat text-xl lg:text-2xl font-semibold leading-6 lg:leading-[51px] tracking-tight text-center md:text-left">
            Контакты
          </h1>
          <br />

          <div className="mt-4">
            <h2 className="text-gray-700 font-Montserrat text-base lg:text-xl font-semibold leading-5 lg:leading-7 tracking-normal text-left">
              Производство
            </h2>
            <p className="text-gray-700 font-Proxima-Nova text-sm lg:text-base font-normal leading-relaxed tracking-normal text-left">
              Маршала Тухачевского, 22 <br />
              Время работы: с 8 до 19:30.
            </p>
            <br />
          </div>

          <div className="mt-4">
            <h2 className="text-gray-700 font-Montserrat text-base lg:text-xl font-semibold leading-5 lg:leading-7 tracking-normal text-left">
              Пункты самовывоза:
            </h2>
            <p className="text-gray-700 font-Proxima-Nova text-sm lg:text-base font-normal leading-relaxed tracking-normal text-left">
              Кафе “Морошка”. Маршала Тухачевского, 22 <br />
              (с 8 до 19:30) <br />
              Кафе “Мята”. Наб канала Грибоедова, 37 <br />
              (с 10 до 22)
            </p>
            <br />
          </div>

          <div className="mt-4">
            <h2 className="text-gray-700 font-Montserrat text-base lg:text-xl font-semibold leading-5 lg:leading-7 tracking-normal text-left">
              Телефоны:
            </h2>
            <p className="text-gray-700 font-Proxima-Nova text-sm lg:text-base font-normal leading-relaxed tracking-normal text-left">
              8 (812) 309-82-88 основной номер <br />
              8 (981) 841-85-25 для жалоб и предложений
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
