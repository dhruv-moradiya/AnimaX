import React, { useEffect } from "react";
import AboutChara from "../components/characterInfo/AboutChara";
import { useParams } from "react-router-dom";
import WhereToWatch from "../components/characterInfo/WhereToWatch";
import CharacterPhotos from "../components/characterInfo/CharacterPhotos";
import { useAnimeContext } from "../context/AppContext";

function CharacterInfo() {
  const characterID = useParams();
  const baseURL = "https://api.jikan.moe/v4/";
  const { loading, character_info, character_photos, dispatch } = useAnimeContext();
  console.log(characterID)
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "LOADING" });
        const response = await fetch(`${baseURL}characters/${characterID.chraID}/full`);
        const data = await response.json();
        dispatch({ type: "CHARACTER_INFO", payload: data.data });
      } catch (error) {
        console.error("Error fetching CHARACTER_INFO data:", error);
      }
    }
    fetchData()
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "LOADING" });
        const response = await fetch(`${baseURL}characters/${characterID.chraID}/pictures`);
        const data = await response.json();
        dispatch({ type: "CHARACTER_PHOTOS", payload: data.data });
      } catch (error) {
        console.error("Error fetching CHARACTER_PHOTOS data:", error);
      }
    }
    fetchData()
  }, []);
  return (
    <div>
      <AboutChara data={character_info} loading={loading} />
      <WhereToWatch data={character_info} loading={loading} />
      <CharacterPhotos data={character_photos} />
    </div>
  );
}

export default CharacterInfo;