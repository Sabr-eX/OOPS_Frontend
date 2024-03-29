// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';


import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import productsReducer, { productsFetch } from "./slices/productsSlice";
import cartReducer, { getTotals } from "./slices/cartSlice";
import authReducer from "./slices/authSlice";
import { productsApi } from "./slices/productsApi";
import ordersSlice from "./slices/ordersSlice";
import usersSlice from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersSlice,
    users: usersSlice,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);