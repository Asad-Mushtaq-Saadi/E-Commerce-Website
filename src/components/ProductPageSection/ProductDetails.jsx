import React, { useState } from 'react';
import Styles from './ProductDetails.module.css';
import RoundedButton from '../Building Blocks/Buttons/RoundedButton';

const ProductDetails = ({ productData }) => {
  const [count, setCount] = useState(1);
  const { title, price, logotext, id } = productData;

  return (
    <div className={Styles.productDetailsParent}>
      <div className={Styles.productDetails}>
        <h1 className={Styles.title}>{title || "Ultra Super Smart Panel"}</h1>

        <div className={Styles.prices}>
          <p className={Styles.salePrice}>Rs. {price?.toLocaleString() || '70,000'}.00</p>
          <p className={Styles.price}>Rs. 110,000.00</p>
          <span className={Styles.discount}>36.4% Off</span>
        </div>

        <div className={Styles.infoRow}>
          <span>Total</span>
          <span>Rs. {price?.toLocaleString() || '70,000'}.00</span>
        </div>

        <div className={Styles.infoRow}>
          <span>Type</span>
          <span>{logotext || "Home Assistance"}</span>
        </div>

        <div className={Styles.infoRow}>
          <span>SKU</span>
          <span>OK-MFCP-{id || "001"}</span>
        </div>

        <div className={Styles.quantityRow}>
          <span>Quantity</span>
          <div className={Styles.counter}>
            <button onClick={() => setCount(prev => Math.max(1, prev - 1))}>−</button>
            <span>{count}</span>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
          </div>
        </div>

        <div className={Styles.btns}>
          <RoundedButton>Add To Cart</RoundedButton>
          <button className={Styles.wishlistBtn}>Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;