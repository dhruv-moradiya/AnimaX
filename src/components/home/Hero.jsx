import React from "react";
import styles from "../../styles/home/hero.module.css";

function Hero({ src, name }) {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImage}>
        <img src={src} alt="12" />

      </div>
      <h2>{name}</h2>
    </div>
  );
}

export default Hero;
