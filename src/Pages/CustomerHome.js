import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Pagination from './Pagination'
import ToTopBtn from './ToTopBtn'
import Footer from './Footer'
import Product from './Product'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

export default function CustomerHome() {
  const cartfromlocal = JSON.parse(localStorage.getItem("cart") || "[]")

  // const [product, setProduct] = useState(
  //   [
  //     {
  //       id:1,
  //       url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
  //       name: 'TRQ White Shoes',
  //       category: 'Shoes',
  //       seller: 'AMZ Seller Ghz',
  //       price: 1999,
  //       description: "Lorem Ipsum",
  //     },
  //     {
  //       id:2,
  //       url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
  //       name: 'LOREM Watch Black',
  //       category: 'Watches',
  //       seller: 'Watch Ltd Siyana',
  //       price: 2599,
  //       description: "Lorem Ipsum",
  //     },
  //     {
  //       id:3,
  //       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
  //       name: 'AMZ Laptop 8GB RAM',
  //       category: 'Laptops',
  //       seller: 'Delhi Laptops',
  //       price: 50000
  //     },
  //     {
  //       id:4,
  //       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
  //       name: 'Security Camera',
  //       category: 'CCTV',
  //       seller: 'Camron LTD',
  //       price: 4000,
  //       description: "Lorem Ipsum",
  //     },
  //     {
  //       id:5,
  //       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
  //       name: 'Watch Pink',
  //       category: 'Watches',
  //       seller: 'Watch Ltd',
  //       price: 2000,
  //       description: "Lorem Ipsum",
  //     },
  //     {
  //       id:6,
  //       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
  //       name: 'Cup red Color',
  //       category: 'Cup',
  //       seller: 'ABS Ltd',
  //       price: 100,
  //       description: "Lorem Ipsum",
  //     },
  //   ]
  //   )

  const [product, setProduct] = useState();

  useEffect(() => {
    const getProducts = async () => {
      await axios.get('https://gada-electronics.up.railway.app/products/all')
        .then((res) => { setProduct(res?.data); });
    }
    getProducts();
  }, [])

  const [cart, setCart] = useState(cartfromlocal);
  const [showCart, setShowCart] = useState(false)

  const addToCart = async (data) => {
    // Check if the product is already in the cart
    const isProductInCart = cart.find((item) => item.id === data.id);

    if (isProductInCart) {
      // If the product is already in the cart, increase the quantity
      setCart(
        cart.map((item) =>
          item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the product is not in the cart, add it to the cart
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  const handleShow = (value) => {
    setShowCart(value)
  }




  return (
    <div>
      <Navbar count={cart.length}
        handleShow={handleShow}></Navbar>
      <br />
      <div>
        
        <Carousel />
        <br />
        <br />
        <br />
        <br />
        <Product product={product} addToCart={addToCart} ></Product>
        <ToTopBtn />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <Pagination /> */}
      </div>
      <Footer />



    </div>
  )
}
