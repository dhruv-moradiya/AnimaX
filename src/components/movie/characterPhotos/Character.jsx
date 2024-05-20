import React from "react";
import styles from "../../../styles/movie/character.module.css";
import stylesSkeleton from "../../../styles/common/photos.module.css";

import { useAnimeContext } from "../../../context/AppContext";
import SlickSlider from "../../common/slickSlider/SlickSlider";
import Photos from "../../common/Photos";
import { Link } from "react-router-dom";
import Title from "../../common/Title";

function Skeleton() {
  return (
    <div className={stylesSkeleton.charecterInfo}>
      <div className={`${stylesSkeleton.charPhoto} skeleton`}>
        <img src="" alt="" className="skeleton" />
      </div>
      <p style={{ textDecoration: "none" }} className="skeleton">
        {" "}
      </p>
    </div>      
  );
}

function Character() {
  const { character, loading } = useAnimeContext();

  // console.log("characterList: ",character)
  // console.log("character", character);

  return (
    <div className={styles.charPhotos}>
      <SlickSlider slidesToShow={7}>
        {character.map((item, index) => {
          return (
            <>
              {!loading ? (
                <Link
                  to={`/CharacterInfo/${item?.character?.mal_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Photos
                    key={index}
                    img={item?.character?.images?.jpg?.image_url}
                    name={item?.character?.name}
                    role={item?.role}
                  />
                </Link>
              ) : (
                <>
                  <Skeleton />
                </>
              )}
            </>
          );
        })}
      </SlickSlider>
    </div>
  );
}

export default Character;
