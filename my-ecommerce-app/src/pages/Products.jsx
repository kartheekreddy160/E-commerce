import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Products.css"; // Import the CSS file

const Products = () => {
  const [products, setProducts] = useState([]);
  const API_URL = "http://localhost:5000/api/products"; // Update if needed

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="products-container">
      <h1 className="title">Explore Our Products</h1>
      {products.length === 0 ? (
        <div className="loader-container">
        <div className="dot-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2>Loading products...</h2>
      </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image_url} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">₹{product.price}</p>
              <Link to={`/product/${product.id}`} className="view-button">
                View Product
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
