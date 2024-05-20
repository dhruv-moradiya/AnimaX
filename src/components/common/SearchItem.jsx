import React from "react";
import styles from "../../styles/common/searchItem.module.css";
import { useAnimeContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

function SearchItem({ setIsSearch }) {
  const { searchItems, loading } = useAnimeContext();

  console.log("Laoding", loading)
  function render() {
    if (!searchItems) {
      return 'Enter'
    } else if (searchItems.length === 0) {
      return 'not found'
    } else {
      return searchItems.map((item, index) => {
        return (
          <Link
            to={`/Movie/${item.mal_id}`}
            key={index}
            onClick={() => setIsSearch(false)}
            style={{ width: "100%" }}
          >
            <div className={styles.card}>
              <div className={styles.imagePart}>
                <img src={item.images.jpg.image_url} alt="" />
              </div>
              <div className={styles.content}>
                <h3>
                  {!item.title_english ? item.title : item.title_english}
                </h3>
              </div>
            </div>
          </Link>
        );
      })
    }
  }

  return (
    <div className={styles.container}>

      {render()}


      <button className={styles.close} onClick={() => setIsSearch(false)}>
        <i class="ri-close-fill"></i>
      </button>
    </div>
  );
}

export default SearchItem;
{/* {!searchItems ? (
        // <div className={styles.loaderDiv}><p className={styles.loader}></p></div>
        <div className={styles.message}>Plese click enter</div>
      ) : searchItems.length <= 0 ? (
        <p className={styles.notFound}>
          Anime not found....
        </p>
      ) : (
        searchItems.map((item, index) => {
          return (
            <Link
              to={`/Movie/${item.mal_id}`}
              key={index}
              onClick={() => setIsSearch(false)}
              style={{ width: "100%" }}
            >
              <div className={styles.card}>
                <div className={styles.imagePart}>
                  <img src={item.images.jpg.image_url} alt="" />
                </div>
                <div className={styles.content}>
                  <h3>
                    {!item.title_english ? item.title : item.title_english}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })
      )} */}