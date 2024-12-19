import React, { useEffect } from "react";
import Container from "../../shared/Container/Container";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Status } from "./store/slice.js";
import { createNews } from "./store/action.js";

function News() {
    const dispatch = useDispatch();
    const { newsSet, status, error } = useSelector((state) => state.news);

    useEffect(() => {
        dispatch(createNews());
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }, [dispatch]); // Added dispatch as a dependency

    if (status === Status.LOADING) {
        return <p className="text-center my-10">Загрузка новостей...</p>;
    }
    if (status === Status.ERROR) {
        return <p>Ошибка: {error}</p>;
    }

    return (
        <Container>
            <div className="text-center mt-10">
                <h3 className="text-[rgb(41, 41, 41)] font-proxima-nova text-base font-normal leading-[17px] tracking-[0%]">
                   <Link to="/">Главная</Link> &nbsp;/&nbsp; Новости
                </h3>

                <h1 className="text-[rgb(41, 41, 41)] font-montserrat text-2xl font-semibold leading-[37px] tracking-[0%] mt-4">
                    Новости
                </h1>
            </div>

            <div className="Products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:mt-10 lg:mt-12 mb-10">
                {newsSet.map((item, index) => (
                    <div className="Product max-w-xs border mx-auto" key={index}>
                        <img
                            className="w-full h-[210px] object-cover rounded-t-lg"
                            src={item.image}
                            alt={item.title} // Added alt text for accessibility
                        />
                        <div className="box-border border border-solid border-gray-300 rounded-b-lg bg-white p-4">
                            <h5 className="text-gray-600 font-Montserrat text-sm font-normal leading-5 tracking-normal text-left">
                                {item.title}
                            </h5>
                            <h2 className="text-gray-700 font-Montserrat text-base font-semibold leading-6 tracking-normal text-left mt-2">
                                {item.price} руб
                            </h2>
                            <p className="text-gray-700 font-proxima-nova text-base font-normal leading-5 tracking-normal text-left mt-2">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default News;
