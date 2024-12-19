import React from "react";
import { useOutletContext } from "react-router-dom";
import Banner from "./About/ui/Banner";
import SetPage from "../SetPage/ui/SetPage";
import Sale from "../Sale/ul/Sale";
import Services from "../Services/ui/Services";
import NewProduct from "../NewProduct/ui/NewProduct";
import PopularSets from "./../PopularSets/data/ui/PopularSetsTwo";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  const { popularSetsRef } = useOutletContext();

  return (
    <div>
      <Banner />
      <SetPage />
      <Sale />
      <PopularSets ref={popularSetsRef} />
      <NewProduct />
      <Services />
      <ToastContainer />
    </div>
  );
};

export default HomePage;
