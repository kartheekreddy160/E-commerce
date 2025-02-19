import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/cartContext";
import "./ProductDetails.css"; // Import the CSS file

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Import the useCart hook from the cartContext
  const API_URL = `http://localhost:5000/api/products/${id}`; // Update if needed

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="loading-text">Loading product details...</p>;
  }

  if (!product) {
    return <p className="error-text">Product not found.</p>;
  }

  return (
    <div className="product-details-container">
      <img src={product.image_url} alt={product.name} className="product-details-image" />
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">₹{product.price}</p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
