import React from "react";
import Prosent from "../../shared/assets/svg/sale.svg";
import Logoo from "../../shared/assets/svg/logo.svg";
import Container from "../../shared/Container/Container";
import line from "../../shared/assets/svg/line.svg";
import liner from "../../shared/assets/svg/lineR.svg";
import { Link } from "react-router-dom";

const HeaderLogo = ({ handlePopular }) => {

  
  return (
    <div>
      <Container>
        <div className="lg:h-[100px] mt-10 w-full lg:flex-row lg:items-end">
          <div className="  flex gap-2 md:justify-center">
            <div className="flex items-center  gap-1  pb-1  ">
              <div className="md:block hidden">
                <nav>
                  <Link to={"/Contact"}>
                    <h1>Контакты</h1>
                  </Link>
                </nav>
              </div>
              <div className="md:block hidden">
                <nav>
                  <Link to={"/Assemble"}>
                    <h1>Собрать набор</h1>
                  </Link>
                </nav>
              </div>
            </div>

            <div>
              <nav className="md:flex hidden  items-center  pt-[48px]">
                <h1 className="cursor-pointer" onClick={handlePopular}>
                  Сладкие дни
                </h1>
              </nav>
            </div>
            <div className="flex gap-5 sm:relative md:static lg:static">
              {" "}
              {/* relative на sm, но static на md и больше */}
              <img className="w-[160px] lg:block hidden" src={line} alt="" />
              <Link to="/">
                <img
                  className="sm:absolute hidden md:block  right-0 sm:bottom-[300px] left-80 md:static lg:static lg:w-[124px] h-[124px] sm:w-[70px] w-[50px]"
                  src={Logoo}
                  alt=""
                />

                {/* absolute на sm, но static на md и больше */}
              </Link>
              <img className="w-[160px] lg:block hidden" src={liner} alt="" />
            </div>

            <div className="md:flex hidden items-center gap-3 ">
              <Link to={"/giftSet"}>
                <h1>Подарочные наборы</h1>
                
              </Link>
              <Link to="/garant">
                <p>Гарантия свежести</p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderLogo;
