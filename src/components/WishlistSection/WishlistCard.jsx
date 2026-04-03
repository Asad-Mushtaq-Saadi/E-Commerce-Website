import React from "react";
import styles from "./WishlistCard.module.css";
import { FaTrash } from "react-icons/fa";
import SquareButton from "../Building Blocks/Buttons/SquareButton";

const WishlistCard = ({ product, onRemove }) => {
  return (
    <div className={styles.wishlistCard}>
      <div className={styles.wishlistCardContent}>
        {/* Left Side: Image + Details */}
        <div className={styles.left}>
          <div className={styles.imageBox}>
            {product.image && <img src={product.image} alt={product.title} />}
          </div>

          <div className={styles.detail}>
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>Rs. {product.price.toLocaleString()}</p>
            <SquareButton>Select Options</SquareButton>
          </div>
        </div>

        {/* Right Side: Delete Icon */}
        <div className={styles.remove} onClick={onRemove}>
          <FaTrash className={styles.trashIcon} />
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;