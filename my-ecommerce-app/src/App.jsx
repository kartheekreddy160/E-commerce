import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import "./styles.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useCart } from "./context/cartContext";

const App = () => {
  const  { cart } =useCart();

  const cartItemCount=cart.reduce((total,item)=>total+item.quantity,0);



  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Cart <span> {(cartItemCount)}</span> </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        
      </Routes>
    </Router>
  );
};

export default App;
