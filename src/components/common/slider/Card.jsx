import React from "react";
import styles from "../../../styles/common/cardSlider.module.css";
import { Link } from "react-router-dom";

function Card({ name, src, episode, id }) {
  return (
    <Link to={`/Movie/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imagePart}>
          <img src={src} alt="" />
          <h3>{name}</h3>
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.contentPart} >Episode: {(Number(episode) <= 0 ? "Upcomeing" : Number(episode))}</div>
      </div>
    </Link>
  );
}

export default Card;
