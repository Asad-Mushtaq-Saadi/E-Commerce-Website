import React, { useState, useEffect } from "react";
import Styles from "./HeroSection.module.css";
import Container from "../Building Blocks/Container/Container";
import Button from "../Building Blocks/Buttons/SquareButton";

const HeroSection = () => {

  const images = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
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
            <Button onClick={prevImage}>
              ❮
            </Button>
          </div>

          {/* Right Button */}
          <div className={Styles.rightBtn}>
            <Button onClick={nextImage}>
              ❯
            </Button>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default HeroSection;