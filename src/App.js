import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerHome from "./Pages/CustomerHome";
import Cart from "./Pages/Cart";
import ProductDetail from "./Pages/ProductDetail";
import History from "./Pages/History";
import Payment from "./Pages/Payment";
import Wishlist from "./Pages/Wishlist";
import Profilepagecomponent from "./Pages/profilepage";
import Confirmation from './Pages/Confirmation';
import Wallet from "./Pages/Wallet";

import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/authSlice";

import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct";
import EditProduct from "./components/admin/EditProduct";
import ProductsList from "./components/admin/list/ProductsList";
import EditUser from "./components/admin/EditUser";
import UsersList from "./components/admin/list/UsersList";
import Navbar from "./Pages/Navbar";

import Man_Dashboard from "./components/manager/Man_Dashboard";
import Man_Products from "./components/manager/Man_Products";
import Man_Orders from "./components/manager/Man_Orders";
import Man_Summary from "./components/manager/Man_Summary";
import Man_CreateProduct from "./components/manager/Man_CreateProduct";
import Man_ProductsList from "./components/manager/Man_list/Man_ProductsList";

import Product from "./components/Details/Product";
import Order from "./components/Details/Order";
import UserProfile from "./components/Details/UserProfile";
import NavBar from "./Pages/Navbar";
import Auth from "./Pages/signin/Auth";
import Admin from "./Pages/signin/Admin";
import Manager from "./Pages/signin/Manager";
import User from "./Pages/signin/User";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadUser(null));
  // }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        {/* <NavBar /> */}
        <Routes>
          <Route path="/CustomerHome" element={<CustomerHome />} />
          <Route path="/" element={<User />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order_history" element={<History />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profilepagecomponent />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/wallet" element={<Wallet />} />

          <Route
            path="/auth"
            element={
              <div>
                <Auth />
              </div>
            }
          />
          <Route
            path="/adminsignin"
            element={
              <div>
                <Admin />
              </div>
            }
          />
          <Route
            path="/managersignin"
            element={
              <div>
                <Manager />
              </div>
            }
          />
          <Route
            path="/user"
            element={
              <div>
                <User />
              </div>
            }
          />

          <Route path="/:productId" element={<ProductDetail />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/order/:id" element={<Order />} />
          {/* <Route path="/admin/users" element={<Users />}/> */}
          <Route path="/admin" element={<Dashboard />}>
            <Route path="users/:id" element={<UserProfile />} />
            <Route path="products" element={<Products />}>
              <Route index element={<ProductsList />} />
              <Route path="create-product" element={<CreateProduct />} />
              <Route path="edit-product" element={<EditProduct />} />
            </Route>
            <Route path="summary" element={<Summary />} />

            <Route path="users" element={<Users />}>
              <Route index element={<UsersList />} />
              <Route path="edit" element={<EditUser />} />
            </Route>

            <Route path="orders" element={<Orders />} />
          </Route>

          <Route path="/manager" element={<Man_Dashboard />}>
            <Route path="products" element={<Man_Products />}>
              <Route index element={<Man_ProductsList />} />
              <Route path="create-product" element={<Man_CreateProduct />} />
              <Route path="edit-product" element={<EditProduct />} />
            </Route>
            <Route path="summary" element={<Man_Summary />} />
            <Route path="orders" element={<Man_Orders />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// "react": "^18.2.0",
// "react-dom": "^18.2.0",
// "react-router-dom": "^6.4.4",
// "react-scripts": "5.0.1",
// "web-vitals": "^2.1.4"
// "@testing-library/jest-dom": "^5.16.5",
// "@testing-library/react": "^13.4.0",
// "@testing-library/user-event": "^13.5.0",
