import React from "react";
import styles from "../../styles/character/aboutChara.module.css";

function AboutChara({ data, loading }) {
  if (!data) {
    return <div>Loading...</div>;
  }
  if (data.length === 0) {
    return <div className={styles.loaderDiv}><p className={styles.loader}></p></div>;
  }
  return (
    <div className={styles.container}>
      {!loading ? (
        <div className={styles.imagePart}>
          <img src={`${data?.images?.jpg?.image_url}`} alt="" />
        </div>
      ) : (
        <div className={`${styles.imagePart} skeleton`}></div>
      )}

      <div className={styles.content}>
        <h3>
          Name: <span>{data?.name}</span>
        </h3>
        <h3>
          name_kanji: <span>{data?.name_kanji}</span>
        </h3>
        <h3>
          Anime name: <span>{data?.anime[0]?.anime?.title}</span>
        </h3>
        <h3>
          Role: <span>{data?.anime[0]?.role}</span>
        </h3>
        <p> {data?.about}</p>
      </div>
    </div>
  );
}

export default AboutChara;
