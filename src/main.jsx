import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/App.css";
import { RouterProvider } from "react-router-dom";
import router from "./app/router/Router";
import { Provider } from "react-redux";
import { store } from "./app/store";
import './app/styles/index.css'
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
