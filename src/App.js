import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerHome from './Pages/CustomerHome'
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';
import History from './Pages/History';
import Payment from './Pages/Payment';
import Wishlist from './Pages/Wishlist';
import Profilepagecomponent from './Pages/profilepage';

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
import ProductsList from "./components/admin/list/ProductsList";
import Product from "./components/Details/Product";
import Order from "./components/Details/Order";
import UserProfile from "./components/Details/UserProfile";
import NavBar from './Pages/Navbar';
import Auth from './Pages/signin/Auth';
import Admin from './Pages/signin/Admin';
import Manager from './Pages/signin/Manager';
import User from './Pages/signin/User';

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
                    <Route path ="/" element={<Auth/>} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order_history" element={<History/>}/>
                    <Route path="/payment" element={<Payment/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                    <Route path="/profile" element={<Profilepagecomponent/>}/>


                    <Route path="/auth" element={ <div><Auth /></div>} />
                    <Route path="/adminsignin" element={<div><Admin /></div>}/>
                    <Route path="/manager" element={<div><Manager /></div>}/> 
                    <Route path="/user" element={<div><User /></div>}/>


                    <Route path="/:productId" element={<ProductDetail />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/order/:id" element={<Order />} />
                    <Route path="/user/:id" element={<UserProfile />} />
                    <Route path="/admin" element={<Dashboard />}>
                        <Route path="products" element={<Products />}>
                            <Route index element={<ProductsList />} />
                            <Route path="create-product" element={<CreateProduct />} />
                        </Route>
                        <Route path="summary" element={<Summary />} />
                        <Route path="users" element={<Users />} />
                        <Route path="orders" element={<Orders />} />
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