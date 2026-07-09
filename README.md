Meal Ordering App (MERN + Auth)

A full‑stack application built with React (Vite) frontend and Node.js/Express/MongoDB backend.
It allows users to register, login, logout, search meals, view ingredients, place orders, and confirm them.

Features:

User Authentication
Register, Login, Logout
JWT + HttpOnly cookies for secure sessions
Password hashing with bcrypt
Meal Search & Ordering
Search meals and view results
View ingredients and instructions
Place and confirm orders

Frontend:

React + Vite + TailwindCSS
Components: Navbar, Search, Order, Ingredients, ConfirmOrder, Register, Login, Logout
State‑based navigation (activeComponent)

Backend:\

Express server with routes for user auth
MongoDB with Mongoose schema for users
Middleware for JWT authentication
Controllers for register, login, logout, getUser, passwordUpdate

project/
 ┣ backend/
 ┃ ┣ config/DB.js
 ┃ ┣ routes/UserRouter.js
 ┃ ┣ controllers/UserController.js
 ┃ ┣ middleware/AuthMiddleware.js
 ┃ ┣ modules/UserModule.js
 ┃ ┗ server.js
 ┣ frontend/
 ┃ ┣ src/
 ┃ ┃ ┣ components/
 ┃ ┃ ┃ ┣ Navbar.jsx
 ┃ ┃ ┃ ┣ Search.jsx
 ┃ ┃ ┃ ┣ Order.jsx
 ┃ ┃ ┃ ┣ Ingredients.jsx
 ┃ ┃ ┃ ┣ ConfirmOrder.jsx
 ┃ ┃ ┃ ┣ Register.jsx
 ┃ ┃ ┃ ┣ Login.jsx
 ┃ ┃ ┃ ┗ Logout.jsx
 ┃ ┃ ┣ pages/Homepage.jsx
 ┃ ┃ ┗ App.jsx
 ┃ ┣ package.json
 ┃ ┣ vite.config.js
 ┃ ┣ tailwind.config.js
 ┃ ┗ .env
 ┗ README.md

Backend Setup
Clone repo and go to backend folder:
cd backend
npm install

Create .env file:
MONGODB_URI=mongodb+srv://seeta0106:seeta123@cluster0.lj1mnce.mongodb.net/?appName=Cluster0
PORT=5000
JWT_SECRET=bsheaetshkaar
NODE_ENV="development"

Start server:
npm start

Frontend Setup
Go to frontend folder:

cd frontend
npm install

Start dev server:
start run dev

API Endpoints
POST /user/register → Register new user

POST /user/login → Login user

POST /user/logout → Logout user

GET /user/:id → Get user by ID (auth required)

PUT /user/update/:id → Update password (auth required)


Future Improvements:

Switch from activeComponent state navigation to React Router routes

Add order persistence in backend (currently frontend only)

Improve error handling with toast notifications

Add protected routes for authenticated users

Enhance UI with animations and transitions