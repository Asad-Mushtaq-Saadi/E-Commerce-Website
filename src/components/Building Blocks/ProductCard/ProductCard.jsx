import React from 'react';
import Styles from './ProductCard.module.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const ProductCard = ({ title, price, image, logotext }) => {
  return (
    <div className={Styles.productCard}>
      <div className={Styles.productCardTop}>
        <div className={Styles.productImageParent}>
          <img src={image} alt={title} className={Styles.productImage} />
        </div>
        <div className={Styles.imageIcons}>
          <MdOutlineShoppingCart className={Styles.productCardIcon} />
          <FaRegHeart className={Styles.productCardIcon} />
        </div>
      </div>

      <div className={Styles.productCardBottom}>
        <div className={Styles.productCardDetails}>
          <p>{logotext}</p>
          <h1>{title}</h1>
          <p>
            Rs.<span>{price}</span>
          </p>
        </div>
        <div className={Styles.moreDetailIcon}>
          <IoIosArrowForward className={Styles.productCardIcon} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;