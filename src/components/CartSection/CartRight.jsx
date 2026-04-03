import React from 'react';
import Styles from './CartSection.module.css';
import SquareButton from '../Building Blocks/Buttons/SquareButton';

const CartRight = ({ getCartTotal }) => {
    // Safe check: if getCartTotal is undefined or not a function, show 0
    const total = typeof getCartTotal === 'function' ? getCartTotal() : 0;
    
    return (
        <div className={Styles.cartRight}>
            <div className={Styles.heading}>Order Summary</div>
            <div className={Styles.subtotal}>
                <span>Subtotal:</span>
                <span>Rs. {total.toLocaleString()}</span>
            </div>
            <SquareButton>Add a note to your order</SquareButton>
            <div className={Styles.paragraph}>
                <i>Shipping, taxes, and discounts will be calculated at checkout.</i>
            </div>
            <SquareButton>Checkout</SquareButton>
        </div>
    );
};

export default CartRight;