import React, { useEffect, useState } from "react";
import "./Categories.css";

const Products = () => {
  const CategoriesURL = "https://fakestoreapi.com/products/categories";
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch categories on mount
  const getCategories = async () => {
    try {
      const res = await fetch(CategoriesURL);
      const data = await res.json();
      setCategories(["all", ...data]); // include "all" option
    } catch (err) {
      console.log("Category API Error", err);
    }
  };

  // Fetch products (all or by category)
  const getProducts = async (category) => {
    try {
      let baseurl =
        category === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${category}`;
      const res = await fetch(baseurl);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log("Product API Error", err);
    }
  };

  useEffect(() => {
    getCategories();
    getProducts("all"); // default load all products
  }, []);

  return (
    <div className="Products_Body">
      {/* Categories */}
      <div className="Categories_wrapper">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`category-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => {
              setSelectedCategory(cat);
              getProducts(cat);
            }}
          >
            {cat === "all" ? "SHOW ALL" : cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="Products_wrapper">
        {products.map((product) => (
          <div key={product.id} className="Products_wrapper_Text">
            <img src={product.image} alt={product.title} className="img" />
            <span>{product.title}</span>
            <span className="price">${product.price}</span>
            {/* <span className="description">{product.description}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
