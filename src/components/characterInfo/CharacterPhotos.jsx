import React, { useState } from "react";
import styles from "../../styles/character/characterPhotos.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Title from "../common/Title";
import { saveAs } from 'file-saver';

function CharacterPhotos({ data }) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  // if (data.length === 0) {
  //   return <div className={styles.loaderDiv}><p className={styles.loader}></p></div>;
  // }

  const imageDownload = (image) => {
    saveAs(image, "image.png")
  }

  return (
    <>
      <Title title="😍 Character photos 😍" />
      <div className={styles.container}>
        <div className={styles.imagePart}>
          {data.map((item, index) => (
            <div
              className={styles.imageCard}
              key={index}
              onClick={() => setSelectedImage(index)}
            >
              <LazyLoadImage src={item?.jpg?.image_url} effect="blur" />
            </div>
          ))}
        </div>
        <div className={styles.preview}>
          <h3>Preview</h3>
          <img
            src={data[selectedImage]?.jpg?.image_url}
            alt=""
          />
          <button onClick={() => imageDownload(data[selectedImage]?.jpg?.image_url)}>
            <i className="ri-import-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default CharacterPhotos;
