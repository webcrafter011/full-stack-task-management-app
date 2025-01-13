import React, { useState } from "react";
import styles from "./styles/AddMenuItem.module.css"; // Assuming the CSS file is named AddMenuItem.module.css

const AddMenuItem = ({ onAddMenuItem, isAddingItem, setIsAddingItem }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState(true);
  const [message, setMessage] = useState("");

  const handleAddMenuItem = async (e) => {
    e.preventDefault();

    if (!name || !category || !price) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      await onAddMenuItem(name, category, parseFloat(price), availability);
      setMessage("Menu item created successfully!");
      setName("");
      setCategory("");
      setPrice("");
      setAvailability(true);
      setIsAddingItem(false); // Close the form after success
    } catch (error) {
      setMessage("Failed to create menu item");
      console.error(error.message);
    }
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.value === "true");
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formHeading}>Add New Item</h3>
      {message && (
        <p
          className={`${styles.message} ${
            message.includes("Failed") ? styles.error : ""
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleAddMenuItem}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Item Name:</label>
          <input
            className={styles.formInput}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Category:</label>
          <input
            className={styles.formInput}
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Price:</label>
          <input
            className={styles.formInput}
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Availability:</label>
          <select
            className={styles.formSelect}
            value={availability}
            onChange={handleAvailabilityChange}
          >
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>
        </div>
        <button className={styles.submitButton} type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddMenuItem;
