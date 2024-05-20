import React from "react";
import styles from "../../../styles/common/popUp.module.css";

function PopUp(props) {
  return (
    <div
      className={`${styles.container} ${props.showPopUp ? styles.visible : ""}`}
      style={
        !props.color === "red"
          ? { borderLeft: "6px solid green" }
          : { borderLeft: "6px solid red" }
      }
    >
      <div>
        {!props.color === "red" ? (
          <i className="ri-check-double-line"></i>
        ) : (
          <i className="ri-error-warning-fill"></i>
        )}
      </div>
      <p>{props.message}</p>
    </div>
  );
}

export default PopUp;
