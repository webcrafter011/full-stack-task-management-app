import React, { useEffect, useState } from "react";
import { fetchOrders, deleteOrder } from "../api";
import styles from "./styles/OrderList.module.css";

const OrderList = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await fetchOrders(token);
        setOrders(response.data);
      } catch (err) {
        setError("Error fetching orders");
        console.error(
          "Error fetching orders:",
          err.response ? err.response.data : err.message
        );
      }
    };

    if (token) {
      getOrders();
    }
  }, [token]);

  const handleDeleteOrder = async (orderId) => {
    try {
      await deleteOrder(token, orderId);
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId)
      );
    } catch (err) {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId
            ? { ...order, errorMessage: "Error deleting order" }
            : order
        )
      );
      console.error(
        "Error deleting order:",
        err.response ? err.response.data : err.message
      );
    }
  };

  return (
    <div className={styles["order-list"]}>
      <h2>Your Orders</h2>
      {error && <p className={styles["error-message"]}>{error}</p>}
      <ul className={styles["orders-ul"]}>
        {orders.map((order) => {
          const totalPrice = order.items.reduce((sum, item) => {
            return sum + item.itemId.price * item.quantity;
          }, 0);

          return (
            <li key={order._id} className={styles["order-item"]}>
              <h3>Order {order._id}</h3>
              <p>Status: {order.status}</p>
              <p>
                <strong>Total Price: </strong>₹{totalPrice.toFixed(2)}
              </p>
              <ul>
                {order.items
                  .filter((item) => item.quantity > 0)
                  .map((item) => (
                    <li key={item.itemId._id}>
                      {item.itemId.name} (x{item.quantity}) - ₹
                      {item.itemId.price.toFixed(2)}
                    </li>
                  ))}
              </ul>
              {order.errorMessage && (
                <p className={styles["error-message"]}>{order.errorMessage}</p>
              )}
              <button
                className={styles["delete-btn"]}
                onClick={() => handleDeleteOrder(order._id)}
              >
                Delete Order
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OrderList;
