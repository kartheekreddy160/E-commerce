import { useCart } from "../context/cartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image_url} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <h4>Total: {cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}</h4>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
