import React from "react";
import styles from "../../styles/character/whereToWatch.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Title from "../common/Title";

function WhereToWatch({ data, loading }) {
  // console.log("first", data);
  return (
    <>
      <Title title="🥰 Voice artist 🥰" />
      <div className={styles.container}>
        {data?.voices?.map((item, index) => {
          return (
            <Card
              key={index}
              loading={loading}
              language={item?.language}
              name={item?.person?.name}
              image={
                (item?.person?.images?.jpg?.image_url).split(".")[item?.person?.images?.jpg?.image_url.split(".").length - 1] === "gif"
                  ? "https://images.pond5.com/question-mark-white-black-footage-058304646_iconl.jpeg"
                  : item?.person?.images?.jpg?.image_url
              }
            />
          );
        })}
      </div>
    </>
  );
}

export default WhereToWatch;

function Card({ language, name, image, loading }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imagePart}>
        {!loading ? <img src={image} alt="" /> : <div className="skeleton"></div>}
      </div>
      <p>{name}</p>
      <p>{language}</p>
    </div>
  );
}
