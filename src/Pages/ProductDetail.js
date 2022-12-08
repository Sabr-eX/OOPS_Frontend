import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom";
import "./detail.css"
import Navbar from "./Navbar";

function ProductDetail() {
  let {state} = useLocation();
  const product = state["product"];

    return (
        <div className="detail">
        <Navbar/>
            <div className="details">
              <div className="big-img">
                <img src={product.image} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h1>{product.name}</h1>
                  <span class="mb-4"><s class="me-2">Rs.{product.price}</s>{(product.price)}</span>
                </div>

                <p>{product.description}</p>
                <p>{product.content}</p>
                <span class="mb-4">Total Products left - {product.quantity}</span>
                <br/>
                <br/>
                {/* <button type="button" class="btn btn-danger mt-3 mr-3">Add to cart</button> */}
                <button type="button" class="btn btn-danger mt-3">Add to cart</button>
              </div>
            </div>


        </div>
    )
}

export default ProductDetail