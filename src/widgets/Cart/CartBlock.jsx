import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../shared/Container/Container";
import { increaseQuantity, decreaseQuantity, addToCart, setCart } from "./store/slice";
import { Link } from "react-router-dom";
import { Cartsa } from "./data";
import bag from "../../shared/assets/svg/bag.svg";

const CartBlock = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);

  // Загружаем корзину из localStorage при первой загрузке компонента
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart && savedCart !== "[]") {
      dispatch(setCart(JSON.parse(savedCart))); // Загружаем корзину из localStorage
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch]);

  // Сохраняем корзину в localStorage при каждом изменении cartItems
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems)); // Сохраняем корзину в localStorage
    }
  }, [cartItems]);

  if (!Array.isArray(cartItems)) {
    return <p>Ошибка: корзина не загружена.</p>;
  }

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = Number(item.price) || 0;
    const itemQuantity = Number(item.quantity) || 0;
    return total + itemPrice * itemQuantity;
  }, 0);

  return (
    <Container>
      <h2 className="text-3xl font-bold my-10 text-center">Ваша корзина</h2>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full md:w-[670px] border-2 p-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between border-b py-4">
                <div className="flex md:w-2/3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                  <div className="flex flex-col justify-between">
                    <p className="font-semibold">{item.name}</p>
                    <p className="font-semibold text-xl text-[#E7426A]">
                      {Number(item.price) * Number(item.quantity)} руб
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Корзина пуста.</p>
          )}
          <div className="flex justify-between font-semibold py-4">
            <p>Общая стоимость:</p>
            <p>{totalPrice} руб</p>
          </div>
        </div>

        <div className="w-full md:w-[443px] h-[300px] border p-4">
          <h3 className="text-xl font-semibold mb-4">Итого</h3>
          <div className="flex justify-between font-bold text-lg">
            <p>К оплате</p>
            <p>{totalPrice} руб</p>
          </div>
          <Link to={"/DecorationSet"} state={{ totalPrice }}>
            <button className="mt-20 ml-12 bg-[#E7426A] rounded text-white w-[230px] h-[50px]">
              Оформить заказ
            </button>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-center my-20">Добавить в заказ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[100px]">
          {Cartsa.map((wedding) => (
            <div key={wedding.id} className="border rounded-lg">
              <img src={wedding.image} alt={`wedding set ${wedding.id}`} />
              <p className="font-montserrat text-[18px] font-medium leading-[21.94px] text-left p-4 text-[#E7426A]">
                {wedding.price} руб
              </p>
              <div
                onClick={() => dispatch(addToCart(wedding))}
                className="border cursor-pointer border-[#EDEDF0] ml-[140px] mt-[-55px] pb-[20px] pt-[10px]"
              >
                <img className="mt-[10px] ml-[7px]" src={bag} alt="Bag" />
                <h1 className="font-montserrat cursor-pointer text-[14px] font-semibold leading-[17.07px] mt-[-20px] ml-6 text-center">
                  В корзину
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CartBlock;
