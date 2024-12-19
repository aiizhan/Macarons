import {useState} from "react";
import Container from "../../../shared/Container/Container";
import bus from "../../../shared/assets/svg/bus.svg";
import hand from "../../../shared/assets/svg/hand.svg";
import "../../../app/styles/App.css";
import {useDispatch, useSelector} from 'react-redux';
import {createOrder} from './../store/orderActions.js';
import {useLocation} from "react-router-dom";

const DecorationSet = () => {
    const [checkedtwo, setCheckedtwo] = useState(false);
    const dispatch = useDispatch();
    const {loading, error, order} = useSelector((state) => state.order);

    const location = useLocation();
    const {totalPrice} = location.state || {totalPrice: 0};

    const DELIVERY_COST =400

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        delivery_method: 'courier',
        address: '',
        delivery_date: '',
        delivery_time: '',
        comments: '',
        payment_method: 'online',
        order_total: totalPrice + DELIVERY_COST,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangedd = () => {
        const isCourier = !checkedtwo; // проверяем, выбирается ли курьерская доставка

        setCheckedtwo(isCourier);
        setFormData({
            ...formData,
            delivery_method: isCourier ? 'courier' : 'pickup',
            order_total: isCourier ? totalPrice + DELIVERY_COST : totalPrice,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createOrder(formData));
    };

    return (
        <div className=" bg-[#f7f7f7]  mt-20">
            <Container>
                <h1 className="flex justify-center">Главная &nbsp;/&nbsp;
                    <span className="text-[#4E9DD3]">Оформление заказа</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="">

                        <h1 className="font-montserrat mt-5 text-[30px] font-semibold text-center">
                            Доставка
                        </h1>
                        <p className="font-proxima text-[16px] font-normal leading-[22px] text-center">
                            Укажите контактные данные и выберите способ доставки
                        </p>

                        <div className="ml-5 flex s:flex-col s:items-center md:flex-row gap-5 mt-5">
                            <div>
                                <p className="font-proxima text-[14px] font-normal leading-[17.05px]">
                                    Ваше имя*
                                </p>
                                <input
                                    className="w-[270px] h-[50px] mt-[15px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none pl-2"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Укажите имя"
                                    required
                                />
                            </div>

                            <div>
                                <p className="font-proxima text-[14px] font-normal leading-[17.05px]">
                                    Телефон*
                                </p>
                                <input
                                    className="w-[270px] h-[50px] mt-[15px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none pl-2"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+996 (___) ___-__-__"
                                    required
                                />
                            </div>
                        </div>

                        <p className="font-proxima text-[14px] font-normal  mb-1 mt-5 s:ml-11 md:ml-5">Способ доставки:</p>

                        <div className="flex items-center gap-5 ml-5 s:flex-col s:items-center md:flex-row">
                            <button
                                type="button"
                                onClick={handleChangedd}
                                className={`w-[270px] border ${checkedtwo ? "border-[#E7426A]" : "border-[#EDEDF0]"} rounded-[5px] text-black font-montserrat text-center bg-white p-[15px]`}>
                                <img src={bus} alt="delivery icon"/>
                                <p className="mt-[-35px] ml-12 font-montserrat text-[14px] font-semibold leading-[17.07px]">
                                    Курьерская доставка
                                </p>
                                <span
                                    className="font-montserrat text-[14px] font-semibold leading-[17.07px] text-[#E7426A] ml-[-45px]">
                                    400 руб.
                                </span>
                            </button>


                            <button
                                type="button"
                                onClick={handleChangedd}
                                className={`w-[270px] border ${!checkedtwo ? "border-[#E7426A]" : "border-[#EDEDF0]"} rounded-[5px] text-black font-montserrat  bg-white p-[10px]`}>
                                <img src={hand}/>
                                <p className="mt-[-45px] ml-[-40px] font-montserrat text-[14px] font-semibold leading-[17.07px]">
                                    Самовывоз
                                </p>
                                <span
                                    className="font-montserrat text-[14px] mt-7 font-semibold leading-[17.07px] text-[#E7426A] ml-[-45px]">
                                    Бесплатно
                                </span>
                            </button>
                        </div>


                        <div className="ml-5 mt-5">
                            <p className="font-proxima text-[14px] font-normal mb-3 s:ml-7 md:ml-[1px]">Адрес доставки</p>
                            <input
                                className=" s:w-[270px] s:ml-7 md:w-[550px] md:ml-[1px] h-[76px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none pl-2 pb-10"
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Не нужно заполнять при самовывозе"/>
                        </div>

                        <div className="flex gap-5 ml-5 mt-5 s:flex-col s:items-center md:flex-row">

                            <div className="">
                                <p className="font-proxima text-[14px] font-normal">Дата получения</p>
                                <input
                                    className="w-[270px] h-[50px] mt-[15px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none"
                                    type="date"
                                    name="delivery_date"
                                    onChange={handleChange}
                                    value={formData.delivery_date}/>
                            </div>

                            <div className="">
                                <p className="font-proxima text-[14px] font-normal ">Время</p>
                                <input
                                    className="w-[270px] h-[50px] mt-[15px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none"
                                    type="time"
                                    name="delivery_time"
                                    value={formData.delivery_time}
                                    onChange={handleChange}/>
                            </div>
                        </div>

                            <div className="ml-5 mt-5 ">
                                <p className="font-proxima text-[14px] font-normal  mb-3 s:ml-7 md:ml-[1px]">
                                    Комментарий к заказу
                                </p>
                                <input
                                    className="md:w-[550px] md:ml-[1px] s:w-[270px] s:ml-6 h-[76px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none pl-2 pb-10 placeholder-multiline"
                                    type="text"
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    placeholder="Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое."
                                />
                            </div>

                            <div className="ml-5 mt-5 ">
                                <p className="font-proxima text-[14px] font-normal mb-5 s:ml-7 md:ml-[1px] md:flex md:items-center">Метод оплаты</p>

                                <div className="flex items-center s:flex-col s:items-center md:flex-row ">
                                    <label className="s:mr-[72px] md:mr-[10px] ">
                                    <span
                                        className="font-montserrat text-[14px] font-semibold flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="payment_method"
                                            value="online"
                                            checked={formData.payment_method === "online"}
                                            onChange={handleChange}
                                        />
                                        Оплата картой онлайн
                                    </span>
                                    </label>

                                    <label className="s:mr-[110px]">
                                    <span
                                        className="ml-4 font-montserrat text-[14px] font-semibold flex items-center gap-1">
                                        <input
                                            type="radio"
                                            name="payment_method"
                                            value="cash"
                                            checked={formData.payment_method === "cash"}
                                            onChange={handleChange}
                                        />
                                        Оплата наличными
                                    </span>
                                    </label>
                                </div>
                            </div>


                        <hr className="w-[570px] mt-5 ml-5 s:w-[280px] md:w-[550px] s:ml-12 md:ml-6"/>
                        <div className="flex mt-5 ml-5 s:flex-col s:items-center md:flex-row">
                            <h1 className="font-proxima text-[14px] font-normal mb-5 s:ml-6 md:w-[300px] ">
                                Итоговая сумма заказа вместе с доставкой:
                            </h1>
                            <h1 className="font-montserrat text-[14px] font-semibold text-[#E7426A] ml-[200px] s:mr-[140px] s:flex s:w-full">
                                {formData.order_total} сом
                            </h1>
                        </div>
                        <hr className="w-[570px] s:w-[280px] md:w-[550px] s:ml-12 md:ml-6"/>


                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#E7426A] rounded-[10px] px-[50px] py-[10px] text-white font-bold mt-5">
                                {loading ? "Отправка..." : "Оформить заказ"}
                            </button>
                        </div>

                        {error && <p className="text-red-500">{error}</p>}
                        {order && <p className="text-green-500">Заказ успешно оформлен!</p>}
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default DecorationSet;
