import axios from "axios";

const API_URL = "https://craft-my-plate-backend-w0y6.onrender.com"; // Replace with your backend URL if needed

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// routes to login and register user 
export const registerUser = async (username, password) => {
  return await api.post("/register", { username, password });
};

export const loginUser = async (username, password) => {
  return await api.post("/login", { username, password });
};


// Handling Menu crud operations
export const fetchMenu = async () => {
  return await api.get("/menu");
};

export const addMenuItem = async (
  token,
  name,
  category,
  price,
  availability = true
) => {
  return await api.post(
    "/menu",
    { name, category, price, availability },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const deleteMenuItem = async (token, id) => {
  return await api.delete(`/menu/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};


// routes for ordering logic
export const fetchOrders = async (token) => {
  return await api.get("/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createOrder = async (token, items) => {
  return await api.post(
    "/order",
    { items },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const deleteOrder = async (token, orderId) => {
  return await api.delete(`/order/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
