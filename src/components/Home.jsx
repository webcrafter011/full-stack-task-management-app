import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Home.module.css";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className={styles["home-container"]}>
        <div className={styles["upper-parent"]}>
          <div className={styles["text-container"]}>
            <span className={styles["currently-serving"]}>
              <FaLocationDot className={styles["location-svg"]} />{" "}
              <p>Currently Serving in</p>
              <p className={styles["hyderabad"]}>HYDERABAD</p>
            </span>
            <p className={styles["main-heading"]}>
              INDIA’S FIRST FOOD CATERING APP
            </p>
            <p className={styles["cater-sub-heading"]}>
              You Customize, We Cater!
            </p>
            <Link to="/menu">
              <button className={styles["menu-btn"]}>View Menu</button>
            </Link>
            <Link to="/order">
              <button className={styles["menu-btn"]}>Place Order</button>
            </Link>
          </div>
          <span className={styles["image-container"]}>
            <img src="./smartphone.webp" alt="smartphone image" className={styles["smartphone"]}/>
            <img src="./welcome-cartoon.svg" alt="welcome cartoon image" className={styles["cartoon"]}/>
          </span>
        </div>
        <div className={styles["features-list"]}></div>
      </div>
    </>

    // </div>
  );
};

export default Home;
