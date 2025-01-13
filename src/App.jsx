import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation";
import AuthForm from "./components/AuthForm";
import Menu from "./components/Menu";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import Home from "./components/Home";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if token exists in localStorage and set it in state
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleLogout = () => {
    // Remove token from localStorage and reset token in state
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      <Navbar isAuthenticated={token} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<AuthForm isLogin={true} setAuthToken={setToken} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderForm token={token} />} />
        <Route path="/orders" element={<OrderList token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;
