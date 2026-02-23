import React from 'react'
import { RiAccountCircleLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Styles from './MainHeaderIcons.module.css'

const MainHeaderIcons = () => {
    return (
        <div className={Styles.iconsParent}>
            <div className={Styles.icons}>
                <IoSearch className={Styles.icon}/>
                <RiAccountCircleLine   className={Styles.icon} />
                <FaRegHeart className={Styles.icon}/>
                <HiOutlineShoppingCart className={Styles.icon}/>
            </div>


        </div>
    )
}

export default MainHeaderIcons
