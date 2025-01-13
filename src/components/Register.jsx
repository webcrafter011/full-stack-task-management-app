import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api"; // API function for user registration
import styles from "./styles/AuthForm.module.css"; // Use the same AuthForm.module.css

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Navigate after successful registration

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await registerUser(username, password);
      setError(""); // Clear errors on success
      navigate("/login"); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.response?.data || "An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles.screen}>
        <div className={styles["screen__content"]}>
          <form className={styles.login} onSubmit={handleSubmit}>
            <div className={styles["login__field"]}>
              <i className={`fas fa-user ${styles["login__icon"]}`}></i>
              <input
                type="text"
                className={styles["login__input"]}
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles["login__field"]}>
              <i className={`fas fa-lock ${styles["login__icon"]}`}></i>
              <input
                type="password"
                className={styles["login__input"]}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles["login__field"]}>
              <i className={`fas fa-lock ${styles["login__icon"]}`}></i>
              <input
                type="password"
                className={styles["login__input"]}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles["login__submit"]} type="submit">
              <span className={styles["button__text"]}>Register Now</span>
              <i
                className={`fas fa-chevron-right ${styles["button__icon"]}`}
              ></i>
            </button>
          </form>
        </div>
        <div className={styles["screen__background"]}>
          <span
            className={`${styles["screen__background__shape"]} ${styles["screen__background__shape4"]}`}
          ></span>
          <span
            className={`${styles["screen__background__shape"]} ${styles["screen__background__shape3"]}`}
          ></span>
          <span
            className={`${styles["screen__background__shape"]} ${styles["screen__background__shape2"]}`}
          ></span>
          <span
            className={`${styles["screen__background__shape"]} ${styles["screen__background__shape1"]}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
