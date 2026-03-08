import React from 'react'
import Styles from './CartSection.module.css'
import SquareButton from '../Building Blocks/Buttons/SquareButton';
import { IoTrashBinOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import Image from '../../assets/Images/Shoes Image.jpg'




const CartLeft = () => {
  return (
    <div className={Styles.cartLeft}>
                <div className={Styles.heading}>Products</div>
                <div className={Styles.cartProduct}>
                    <img src={Image} alt="" />
                    <div className={Styles.content}>
                        <div className={Styles.productName}>Product Name</div>
                        <div className={Styles.productPrice}>$99.99</div>
                        <div className={Styles.quantity}>Quantity: 1</div>
                        <div className={Styles.quantityBtns}>
                            <button className={Styles.quantityBtnLeft}>-</button>
                            <div className={Styles.quantityDisplay}>1</div>
                            <button className={Styles.quantityBtnRight}>+</button>
                        </div>
                        <div className={Styles.remove}>
                            <IoTrashBinOutline className={Styles.trashIcon} /> Remove
                        </div>
                        <div className={Styles.price}>
                            <div className={Styles.priceValue}>Total: $99.99</div>
                        </div>
                    </div>
                </div>
                <div className={Styles.btns}>
                    <Link to={'/home'}>
                    <SquareButton>Continue Shoping</SquareButton>
                    </Link>
                    <SquareButton>Update Cart</SquareButton>
                </div>
            </div>
  )
}

export default CartLeft
