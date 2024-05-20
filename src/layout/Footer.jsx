import React from "react";
import styles from "../styles/layout/footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <img src="https://wallpapers.com/images/hd/anime-characters-1920-x-1080-picture-8u1fv7np6bxlanjv.jpg" alt="Image" className={styles.image} />
            <div className={styles.innerContainer}>
                <div className={styles.logo}>
                    <h2>
                        Ani<span>maX</span>
                    </h2>
                    <p>Copyright &copy; AnimaX all rights reserved</p>
                    <div>
                        <i className="ri-facebook-circle-fill"></i>
                        <i className="ri-instagram-fill"></i>
                        <i className="ri-twitter-fill"></i>
                        <i className="ri-youtube-fill"></i>
                        <i className="ri-telegram-fill"></i>
                    </div>
                </div>
                <div className={styles.season}>
                    <h2>Season</h2>
                    <ul>
                        {["Winter", "Spring", "Summer", "Autumn"].map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
                <div className={styles.genere}>
                    <h2>Genres</h2>
                    <ul>
                        {["School life", "Magic", "Romantic", "Action"].map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
                <div className={styles.about}>
                    <h2>About Us</h2>
                    <p>All videos on the site provided for information only and do not involve downloding.</p>
                    <p>Technical support and assistanc to user: <br />all site.animax@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
