import React from "react";
import styles from "./WishlistCard.module.css";
import { FaTrash } from "react-icons/fa";
import Container from "../Building Blocks/Container/Container";
import SquareButton from "../Building Blocks/Buttons/SquareButton";

const WishlistCard = () => {
  const product = {
    title: "Switch Controller 10A",
    price: "Rs.1,850.00",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
  };

  return (
    <div className={styles.wishlistCard}>
      <Container>
        <div className={styles.wishlistCardContent}>

          {/* Left Side: Image + Details */}
          <div className={styles.left}>
            <div className={styles.imageBox}>
              {product.image && <img src={product.image} alt={product.title} />}
            </div>

            <div className={styles.detail}>
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.price}>{product.price}</p>
              <SquareButton>Select Options</SquareButton>
            </div>
          </div>

          {/* Right Side: Delete Icon (edge aligned) */}
          <div className={styles.remove}>
            <FaTrash className={styles.trashIcon} />
          </div>

        </div>
      </Container>
    </div>
  );
};

export default WishlistCard;