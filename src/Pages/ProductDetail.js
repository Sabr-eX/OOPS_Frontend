import React from "react"
import {useParams, useLocation} from "react-router-dom"
import productsData from "./productsData"
import "./detail.css"

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    // const {productId} = useParams()
    // const thisProduct = product.find(prod => prod.id === productId);
    
    // const location = useLocation();
    // const {product} = location.state
    // console.log(product.name);
    
    return (
        <div className="detail">
            {/* <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p> */}


            <div className="details" key={thisProduct.id}>
              <div className="big-img">
                <img src={thisProduct.url} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h1>{thisProduct.name}</h1>
                  <span class="mb-4"><s class="me-2">Rs.{thisProduct.price}</s> Rs.10</span>
                </div>

                <p>{thisProduct.description}</p>
                <p>{thisProduct.content}</p>
                <span class="mb-4">Total Products left - {thisProduct.price}</span>
                <br/>
                <br/>
                <button type="button" class="btn btn-danger mt-3">Add to cart</button>
              </div>
            </div>


        </div>
    )
}

export default ProductDetail


//on product page
// import React from "react";
// import productsData from "./productsData";
// import { Link } from "react-router-dom";
// const Products = () => {
//   const products = productsData.map(product => {
//     return (
//       <div key={product.id}>
//         <h3>
//           <Link to={`/products/${product.id}`}>{product.name}</Link>
//         </h3>
//         <p>Price: ${product.price}</p>
//         <hr />
//       </div>
//     );
//   });


//productData.js
// export default [
//   {
//     id: "1",
//     name: "Grumpy Cat Poster",
//     description: "Everyone's favorite cat who loves to hate",
//     price: 15
//   },
//   {
//     id: "2",
//     name: "Stretch Armstrong",
//     description:
//       "He bends! He stretches! He even ties in knots, but always returns to his original shape!",
//     price: 20
//   },
//   {
//     id: "3",
//     name: "Hungry Hungry Hippos Game",
//     description:
//       "It's a race, it's a chase, hurry up and feed their face! Who will win? No one knows! Feed the hungry hip-ip-pos!",
//     price: 30
//   },
//   {
//     id: "4",
//     name: "Crossfire board game",
//     description: "You'll get caught up in the crossfire!",
//     price: 35
//   }
// ];