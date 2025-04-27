# 🛠️ Express.js Product API

Welcome to the **Product Management API**, a Node.js and Express.js based backend project designed with a clean MVC architecture.  
It leverages **MongoDB** with **Mongoose** for data storage, providing full CRUD operations for managing products like wheat, bats, and more!

---

## 🚀 Project Highlights

- **Entry Point**:  
  `index.js` boots the Express server, connects to MongoDB, and integrates all API routes. Server runs on port **3000**, with live-reloading powered by **Nodemon**.

- **Controllers**:  
  `product.controller.js` handles the core logic:
  - `createProduct`: Adds a new product to the database.
  - `getAllProducts`: Retrieves the entire product list.
  Both functions are built with async/await and robust error handling for smooth API operations.

- **Model**:  
  `product.model.js` defines a simple yet effective **Product Schema** with:
  - Fields: `name`, `quantity`, `price`
  - All fields are required, with automatic timestamping (`createdAt`, `updatedAt`).

- **Routes**:  
  `product.routes.js` maps HTTP methods to controller functions:
  - **POST** `/api/products`
  - **GET** `/api/products`
  - **GET** `/api/products/:id`
  - **PUT** `/api/products/:id`
  - **DELETE** `/api/products/:id`

  Structured with Express Router for modular and maintainable routing.

---

## 🧪 API Endpoints Overview

| Method | Endpoint | Description |
|:------:|:--------:|:-----------:|
| POST | `/api/products` | Create a new product |
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve a single product by ID |
| PUT | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete a product by ID |

Each endpoint returns structured JSON responses with appropriate status codes (`200 OK`, etc.).

---

## 📦 Core Files

- **index.js** → App initialization, MongoDB connection
- **product.controller.js** → Business logic
- **product.model.js** → Mongoose schema and model
- **product.routes.js** → API routes mapping
- **package.json** → Project metadata and dependencies
- **.gitignore** → Ignoring unnecessary files like `node_modules`

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via **Mongoose**)
- **Postman** (for API testing)
- **Nodemon** (for auto-reloading during development)

---

## ✨ Key Features

- Modular MVC structure for easy scalability.
- Clean and readable code with async/await support.
- Detailed error handling for API reliability.
- Easy to extend — add new models, routes, or controllers as needed.
- Ideal for backend practice and learning API development fundamentals.

---

## 📢 How to Run Locally

```bash
git clone <your-repo-link>
cd <your-project-folder>
npm install
npm run dev
```
✅ Your server will be running on http://localhost:3000

💬 Final Note
This project is a perfect starting point for anyone looking to master Express.js and MongoDB backend development using real-world practices.
Feel free to clone, modify, and expand it as you grow! 🚀
