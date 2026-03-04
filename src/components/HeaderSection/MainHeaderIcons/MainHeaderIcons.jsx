import React from 'react'
import { RiAccountCircleLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Styles from './MainHeaderIcons.module.css'
import { Link } from 'react-router-dom';

const MainHeaderIcons = () => {
    return (
        <div className={Styles.iconsParent}>
            <div className={Styles.icons}>
                <IoSearch className={Styles.icon} />
                <Link
                    to={'/login'}
                    className={Styles.icon}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <RiAccountCircleLine />
                </Link>
                <Link
                    to={'/wishlist'}
                    className={Styles.icon}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <FaRegHeart />
                </Link>
                <HiOutlineShoppingCart className={Styles.icon} />
            </div>


        </div>
    )
}

export default MainHeaderIcons
