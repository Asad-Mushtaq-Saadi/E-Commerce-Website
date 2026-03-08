import React, { useState } from 'react'
import Styles from './ProductDetails.module.css'
import RoundedButton from '../Building Blocks/Buttons/RoundedButton'

const ProductDetails = () => {

    const [count, setCount] = useState(1)

    return (
        <div className={Styles.productDetailsParent}>
            <div className={Styles.productDetails}>

                <h1 className={Styles.title}>Ultra Super Smart Panel</h1>

                <div className={Styles.prices}>
                    <p className={Styles.salePrice}>Rs. 70,000.00</p>
                    <p className={Styles.price}>Rs. 110,000.00</p>
                    <span className={Styles.discount}>36.4% Off</span>
                </div>

                <div className={Styles.infoRow}>
                    <span>Total</span>
                    <span>Rs. 70,000.00</span>
                </div>

                <div className={Styles.infoRow}>
                    <span>Type</span>
                    <span>Home Assistance</span>
                </div>

                <div className={Styles.infoRow}>
                    <span>SKU</span>
                    <span>OK-MFCP</span>
                </div>

                {/* Quantity Counter */}
                <div className={Styles.quantityRow}>
                    <span>Quantity</span>
                    <div className={Styles.counter}>
                        <button onClick={() => setCount(prev => Math.max(1, prev - 1))}>−</button>
                        <span>{count}</span>
                        <button onClick={() => setCount(prev => prev + 1)}>+</button>
                    </div>
                </div>

                {/* Buttons */}
                <div className={Styles.btns}>
                    <RoundedButton className={Styles.addToCart}>Add To Cart</RoundedButton>
                    <button className={Styles.wishlistBtn}>Add To Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails