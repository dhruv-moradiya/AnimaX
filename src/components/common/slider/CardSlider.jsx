import React from "react";
import styles from "../../../styles/common/cardSlider.module.css";
import Card from "./Card";

import Title from "../Title";
import SlickSlider from "../slickSlider/SlickSlider";

function Skeleton() {
  return (
    <div className={`${styles.card} skeleton`}>
      <div className={styles.imagePart}>
        <div  className="skeleton" />
        <h3 className="skeleton"></h3>
        <div className={styles.overlay}></div>
      </div>
      <div className={`${styles.contentPart} skeleton`}></div>
    </div>
  );
}

function CardSlider({ data, title }) {
  // console.log("data", data)

  return (
    <div className={styles.outerContainer}>
      <Title title={title} />
      <div className={styles.container} style={{
        display: "flex",
        gap: "12px",
        justifyContent: "center"
      }}>
        <SlickSlider slidesToShow={6} key={1}>
          {data.length <= 0 ? (
            [1, 2, 3, 4, 5, 6].map((item) => <Skeleton key={item} />)
          ) : (
            data.map((item, index) => (
              <Card
                key={index}
                id={item.mal_id}
                name={item.title_english}
                src={item.images.webp.large_image_url}
                episode={item.episodes}
              />
            ))
          )}
        </SlickSlider>
      </div>
    </div>
  );
}

export default CardSlider;
