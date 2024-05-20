import React from "react";
import styles from "../../styles/common/photos.module.css";

function Photos({img,name,role}) {
  return (
    <div className={styles.charecterInfo}>
      <div className={styles.charPhoto}>
        <img
          src={img}
          alt={name}
        />
      </div>
      <p style={{textDecoration:"none"}}> {name} </p>
      {role ? <p>[{role}]</p> :""}
    </div>
  );
}

export default Photos;
