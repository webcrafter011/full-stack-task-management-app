import React, { useState, useEffect } from "react";
import { fetchMenu, addMenuItem, deleteMenuItem } from "../api";
import AddMenuItem from "./AddMenuItem";
import styles from "./styles/Menu.module.css";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [message, setMessage] = useState("");
  const [isAddingItem, setIsAddingItem] = useState(false);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetchMenu();
        setMenu(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getMenu();
  }, []);

  const handleAddMenuItem = async (name, category, price, availability) => {
    const token = localStorage.getItem("token");
    try {
      const response = await addMenuItem(
        token,
        name,
        category,
        price,
        availability
      );

      if (response.status === 201) {
        setMessage("Menu item created successfully");

        // Fetch the updated menu
        const updatedMenu = await fetchMenu();
        setMenu(updatedMenu.data);
      }
    } catch (error) {
      setMessage("Failed to create menu item");
      console.error(error.message);
    }
  };

  const handleDeleteMenuItem = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await deleteMenuItem(token, id);
      setMessage("Menu item deleted successfully");

      // Update menu after deletion
      const updatedMenu = await fetchMenu();
      setMenu(updatedMenu.data);
    } catch (error) {
      setMessage("Failed to delete menu item");
      console.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Menu</h2>

      {/* Display success/error message */}
      {message && (
        <p
          className={`${styles.message} ${
            message.includes("Failed") ? styles.error : ""
          }`}
        >
          {message}
        </p>
      )}

      {/* Button to toggle menu item form visibility */}
      <button
        className={`${styles.button} ${styles.addItemButton}`}
        onClick={() => setIsAddingItem(!isAddingItem)}
      >
        {isAddingItem ? "Cancel Add Item" : "Add New Item"}
      </button>

      {/* Add New Item Form */}
      {isAddingItem && (
        <AddMenuItem
          onAddMenuItem={handleAddMenuItem}
          isAddingItem={isAddingItem}
          setIsAddingItem={setIsAddingItem}
        />
      )}

      {/* Menu List */}
      <ul className={styles.menuList}>
        {menu.map((item) => (
          <li key={item._id} className={styles.menuItem}>
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <p className={styles.price}>{item.price}₹</p>
            <p
              className={
                item.availability ? styles.available : styles.availability
              }
            >
              {item.availability ? "Available" : "Out of Stock"}
            </p>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteMenuItem(item._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
