import { createBrowserRouter } from "react-router-dom";
import Layout from "./../../widgets/Layout/Layout";
import ErrorPage from "./../../widgets/ErrorPage/ErrorPage";
import HomePage from "./../../features/HomePage/HomePage";
import ProductSet from "./../../features/ProductSet/ui/ProductSet";
import GiftSets from "./../../features/GiftSets/UI/GiftSets";
import Garant from "./../../features/garant/Garant";
import Contact from "./../../widgets/Contact/Contact";
import News from "./../../widgets/News/News";
import CartBlock from "./../../widgets/Cart/CartBlock";
import PopularSets from "../../features/PopularSets/data/ui/PopularSetsTwo";
import ProductCart from "./../../features/ProductCart/ui/ProductCart";
import DecorationSet from "./../../features/decorationSet/ui/DecorationSet";
import NewProduct from "../../features/NewProduct/ui/NewProduct";
import Assemble from "../../features/Assemble/ui/Assemble";
import AssembleDetail from "../../features/Assemble/AssembleDetail/ui/AssembleDetail";
import Additionally from "../../features/Assemble/AssembleDetail/ui/Additionally";
import Dashboard from "../../widgets/Dashboard/ui/Dashboard";
import Delivery from "../../widgets/Delivery/Delivery";
// import PaymentSet from "./../../features/Payment/ui/Payment";
import WeddingSetPage from "./../../features/WeddingSet/UI/WeddingSetPage";
import Sale from "../../features/Sale/ul/Sale";
import SignIn from "../../features/SignIn/ui/SignIn";
import ForgotPassword from "../../features/SignIn/ui/ForgotPassword";
import ResetPassword from "../../features/SignIn/ui/ResetPassword";
import SetNewPassword from "../../features/SignIn/ui/SetNewPassword";
import SignUp from "../../features/SignIn/ui/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/productSet", element: <ProductSet /> },
      { path: "/giftSet", element: <GiftSets /> },
      { path: "/garant", element: <Garant /> },
      { path: "/contact", element: <Contact /> },
      { path: "/news", element: <News /> },
      { path: "/cart", element: <CartBlock /> },
      { path: "/popularSets", element: <PopularSets /> },
      { path: "/productCart/:id", element: <ProductCart /> },
      { path: "/decorationSet", element: <DecorationSet /> },
      { path: "/new", element: <NewProduct /> },
      { path: "/sale/:id", element: <Sale /> },
      { path: "/Assemble", element: <Assemble /> },
      { path: "/weddingSet", element: <WeddingSetPage /> },
      { path: "/assembleDetail/:id", element: <AssembleDetail /> },
      { path: "/additionally", element: <Additionally /> },
      { path: "/delivery", element: <Delivery /> },
    ],
  },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/set-new-password", element: <SetNewPassword /> },
  { path: "/dashboard", element: <Dashboard /> },
]);


export default router;
