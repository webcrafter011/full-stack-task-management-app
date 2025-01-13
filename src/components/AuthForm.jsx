import styles from "./styles/AuthForm.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../api";

const AuthForm = ({ isLogin, setAuthToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For validation feedback
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Show loading state when submitting form

    if (!username || !password) {
      setError("Please provide both username and password.");
      setLoading(false);
      return;
    }

    try {
      const response = isLogin
        ? await loginUser(username, password) // Login
        : await registerUser(username, password); // Register

      const { token } = response.data;
      // Save token in localStorage and update state
      localStorage.setItem("token", token);
      setAuthToken(token); // Update auth state in parent
      setLoading(false);
      navigate("/"); // Redirect to home page after successful authentication
    } catch (err) {
      setLoading(false); // End loading state
      setError("Failed to authenticate. Please try again.");
      console.error(err);
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
                placeholder="User name / Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading} // Disable input while loading
              />
            </div>
            <div className={styles["login__field"]}>
              <i className={`fas fa-lock ${styles["login__icon"]}`}></i>
              <input
                type="password"
                className={styles["login__input"]}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading} // Disable input while loading
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button
              className={`${styles["login__submit"]} ${
                loading ? styles.loading : ""
              }`}
              type="submit"
              disabled={loading} // Disable the button when loading
            >
              <span className={styles["button__text"]}>
                {isLogin ? "Log In Now" : "Register Now"}
              </span>
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

export default AuthForm;
