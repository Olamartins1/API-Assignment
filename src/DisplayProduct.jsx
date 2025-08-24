import React, { useEffect, useState } from "react";
import "./DisplayProduct.css";

import Categories from "./Categories";
import Card from "./Card";

const DisplayProduct = () => {
  const getProductUrl = "https://fakeapi.net/products";
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const getProductbyCategory = `https://fakeapi.net/products/category/${category}`;

  const getAllProducts = async () => {
    try {
      const res = await fetch(getProductUrl, { method: "GET" });
      const data = await res.json();
      setProducts(data.data);
      console.log(data.data);
    } catch (err) {
      console.log("this is not working", err);
    }
  };
  const getProductCategory = async () => {
    try {
      const res = await fetch(getProductbyCategory, { method: "GET" });
      const data = await res.json();
      setProducts(data.data);
      console.log(data, "catetetet");
    } catch (err) {
      console.log("this is not working", err);
    }
  };

  console.log(category);

  useEffect(() => {
    if (activeIndex === 0) {
      getAllProducts();
    } else {
      getProductCategory();
    }
  }, [category]);
  return (
    <div>
      <Categories
        setCategory={setCategory}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className="card_wrapper">
        {products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DisplayProduct;
