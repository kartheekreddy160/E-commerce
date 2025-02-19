const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("../db"); // We'll create this file for database connection

const router = express.Router();

// User Signup
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Hash password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ error: "Error hashing password" });

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    mysql.query(sql, [name, email, hash], (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });

      res.status(201).json({ message: "User registered successfully" });
    });
  });
});

// User Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  mysql.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (results.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    const user = results[0];
    
    // Compare password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign({ id: user.id, email: user.email }, "your_secret_key", { expiresIn: "1h" });

      res.json({ message: "Login successful", token });
    });
  });
});

module.exports = router;
