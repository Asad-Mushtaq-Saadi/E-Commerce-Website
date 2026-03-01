import React, { useState, useEffect } from "react";
import Styles from "./HeroSection.module.css";
import Container from "../Building Blocks/Container/Container";
import Button from "../Building Blocks/Buttons/SquareButton";
import SectionGap from "../Building Blocks/SectionGap/SectionGap";

const HeroSection = () => {

  const images = [
    "https://images.unsplash.com/photo-1622866654068-ba9bba536a81?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1770646143936-6e64df320e24?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1670438167770-89910cf3be8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    <>
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
    <SectionGap /></>
  );
};

export default HeroSection;