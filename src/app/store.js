import { configureStore } from "@reduxjs/toolkit";


import giftSlice from "../features/PopularSets/store/slice";
import readykitsSlice from "../features/ProductSet/store/slice";
import WeddingSetSlice from "../features/WeddingSet/store/slice";
import cartSlice from "../widgets/Cart/store/slice";
import assembleSetsSlice from "../features/Assemble/store/assembleSetsSlice";
import chooseSlice from "../features/Assemble/AssembleDetail/store/Slice";
import addSlice from "../features/Assemble/AssembleDetail/store/addSlice";
import cartReducer from "../features/Assemble/AssembleDetail/store/cartReducer";
import macItemsSlice from "../features/Assemble/store/macItemsSlice";
import productReducer from "../widgets/ProductForm/store/ProductSlice";
import saleSlice from "../features/Sale/store/SaleSlice";
import newsSlice from '../widgets/News/store/slice.js'

import orderReducer from '../features/decorationSet/store/orderSlice.js';
import newsFormSlice from '../widgets/NewsForm/store/slice.js';

import authSlice from '../features/SignIn/store/slice.js';


export const store = configureStore({
  reducer: {
    gift: giftSlice,
    ready: readykitsSlice,
    wedding: WeddingSetSlice,
    macItems: macItemsSlice,
    choose: chooseSlice,
    additional: addSlice,
    addCart: cartReducer,
    assembless: assembleSetsSlice,
    cart: cartSlice,
    products: productReducer,
    sales: saleSlice,


 
    auth:authSlice,
    order: orderReducer,

    newsForm: newsFormSlice,
    news: newsSlice, // Добавьте newsSlice в редюсеры
  },
});

