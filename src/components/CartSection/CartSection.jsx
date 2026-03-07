import React from 'react'
import styles from './CartSection.module.css'
import { IoTrashBinOutline } from "react-icons/io5";
import SquareButton from '../Building Blocks/Buttons/SquareButton';

const CartSection = () => {
    return (
        <div className={styles.cart}>
            
            <div className={styles.cartLeft}>
                <div className={styles.heading}>Products</div>
                <div className={styles.cartProduct}>
                    <img src="/p1.png" alt="" />
                    <div className={styles.content}>
                        <div className={styles.productName}>Product Name</div>
                        <div className={styles.productPrice}>$99.99</div>
                        <div className={styles.quantity}>Quantity: 1</div>
                        <div className={styles.quantityBtns}>
                            <button className={styles.quantityBtnLeft}>-</button>
                            <div className={styles.quantityDisplay}>1</div>
                            <button className={styles.quantityBtnRight}>+</button>
                        </div>
                        <div className={styles.remove}>
                            <IoTrashBinOutline className={styles.trashIcon} /> Remove
                        </div>
                        <div className={styles.price}>
                            <div className={styles.priceValue}>Total: $99.99</div>
                        </div>
                    </div>
                </div>
                <div className={styles.btns}>
                    <SquareButton>Continue Shoping</SquareButton>
                    <SquareButton>Update Cart</SquareButton>
                </div>
            </div>
            <div className={styles.cartRight}>
                <div className={styles.heading}>Cart Right</div>
                <div className={styles.subtotal}>
                    <span>Subtotal:</span>
                    <span>$199.99</span>
                </div>
                    <SquareButton>Add a note to your order</SquareButton>
                <div className={styles.paragraph}><i>Shipping, taxes, and discounts will be calculated at checkout.</i></div>
                    <SquareButton>Checkout</SquareButton>
            </div>
        </div>
    )
}

export default CartSection