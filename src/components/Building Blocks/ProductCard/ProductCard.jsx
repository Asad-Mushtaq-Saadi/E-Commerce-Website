import React from 'react'
import Styles from './ProductCard.module.css'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import ProductImage from '../../../assets/Images/Shoes Image.jpg'

const ProductCard = () => {
    return (
        <div className={Styles.productCard}>
            <div className={Styles.productCardTop}>
                <div className={Styles.productImageParent}>
                <img src={ProductImage} alt=""  className={Styles.productImage}/>
                </div>
                <div className={Styles.imageIcons}>
                        <MdOutlineShoppingCart  className={Styles.productCardIcon}/>
                        <FaRegHeart className={Styles.productCardIcon}/>
                </div>
            </div>
            <div className={Styles.productCardBottom}>
                <div className={Styles.productCardDetails}>
                    <p>ZENTRIX</p>
                    <h1>Switch dControler 10A</h1>
                    <p>Rs.<span>10000</span> </p>
                </div>
                <div className={Styles.moreDetailIcon}>
                    
                        <IoIosArrowForward className={Styles.productCardIcon}/>
                </div>
            </div>

        </div>
    )
}

export default ProductCard
