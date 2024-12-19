import { useState } from "react";
import Container from "../../../shared/Container/Container";
import left from "../../../shared/assets/svg/arrow-left.svg";
import pay from "../../../shared/assets/svg/pay.svg";

const PaymentSet = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [errorCardNumber, setErrorCardNumber] = useState("");
    const [errorExpiry, setErrorExpiry] = useState("");
    const [errorCvc, setErrorCvc] = useState("");
    const [showReceipt, setShowReceipt] = useState(false);

    const handleCardNumberChange = (e) => {
        const input = e.target.value;
        const formattedInput = input.replace(/\D/g, "");
        setCardNumber(formattedInput);
    };

    const handleExpiryChange = (e) => {
        const input = e.target.value;
        const formattedInput = input.replace(/[^0-9\/]/g, "");

        if (formattedInput.length === 2 && !formattedInput.includes("/")) {
            setExpiry(formattedInput + "/");
        } else if (formattedInput.length <= 5) {
            setExpiry(formattedInput);
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formattedInput) && formattedInput.length === 5) {
            setErrorExpiry("Введите действительную дату в формате MM/YY.");
        } else {
            setErrorExpiry("");
        }
    };

    const handleCvcChange = (e) => {
        const input = e.target.value;
        const formattedInput = input.replace(/\D/g, "");
        setCvc(formattedInput);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasError = false;

        if (cardNumber === "") {
            setErrorCardNumber("Заполните это поле.");
            hasError = true;
        } else {
            setErrorCardNumber("");
        }

        if (expiry === "") {
            setErrorExpiry("Заполните это поле.");
            hasError = true;
        } else {
            setErrorExpiry("");
        }

        if (cvc === "") {
            setErrorCvc("Заполните это поле.");
            hasError = true;
        } else {
            setErrorCvc("");
        }

        if (!hasError) {
            setShowReceipt(true);
        }
    };

    return (
        <div className="bg-[#f7f7f7] w-full">
            <Container>
                <img className="ml-[-6px]" src={left} alt="Back arrow" />
                <div className="flex justify-between my-12">
                    <h1 className="font-montserrat text-2xl font-semibold leading-[39.01px] text-left text-[#000000]">
                        1500,00 C{" "}
                        <span className="font-montserrat text-xl font-semibold leading-[29.26px] text-left text-[#989898]">
                            ~C 1 500
                        </span>
                    </h1>
                    <h2 className="font-montserrat text-lg font-semibold leading-[24.38px] text-left text-[#4E9DD3]">
                        Детали платежа
                    </h2>
                </div>

                <div className="w-[400px] my-6 h-[77px] p-2.5 flex items-center rounded-[15px] bg-[#E6EBF0]">
                    <img src={pay} alt="Payment icon" />
                    <div className="ml-4 flex flex-col">
                        <h1 className="font-montserrat text-lg font-medium leading-[24.38px] text-left text-[#000000]">
                            Банковская карта
                        </h1>
                        <p className="font-montserrat text-lg font-normal leading-[24.38px] text-left text-[#989898] mt-1">
                            Visa
                        </p>
                    </div>
                </div>

                <div className="w-[530px] h-[396px] rounded-[15px] p-8 bg-white relative ml-[670px] mt-[-101px]">
                    <h1 className="font-montserrat text-lg font-semibold leading-[24.38px] text-left mb-[60px]">
                        Оплата картой
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                placeholder="Номер карты"
                                className={`w-[470px] h-[64px] bg-[#EDF2F8] px-4 border font-montserrat text-base font-normal leading-[19.5px] text-left ${errorCardNumber ? "border-red-500" : "border-[#E6EBF0]"
                                    } rounded-[10px] text-lg font-medium leading-[24px] text-[#000000] placeholder:text-[#B0B0B0] outline-none focus:bg-[#FFEBE4] focus:border-[#FFEBE4] focus:ring-0`}
                                maxLength={16}
                            />
                            {errorCardNumber && (
                                <p className="text-red-500 font-montserrat text-base font-medium leading-[19.5px] text-left mt-1">
                                    {errorCardNumber}
                                </p>
                            )}
                        </div>
                        <div className="flex">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={expiry}
                                    onChange={handleExpiryChange}
                                    placeholder="MM/YY"
                                    className={`w-[225px] h-[64px] bg-[#EDF2F8] px-4 border font-montserrat text-base font-normal leading-[19.5px] text-left ${errorExpiry ? "border-red-500" : "border-[#E6EBF0]"
                                        } rounded-[10px] text-lg font-medium leading-[24px] text-[#000000] placeholder:text-[#B0B0B0] outline-none focus:bg-[#FFEBE4] focus:border-[#FFEBE4] focus:ring-0`}
                                    maxLength={5}
                                />
                                {errorExpiry && (
                                    <p className="text-red-500 font-montserrat text-base font-medium leading-[19.5px] text-left mt-1">
                                        {errorExpiry}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4 ml-[20px]">
                                <input
                                    type="text"
                                    value={cvc}
                                    onChange={handleCvcChange}
                                    placeholder="CVC/CVV"
                                    className={`w-[225px] h-[64px] bg-[#EDF2F8] px-4 border font-montserrat text-base font-normal leading-[19.5px] text-left ${errorCvc ? "border-red-500" : "border-[#E6EBF0]"
                                        } rounded-[10px] text-lg font-medium leading-[24px] text-[#000000] placeholder:text-[#B0B0B0] outline-none focus:bg-[#FFEBE4] focus:border-[#FFEBE4] focus:ring-0`}
                                    maxLength={3}
                                />
                                {errorCvc && (
                                    <p className="text-red-500 font-montserrat text-base font-medium leading-[19.5px] text-left mt-1">
                                        {errorCvc}
                                    </p>
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-[470px] h-[64px] bg-blue-500 text-white py-2 px-4 rounded-[10px] text-lg font-medium leading-[24px] hover:bg-blue-600"
                        >
                            Оплатить
                        </button>
                    </form>

                    {showReceipt && (
                        <>
                            <div className="fixed inset-0  bg-[#ADADAD] opacity-50 z-20"></div>
                            <div className="absolute w-[500px] bg-white rounded-lg p-6 max-w-md mt-[-400px] mx-[-220px] shadow-[0_4px_6px_#0000004D] z-20">
                                <button onClick={() => setShowReceipt(false)} className="absolute top-2 right-2">
                                    X
                                </button>
                                <div className="text-lg font-bold mb-4">Магазин:</div>
                                <div className="mb-6">Макарошоп_зефир</div>
                                <div className="text-lg font-bold mb-2">Описание заказа:</div>
                                <div className="mb-6">Заказ номер 22337</div>
                                <div className="text-lg font-bold mb-2">Состав заказа:</div>
                                <div className="mb-2">
                                    Подарочный набор на Девичник
                                    <div className="flex justify-between">
                                        <span>Цены позиции:</span>
                                        <span>1 500,00 с</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Количество:</span>
                                        <span>x 1</span>
                                    </div>
                                </div>

                                <div className="mt-4 mb-6">
                                    Дополнения к заказу
                                    <div className="flex justify-between">
                                        <span>Цены позиции:</span>
                                        <span>00,00 с</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Количество:</span>
                                        <span>x 1</span>
                                    </div>
                                </div>

                                <div className="text-lg font-bold flex justify-between mt-6">
                                    <span>К оплате:</span>
                                    <span>1 500 с</span>
                                </div>
                                <div className="mt-2 text-sm">Оплатите до 1 август 18:46</div>
                            </div>
                        </>
                    )}
                </div>

                <h4 className="font-montserrat ml-[670px] mt-[30px] text-[14.9px] font-medium leading-[18.16px] text-center text-[#727272]">
                    Нажимая кнопку {'<Оплатить>'}, вы соглашаетесь с Распоряжением, <br />
                    Публичной офертой и даёте Согласие на обработку <br />
                    персональных данных
                </h4>
            </Container>
        </div>
    );
};

export default PaymentSet;
