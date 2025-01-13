# **Craft My Plate Assessment**

This repository contains the submission for the Craft My Plate Fullstack Internship Assignment. It demonstrates a complete fullstack application with authentication, menu management, and order functionality.

---

## **Index**
[Link to Backend Repo](https://github.com/webcrafter011/craft-my-plate-backend)  


1. [Project Overview](#project-overview)  
2. [Features](#features)  
   - [User Authentication](#1-user-authentication)  
   - [Menu Management](#2-menu-management)  
   - [Order Management](#3-order-management)  
   - [Responsive Frontend](#4-responsive-frontend)  
   - [State Management](#5-state-management)  
   - [API Integration](#6-api-integration)  
   - [Deployment](#7-deployment)  
3. [Backend](#backend)  
   - [Features](#features-1)  
   - [Endpoints](#endpoints)  
   - [Deployment](#deployment)  
4. [Frontend](#frontend)  
   - [Functionalities](#functionalities)  
   - [Deployment](#deployment-1)  
5. [Tech Stack](#tech-stack)  
6. [How to Run Locally](#how-to-run-locally)  
   - [Backend](#backend-1)  
   - [Frontend](#frontend-1)  
7. [Video Walkthrough](#video-walkthrough)  
8. [Acknowledgments](#acknowledgments)  

---

## **Project Overview**

This project features a backend built with **Node.js** and **MongoDB**, along with a frontend created using **React.js**. The application implements user authentication, menu and order management, and integrates API communication seamlessly. Both the backend and frontend are deployed on cloud platforms.

---

## **Features**

### **1. User Authentication**
- Secure user registration and login using **JWT-based authentication**.
- Passwords are stored securely as hashed values.
- Local storage is used on the frontend to maintain the user session.

### **2. Menu Management**
- View all menu items with details like name, category, price, and availability.
- Add, update, and delete menu items (restricted to authenticated users).

### **3. Order Management**
- Place orders by selecting menu items and quantities.
- View all orders placed by the logged-in user.
- Order statuses (e.g., Pending, Completed) are tracked and displayed.

### **4. Responsive Frontend**
- User-friendly and responsive interface created with **React.js** and styled using **React-Bootstrap**.
- Comprehensive component-based styling using `Component.module.css`.

### **5. State Management**
- React Context is used to manage user sessions, menu data, and cart functionality efficiently.

### **6. API Integration**
- Full CRUD API operations for managing menu items and orders.
- Seamless interaction between the frontend and backend.

### **7. Deployment**
- **Backend**: Deployed on **Render**.
- **Frontend**: Deployed on **Vercel**.

---

## **Backend**

The backend is a Node.js application powered by Express and MongoDB.

### **Features**
- Authentication and authorization using **JWT tokens**.
- MongoDB for data persistence with schemas for users, menu items, and orders.
- Data validation and error handling to ensure a robust API.

### **Endpoints**

#### **User Authentication**
1. **POST /register**: Register a new user with a hashed password.
2. **POST /login**: Authenticate an existing user and return a JWT token.

#### **Menu Management**
3. **GET /menu**: Fetch all menu items.
4. **POST /menu**: Add a new menu item (requires authentication).
5. **DELETE /menu/:id**: Delete a menu item if it is not part of any order.

#### **Order Management**
6. **GET /orders**: Fetch all orders placed by the logged-in user.
7. **POST /order**: Place an order with selected menu items and quantities.
8. **DELETE /order/:id**: Delete an order (restricted to the user who placed it).

### **Deployment**
The backend is deployed on Render and accessible at:
[https://craft-my-plate-backend-w0y6.onrender.com/](https://craft-my-plate-backend-w0y6.onrender.com/)

---

## **Frontend**

The frontend is built using React.js, with a focus on simplicity and responsiveness.

### **Functionalities**
1. **Authentication**:
   - User registration and login.
   - JWT token stored in local storage for persistent sessions.

2. **Menu Management**:
   - Add, update, and delete menu items.
   - View menu items with details (e.g., name, price, category).

3. **Order Management**:
   - Create and manage orders.
   - View order history and statuses.

4. **Responsive UI/UX**:
   - Built with **React-Bootstrap** for a polished, mobile-friendly design.
   - Modular styling using `Component.module.css`.

### **Deployment**
The frontend is deployed on Vercel and can be accessed at:  
**[Frontend Deployment Link](#)** *(Add the actual link here)*

---

## **Tech Stack**

### **Frontend:**
- React.js
- React-Bootstrap
- Axios (for API calls)
- React Context (for state management)

### **Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt.js (password hashing)
- JSON Web Tokens (JWT)

### **Deployment:**
- Backend: Render
- Frontend: Vercel
- Database: MongoDB Atlas

---

## **How to Run Locally**

### **Backend**
1. Clone the repository:
   ```bash
   git clone https://github.com/webcrafter011/craft-my-plate-frontend.git
   ```
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file with the following variables:
   ```
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   PORT=5000
   ```
5. Start the server:
   ```bash
   npm start
   ```

### **Frontend**
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## **Video Walkthrough**

A detailed video walkthrough of the project covering:
1. Code structure.
2. API routes and logic.
3. React components and state management.
4. Deployment process.

**YouTube Link:** *(Add the actual link here)*

---

## **Acknowledgments**

Thank you for considering this submission for the Craft My Plate internship. I hope this project demonstrates my ability to build and deploy a fullstack application effectively.

---