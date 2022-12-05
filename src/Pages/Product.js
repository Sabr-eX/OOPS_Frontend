import React, { Component } from 'react'
import CartList from './CartList'
import productsData from "./productsData";
import { Link } from "react-router-dom";


export default function Product({product,addToCart}){





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
//   });}
//       return(
//         <div class="container">
        


// <div class="card text-white bg-dark mb-3 " >
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img src="https://source.unsplash.com/1400x600/?Iphone12" class="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h4 class="card-title">IPhone 12<br/></h4>
//         <p class="card-text">Rs. 69,999<br/><br/></p>
//         <p class="card-text"><small class="text-muted">Rating: 4.7/5</small>
//         <button class="btn btn-outline-danger position-absolute end-0 translate-middle-x" onClick={() => addToCart(productItem)}>Add to Cart</button>
//         {/* <button class="btn btn-outline-success">View Description</button> */}
//         </p>
        
//       </div>
//     </div>
//   </div>
// </div>
//         </div>



//       )  



return (
  <div className='flex'>
      {
          // product.map((productItem, productIndex) => {
          //     return (
                  // <div style={{ width: '33%' }}>
                  //     <div className='product-item'>
                  //         <img src={productItem.url} width="100%" />
                  //         <p>{productItem.name} | {productItem.category} </p>
                  //         <p> {productItem.seller} </p>
                  //         <p> Rs. {productItem.price} /-</p>
                  //         <button
                  //             onClick={() => addToCart(productItem)}
                  //         >Add To Cart</button>
                  //     </div>
                  // </div>

productsData.map(product => {
    return (
//       <div key={product.id}>
//         <h3>
//           <Link to={`/products/${product.id}`}>{product.name}</Link>
//         </h3>
//         <p>Price: ${product.price}</p>
//         <hr />
//       </div>
//     );
//   });}
                  
  <div className="container">

<div className="card mb-3 " >
  <div className="row g-0">
    <div className="col-4">
      <img src={product.url}  width="400" height="200"   alt="..."/>
    </div>
    <div className="col-6">
      <div className="card-body">
        <div key={product.id}>
        <h4 className="card-title">
        <Link to={`/${product.id}`}>{product.name}</Link><br/></h4></div>
        <p className="card-text">Rs. {product.price}<br/></p>
        <p className="card-text">
        {product.description}
        {/* <small class="text-muted">Rating: 4.7/5</small> */}
        
        
        </p>
        
      </div>

      </div>

      <div className='col-2'>
          
        <button className="btn btn-outline-success mt-5">Add to Wishlist</button> 

        <button className="btn btn-outline-danger position-absolute end-0 bottom-0 translate-middle-x mb-5" onClick={() => addToCart(product)}>Add to Cart</button>
        

        </div>
        </div>

        
    
    
  </div>


  
</div>




              )
          })
      }
  </div>
)


}