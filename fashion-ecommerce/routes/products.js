const express = require("express");
const db = require("../db");

const router = express.Router();

// Add a new product
router.post("/add", (req, res) => {
  const { name, description, price, image_url, category } = req.body;

  const sql = "INSERT INTO products (name, description, price, image_url, category) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, description, price, image_url, category], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error adding product" });
    }
    res.status(201).json({ message: "Product added successfully", productId: result.insertId });
  });
});

// Get all products
router.get("/", (req, res) => {
    const { category } = req.query; // Check if category is provided in query params
  
    let sql = "SELECT * FROM products";
    let params = [];
  
    if (category) {
      sql += " WHERE category = ?";
      params.push(category);
    }
  
    db.query(sql, params, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error fetching products" });
      }
      res.status(200).json({ products: results });
    });
  });

// Get a single product by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM products WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error fetching product" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ product: result[0] });
  });
});



// Update a product by ID
router.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const { name, description, price, image_url, category } = req.body;
  
    const sql = "UPDATE products SET name=?, description=?, price=?, image_url=?, category=? WHERE id=?";
    db.query(sql, [name, description, price, image_url, category, id], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error updating product" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json({ message: "Product updated successfully" });
    });
  });
  
// Delete a product by ID
router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
  
    const sql = "DELETE FROM products WHERE id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error deleting product" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    });
  });


  // Get all products (with optional category filtering)




  module.exports = router;