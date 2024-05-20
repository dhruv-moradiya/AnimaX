import React, { useState } from "react";
import styles from "../styles/layout/navBar.module.css";
import { useNavigate } from "react-router-dom";
import SearchItem from "../components/common/SearchItem";
import { useAnimeContext } from "../context/AppContext";

function NavBar() {
  const [showInput, setShowInput] = useState(false);
  const { isSearch, setIsSearch, dispatch } = useAnimeContext();
  const [searchItemInput, setSearchItemInput] = useState("");

  const navigate = useNavigate()

  const showInputFild = () => {
    setShowInput(!showInput);
  };

  const handleKeyUp = (e) => {
    if (e.which === 13) {
      setIsSearch(true);
      setSearchItemInput('')
      fetch(`https://api.jikan.moe/v4/anime?q=${searchItemInput}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({ type: "LOADING" })
          dispatch({ type: "SEARCH_ITEMS", payload: data.data });
        })
        .catch((error) => {
          console.log("Error: searchItemData", error);
        });
    }
  };

  function redirection() {
    navigate('/')
  }

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo} onClick={redirection}>
        <div className={styles.logoImage}>
          <img src="/Logo.png" alt="AnimaX Logo" />
        </div>
        <h2>
          Ani<span>maX</span>
        </h2>
      </div>
      <div className={styles.inputFild}>
        <input
          type="text"
          name=""
          className={`${showInput ? styles.visibleInput : ""}`}
          value={searchItemInput}
          onKeyUp={handleKeyUp}
          onChange={(e) => {
            setSearchItemInput(e.target.value)
            setIsSearch(true)
          }}
        />
        <i className="ri-search-2-fill" onClick={showInputFild}></i>
        {isSearch && <SearchItem setIsSearch={setIsSearch} />}
      </div>
    </nav>
  );
}

export default NavBar;
