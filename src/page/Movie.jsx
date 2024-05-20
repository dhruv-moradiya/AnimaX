import React, { useEffect, useState } from "react";
import styles from "../styles/movie/movie.module.css";
import { useParams } from "react-router-dom";
import { useAnimeContext } from "../context/AppContext";
import Character from "../components/movie/characterPhotos/Character";
import ArtisPhotos from "../components/movie/artistPhotos/ArtisPhotos";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Title from "../components/common/Title";

function Movie() {
  const [showText, setShowText] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const animeID = useParams();
  const baseURL = "https://api.jikan.moe/v4/";
  const { dispatch, searchResults, character, loading } = useAnimeContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "LOADING" });
        const response = await fetch(`${baseURL}anime/${animeID.id}/full`);
        const data = await response.json();
        dispatch({ type: "SEARCH_RESULT", payload: data.data });
      } catch (error) {
        console.error("Error fetching SEARCH_RESULT:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "LOADING" });
        const response = await fetch(
          `${baseURL}anime/${animeID.id}/characters`
        );
        const data = await response.json();
        dispatch({ type: "CHARACTER", payload: data.data });
      } catch (error) {
        console.error("Error fetching CHARACTER:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          {searchResults.length <= 0 || !loading ? (
            <div className={`${styles.imagePart} `}>
              <img
                src={`${searchResults?.images?.jpg?.large_image_url}`}
                alt=""
              />
            </div>
          ) : (
            <div className={`${styles.imagePart} skeleton`}>
              <div className="skeleton" />
            </div>
          )}

          <div className={styles.contentPart}>
            <h3>{searchResults?.title}</h3>
            <ul>
              {searchResults?.genres?.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
            <div className={styles.trilerPart}>
              <div className={styles.circularProgressbar}>
                <CircularProgressbar
                  value={searchResults?.score}
                  text={searchResults?.score}
                  strokeWidth={5}
                  maxValue={10}
                  styles={buildStyles({
                    pathColor: `${searchResults?.score < 5
                      ? "red"
                      : searchResults?.score < 7
                        ? "orange"
                        : "green"
                      }`,
                    textColor: "#fff",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                  })}
                />
              </div>
              <div className={styles.btn}>
                <button
                  className={styles.playBtn}
                  onClick={() => setShowTrailer(true)}
                >
                  <i className="ri-play-large-line"></i>
                </button>
                <p>Watch Now</p>
              </div>
            </div>
            <div className={styles.overView}>
              <p className={`${showText ? styles.showText : ""}`}>
                {searchResults?.synopsis}
              </p>
              <button onClick={() => setShowText(!showText)}>
                {showText ? "Hide" : "Read more"}
              </button>
            </div>
            <div className={styles.lastThird}>
              <div>
                <p>Duration: </p>
                <span>{searchResults?.duration}</span>
              </div>
              <div>
                <p>Status: </p>
                <span>{searchResults?.status}</span>
              </div>
              <div>
                <p>Original Title: </p>
                <span>{searchResults?.title_japanese}</span>
              </div>
            </div>
            <div className={styles.last}>
              <p>Rating: </p>
              <span>{searchResults?.rating}</span>
            </div>
            <div className={styles.last}>
              <p>Release Date: </p>
              <span>{searchResults?.aired?.string}</span>
            </div>
            {showTrailer ? (
              <div className={styles.youtubeTrailer}>
                {!searchResults?.trailer?.embed_url ? (
                  <img
                    className={styles.videoImage}
                    src="https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg"
                  />
                ) : (
                  <iframe
                    className={`${styles.video}`}
                    width="100%"
                    height="100%"
                    src={`
                  ${searchResults?.trailer?.embed_url}
                    }`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                )}

                <button onClick={() => setShowTrailer(false)}>
                  <i class="ri-close-circle-fill"></i>
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <Title title={"🥰 Character Info 🥰"} />
        <Character />
        <Title title={"🥰 Voice Artists 🥰"} />
        <ArtisPhotos />
      </div>
    </>
  );
}

export default Movie;
