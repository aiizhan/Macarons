import React from "react";
import like from "../../shared/assets/svg/like.svg";
import burger from "../../shared/assets/svg/burger.svg";
import inst from "../../shared/assets/svg/inst.svg";
import face from "../../shared/assets/svg/face.svg";
import tvi from "../../shared/assets/svg/tvi.svg";
import water from "../../shared/assets/svg/water.svg";
import Container from "../../shared/Container/Container";

function Footer() {
  return (
    <div className="bg-[#EBEDEE] w-full">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 py-8 border-t">
          
          {/* Left Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-center md:flex-row md:gap-14">
              {/* Block 1 */}
              <div className="flex flex-col items-center md:items-center sm:items-start text-center sm:text-center">
                <img className="w-12 h-12 mb-2" src={like} alt="Like" />
                <h5 className="text-xs sm:text-sm md:text-base leading-snug">
                  Готовим вручную <br />и с любовью
                </h5>
              </div>

              {/* Block 2 */}
              <div className="flex flex-col items-center md:items-center sm:items-start text-center sm:text-center">
                <img className="w-12 h-12 mb-2" src={burger} alt="Burger" />
                <h5 className="text-xs sm:text-sm md:text-base leading-snug">
                  Доставим в <br />день заказа
                </h5>
              </div>

              {/* Block 3 */}
              <div className="flex flex-col items-center md:items-center sm:items-start text-center sm:text-center">
                <img className="w-8 h-12 mb-2 " src={water} alt="Water" />
                <h5 className="text-xs sm:text-sm md:text-base leading-snug">
                  100% миндальная мука <br />и натуральные <br /> ингредиенты
                </h5>
              </div>
            </div>

            {/* Address Section */}
            <div className="text-center sm:text-center md:text-left">
              <h6 className="text-xs sm:text-center md:text-base">
                © 2021 Макароншоп <br />
                ООО "Квантум", Санкт-Петербург, улица Маршала Тухачевского, дом 22
              </h6>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">
            {/* Info Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-lg font-bold uppercase mb-4">Информация</h1>
              <h5 className="text-xs sm:text-sm md:text-base">
                О компании <br />
                Гарантии вкуса и свежести <br />
                Доставка и оплата <br />
                Контакты
              </h5>
            </div>

            {/* Catalog Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-lg font-bold uppercase mb-4">Каталог</h1>
              <h5 className="text-xs sm:text-sm md:text-base">
                Готовые наборы <br />
                Собрать свой набор <br />
                Свадебные предложения <br />
                Акции
              </h5>
            </div>

            {/* Contact Section */}
            <div className="text-center lg:text-left space-y-4">
              <h1 className="text-lg font-bold">+7 (812) 309 82 88</h1>
              <h5 className="text-xs sm:text-sm md:text-base">с 9:00 до 21:00</h5>
              <div className="flex justify-center lg:justify-start gap-4">
                <img className="w-6 h-6" src={inst} alt="Instagram" />
                <img className="w-6 h-6" src={face} alt="Facebook" />
                <img className="w-6 h-6" src={tvi} alt="TVI" />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default Footer;
