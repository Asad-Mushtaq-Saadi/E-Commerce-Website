import React from 'react';
import Styles from './CartSection.module.css';
import Container from '../Building Blocks/Container/Container';
import CartLeft from './CartLeft';
import CartRight from './CartRight';
import { useCart } from '../../context/CartContext';

const CartSection = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    return (
        <div className={Styles.cart}>
            <Container>
                <div className={Styles.cartContent}>
                    <CartLeft
                        cartItems={cartItems}
                        removeFromCart={removeFromCart}
                        updateQuantity={updateQuantity}
                        getCartTotal={getCartTotal}
                    />
                    <CartRight cartItems={cartItems} getCartTotal={getCartTotal} />
                </div>
            </Container>
        </div>
    );
};

export default CartSection;