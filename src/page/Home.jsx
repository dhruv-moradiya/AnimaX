import React, { useEffect, useState } from "react";
import Hero from "../components/home/Hero";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../styles/home/home.module.css";
import { useAnimeContext } from "../context/AppContext";
import Title from "../components/common/Title";
import CardSlider from "../components/common/slider/CardSlider";
import {
  NextButton,
  PrevButton,
} from "../components/common/sliderButtons/Button";

const data = [
  { img: "https://cdn.wallpapersafari.com/97/7/MUQXAZ.jpg", name: "Naruto" },
  {
    img: "https://moewalls.com/wp-content/uploads/2023/04/sunday-picnic-spy-x-family-thumb.jpg",
    name: "Spy X Family",
  },
  {
    img: "https://wallpapercave.com/wp/wp13207813.png",
    name: "The Apothecary Diaries",
  },
  {
    img: "https://wallpapers.com/images/featured/jujutsu-kaisen-4k-hccbh0fp7rl24yd0.jpg",
    name: "Jujutsu Kaisen",
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
};

function Home() {
  const { loading, popularAnime, upcomeingAnime, dispatch } = useAnimeContext();
  const baseURL = "https://api.jikan.moe/v4/";

  useEffect(() => {
    const fetchPopularAnime = async () => {
      try {
        dispatch({ type: "LOADING" });
        const response = await fetch(`${baseURL}top/anime`);
        const data = await response.json();
        dispatch({ type: "POPULAR_ANIME", payload: data.data });
      } catch (error) {
        console.error("Error fetching POPULAR anime:", error);
      }
    };
    fetchPopularAnime();
  }, []);


  useEffect(() => {
    const fetchUpcomeingAnime = async () => {
      try {
        dispatch({ type: "LOADING" });
        const response = await fetch(`${baseURL}seasons/upcoming`);
        const data = await response.json();
        dispatch({ type: "UPCOMEING_ANIME", payload: data.data });
      } catch (error) {
        console.error("Error fetching UPCOMEING anime:", error);
      }
    };

    fetchUpcomeingAnime();
  }, []);

  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Slider {...settings} >
        {data.map((item, index) => {
          return <Hero key={index} src={item.img} name={item.name} />;
        })}
      </Slider>
      {!loading && popularAnime && (
        <CardSlider data={popularAnime} title="😍 Popular anime 😍" />
      )}
      {!loading && upcomeingAnime && (
        <CardSlider data={upcomeingAnime} title="😍 Upcoming and New anime 😍" />
      )}
    </div>
  );
}

export default Home;
