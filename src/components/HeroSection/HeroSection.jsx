import React, { useState, useEffect } from "react";
import Styles from "./HeroSection.module.css";
import Container from "../Building Blocks/Container/Container";
import Button from "../Building Blocks/Buttons/SquareButton";

const HeroSection = () => {

  const images = [
    "https://media.istockphoto.com/id/1466434823/vector/dark-blurred-gradient-vector-abstract-background-design.jpg?s=612x612&w=0&k=20&c=LC1QsuAc_twxwE8cLrEbgsZMXHh0chRBbhBoDJw09YE=",
    "https://wallpapers.com/images/featured/pretty-blue-background-juafkickt4epl3jt.jpg",
    "https://wallpapers.com/images/featured/beautiful-blue-background-iz2zgnaheo3etro2.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto change every 4 seconds (working)
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