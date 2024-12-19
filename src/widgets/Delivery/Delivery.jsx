import React, { useEffect } from 'react';
import Container from "../../shared/Container/Container";
import Bike from "./data/Bike.svg";
import Picture from "./data/Picture.svg";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Delivery() {
  useEffect(() => {
    const map1 = L.map("map1").setView([51.505, -0.09], 11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map1);

    return () => {
      map1.remove();
    };
  }, []);

  return (
    <Container>
      <div className='flex justify-between items-center w-[1200px] m-[0 auto] mt-[200px]'>
        <img src={Bike} alt="Bike" className='w-[612px] h-[505.76px] mt-[10px]' />
        <div className='mt-[-150px]'>
          <h1 className='text-gray-900 text-4xl font-semibold leading-[51px] text-left'>Доставка и оплата</h1>
          <p className='text-[#292929] font-proxima text-[18px] font-semibold leading-[130%] tracking-normal text-left'>
            Для наших покупателей доступны 2 способа <br />
            доставки: <br /> курьерская доставка по Санкт-Петербургу в пределах КАД и самовывоз.
          </p>
          <br />
          <h4 className='text-[#292929] text-[18px] font-medium leading-[22px] text-left'>Курьерская доставка:</h4>
          <br />
          <p className='text-[#292929] text-[16px]'>
            Курьеры работают каждый день с 11 до 21 часа. <br />
            Доставка макарон осуществляется только по <br />
            Санкт-Петербургу в пределах кольцевой автомобильной <br />
            дороги (КАД). <span className='text-red-600'>Точная зона доставки.</span> <br />
            Если Вы готовы принять заказ в интервале с 12 до 17 <br />
            часов <br /> или с 17 до 21 часа, то доставка будет стоить 300 рублей. <br />
            При заказе от 3000 рублей доставка БЕСПЛАТНАЯ. <br />
            При оформлении заказа до 15 часов возможна доставка <br />
            в тот же день в промежутке с 17 до 21 часа. <br />
            Курьер предупредит Вас о своём прибытии за 30-40 <br />
            минут.
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center w-[1000px] m-[0 auto] mt-[100px] ml-[70px]'>
        <div>
          <h2 className='text-gray-900 text-lg font-medium text-left'>Самовывоз</h2>
          <p className='text-gray-900 text-base leading-[1.3] text-left'>
            Вы можете сделать заказ и забрать его самостоятельно с <br />
            нашего производства по адресу: ул. Маршала <br />
            Тухачевского 22 БЦ "Сова" <br /> <br />
            Заказ необходимо сделать до 20 часов, чтобы забрать его <br />
            на следующий день в пункте самовывоза в любое удобное <br />
            время в промежутке с 13 до 22 часов. <br /><br />
            Оплатить заказ банковской картой можно заранее при <br />
            оформлении. Непосредственно при получении <br />
            банковской картой расплатиться нельзя.
          </p>
          <br /><br />
          <h2 className='text-gray-900 text-lg font-medium text-left'>Оплата</h2>
          <p className='text-gray-900 text-base leading-[1.3] text-left'>
            Вы можете оплатить заказ при получении наличными или <br />
            заранее оплатить заказ банковской картой. <br />
            Для этого укажите выбранный способ при оформлении <br />
            заказа. <br /><br />
            Оплата банковской картой удобна, если вы хотите <br />
            отправить десерты в подарок или не желаете возиться с <br />
            наличными при получении заказа. <br /><br />
            Если у Вас нет карты российского банка, мы можем <br />
            принять оплату через платёжную систему PayPal.
          </p>
        </div>
        <img src={Picture} alt="Picture" className='w-[321.02px] h-[370.09px]' />
      </div>
      <div id="map1" className='h-[387px] w-[1519px] ml-[-160px] mt-[100px]'></div>
    </Container>
  );
}

export default Delivery;
