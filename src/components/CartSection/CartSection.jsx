import React from 'react'
import Styles from './CartSection.module.css'
import Container from '../Building Blocks/Container/Container'
import CartLeft from './CartLeft';
import CartRight from './CartRight';

const CartSection = () => {
    return (
        <div className={Styles.cart}>
            <Container>
                <div className={Styles.cartContent}>
                    <CartLeft />
                    <CartRight />
                </div>
            </Container>
        </div>
    )
}

export default CartSection
