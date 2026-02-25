import React, { useState, useEffect } from "react";
import Styles from "./HeroSection.module.css";
import Container from "../Building Blocks/Container/Container";
import Button from "../Building Blocks/Buttons/SquareButton";

const HeroSection = () => {

  const images = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://t4.ftcdn.net/jpg/03/78/61/05/360_F_378610575_cj5Yfl66HRJP6XbTzJ198lNzZ0D5hv79.jpg",
    "https://thumbs.dreamstime.com/b/top-down-view-open-paint-can-serenity-soft-blue-shade-surrounded-hydrangeas-match-color-316052300.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Next button
  const nextImage = () => {
    setCurrentIndex(
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  // ✅ Previous button
  const prevImage = () => {
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className={Styles.heroParent}>
      <Container>
        <div className={Styles.hero}>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt="Hero"
            className={Styles.heroImage}
          />

          {/* Left Button */}
          <div className={Styles.leftBtn}>
            <Button onClick={prevImage}>❮</Button>
          </div>

          {/* Right Button */}
          <div className={Styles.rightBtn}>
            <Button onClick={nextImage}>❯</Button>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default HeroSection;