E-Commerce Website
This is a full stack E-Commercce website built with React.js and Node.js/Express.js with MySQL.
This Application allows user to register,login,browse the products,add the product to the cart

Installation Steps:

1.Clone the Repository:
git clone https://github.com/kartheekreddy160/E-commerce
cd E-commerce 

2.Set up Frontend:
Navigate to the Frontend Directory:
cd frontend
npm install
npm start
The React app will start at http://localhost:3000


3.Set Up Environment Variables
Create a .env file in the backend folder and add:
PORT=5000
JWT_SECRET=your_secret_key
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=ecommerce_db


4.Start the Backend Server:
node server.js
The backend will run at http://localhost:5000


Features
✅ User Authentication (Signup & Login)
✅ Browse Products
✅ Add to Cart & Checkout
✅ Secure API with JWT Authentication

🛠️ Technologies Used
Frontend: React.js, React Router, CSS
Backend: Node.js, Express.js, JWT
Database: MySQL

