import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './ProductCard.module.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';

const ProductCard = ({ id, title, price, image, logotext }) => {
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const handleCartClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        addToCart({ id, title, price, image, logotext });
        console.log('Added to cart:', title);
    };

    const handleHeartClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        if (isInWishlist(id)) {
            removeFromWishlist(id);
            console.log('Removed from wishlist:', title);
        } else {
            addToWishlist({ id, title, price, image, logotext });
            console.log('Added to wishlist:', title);
        }
    };

    const isWishlisted = isInWishlist(id);

    return (
        <Link to="/product-page" state={{ id, title, price, image, logotext }} className={Styles.productCardLink}>
            <div className={Styles.productCard}>
                <div className={Styles.productCardTop}>
                    <div className={Styles.productImageParent}>
                        <img src={image} alt={title} className={Styles.productImage} />
                    </div>
                    <div className={Styles.imageIcons}>
                        <MdOutlineShoppingCart
                            className={Styles.productCardIcon}
                            onClick={handleCartClick}
                        />
                        <FaRegHeart
    className={`${Styles.productCardIcon} ${isWishlisted ? Styles.wishlistedHeart : ''}`}
    onClick={handleHeartClick}
/>
                    </div>
                </div>
                <div className={Styles.productCardBottom}>
                    <div className={Styles.productCardDetails}>
                        <p>{logotext}</p>
                        <h1>{title}</h1>
                        <p>Rs.<span>{price}</span></p>
                    </div>
                    <div className={Styles.moreDetailIcon}>
                        <IoIosArrowForward className={Styles.productCardIcon} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;