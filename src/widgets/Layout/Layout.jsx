import { useEffect, useRef } from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Footer.jsx/Footer'

const Layout = () => {
  const popularSetsRef = useRef(null);
  const navigate = useNavigate();
  const handlePopular = () => {
    popularSetsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/sign-in");
  //   }
  // }, [navigate]);

  return (
    <div>
        <Header handlePopular={handlePopular}/>
        <Outlet context={{ popularSetsRef }} />
        <Footer/>
    </div>
  );
};

export default Layout;
