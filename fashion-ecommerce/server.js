require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db"); // Import the database connection

const app = express();
app.use(express.json());
app.use(cors());

// Import authentication routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);


// Import product routes
const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);


// Sample route
app.get("/", (req, res) => {
  res.send("Fashion E-commerce API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
