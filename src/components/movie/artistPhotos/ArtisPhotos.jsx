import React from "react";
import styles from "../../../styles/movie/artist.module.css";
import { useAnimeContext } from "../../../context/AppContext";
import Photos from "../../common/Photos";
import SlickSlider from "../../common/slickSlider/SlickSlider";

function ArtisPhotos() {
  const { character } = useAnimeContext();
  return (
    <div className={styles.container}>
      <SlickSlider slidesToShow={7}>
        {character.map((item) => {
          return item?.voice_actors?.map((artist, index) => {
            return artist?.language === "Japanese" ? (
              <Photos
                key={index}
                img={artist?.person?.images?.jpg?.image_url}
                name={artist?.person?.name}
              />
            ) : null;
          });
        })}
      </SlickSlider>
    </div>
  );
}

export default ArtisPhotos;
