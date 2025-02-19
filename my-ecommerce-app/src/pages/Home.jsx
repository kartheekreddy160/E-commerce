import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="home-container">
        <h1>Welcome To Our Store</h1>
        <p>Discover the latest Trends!!</p>
        <Link to="/products" className="explore-btn">Shop Now</Link>
      </div>
    );
  };
  
  export default Home;
  