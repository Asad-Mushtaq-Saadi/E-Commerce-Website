import React from 'react';
import Styles from './CartSection.module.css';
import SquareButton from '../Building Blocks/Buttons/SquareButton';
import { IoTrashBinOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const CartLeft = ({ cartItems, removeFromCart, updateQuantity, getCartTotal }) => {
    if (cartItems.length === 0) {
        return (
            <div className={Styles.cartLeft}>
                <div className={Styles.heading}>Products</div>
                <div className={Styles.emptyCart}>
                    <p>Your cart is empty</p>
                    <Link to="/product-list">
                        <SquareButton>Continue Shopping</SquareButton>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={Styles.cartLeft}>
            <div className={Styles.heading}>Products ({cartItems.length} items)</div>

            {cartItems.map(item => (
                <div key={item.id} className={Styles.cartProduct}>
                    <img src={item.image} alt={item.title} />
                    <div className={Styles.content}>
                        <div className={Styles.productName}>{item.logotext}</div>
                        <div className={Styles.productName}>{item.title}</div>
                        <div className={Styles.productPrice}>Rs. {item.price.toLocaleString()}</div>
                        <div className={Styles.quantityBtns}>
                            <button
                                className={Styles.quantityBtnLeft}
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                                -
                            </button>
                            <div className={Styles.quantityDisplay}>{item.quantity}</div>
                            <button
                                className={Styles.quantityBtnRight}
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                        <div className={Styles.remove} onClick={() => removeFromCart(item.id)}>
                            <IoTrashBinOutline className={Styles.trashIcon} /> Remove
                        </div>
                        <div className={Styles.price}>
                            <div className={Styles.priceValue}>
                                Total: Rs. {(item.price * item.quantity).toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className={Styles.cartTotalSummary}>
                <h3>Cart Total: Rs. {getCartTotal().toLocaleString()}</h3>
            </div>

            <div className={Styles.btns}>
                <Link to={'/home'}>
                    <SquareButton>Continue Shopping</SquareButton>
                </Link>
                <SquareButton>Update Cart</SquareButton>
            </div>
        </div>
    );
};

export default CartLeft;