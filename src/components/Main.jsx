import React, { useState, useEffect } from "react";
import Table from "./MuiTable";
import styles from "../assets/styles/main.module.css";
import { fetchProducts } from "../api/index";
import Navbar from "../Pages/Navbar";

const Main = () => {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    await fetchProducts()
    .then((data) => {
      setProductData(data);
      setCategories(prev => [...new Set(data.map((item) => item.status))])
    })
    .catch((e) => {
      console.error(e);
    });
  };

  const fetchDataByCategorie = (e) =>{
    fetchProducts(e.target.value)
    .then((data) => {
      setProductData(data);
    })
    .catch((e) => {
      console.error(e);
    });
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <main className={styles.main_section}>
      <Navbar/>
      <div className={styles.container}>
        <label></label>
        
        <Table products={productData} />
      </div>
    </main>
  );
};

export default Main;
