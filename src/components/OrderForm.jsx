import React, { useState, useEffect } from "react";
import { createOrder } from "../api"; // Assuming you have this API function for creating an order
import axios from "axios";
import styles from "./styles/OrderForm.module.css"; // Import the CSS module

const OrderForm = ({ token }) => {
  const [items, setItems] = useState([]); // For storing menu items
  const [quantity, setQuantity] = useState({}); // For storing quantities of selected items
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // For success message

  // Fetch menu items from the backend
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("https://craft-my-plate-backend-w0y6.onrender.com/menu");
        setItems(response.data); // Set menu items in state
      } catch (err) {
        setError("Failed to fetch menu items.");
        console.error("Error fetching menu:", err);
      }
    };

    fetchMenuItems();
  }, []);

  // Handle placing the order
  const handleOrder = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null); // Reset success message on new order attempt

    try {
      const formattedItems = items.map((item) => ({
        itemId: item._id,
        quantity: quantity[item._id] || 0, // Default to 1 if no quantity selected
      }));

      await createOrder(token, formattedItems); // Make the API call to create the order
      setSuccessMessage("Order placed successfully!");
      setQuantity({}); // Reset quantities after successful order
    } catch (err) {
      setError("Error placing order");
      console.error("Error placing order:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.orderForm}>
      <h2>Place Order</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>} {/* Display success message */}
      {loading && <p className={styles.loadingMessage}>Loading...</p>}

      <ul className={styles.itemList}>
        {items.map((item) => (
          <li key={item._id} className={styles.item}>
            <div>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p className={styles.itemPrice}>₹{item.price}</p>
            </div>
            <input
              className={styles.quantityInput}
              type="number"
              min="0"
              value={quantity[item._id]}
              onChange={(e) =>
                setQuantity({
                  ...quantity,
                  [item._id]: parseInt(e.target.value),
                })
              }
            />
          </li>
        ))}
      </ul>

      <button
        className={styles.placeOrderButton}
        onClick={handleOrder}
        disabled={loading}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderForm;
