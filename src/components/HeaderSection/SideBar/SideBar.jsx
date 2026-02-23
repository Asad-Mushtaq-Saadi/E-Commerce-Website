import React from 'react'
import Styles from './SideBar.module.css'
import { RxCross2 } from "react-icons/rx";

const SideBar = ({ categories, isOpen, setIsOpen }) => {

    if (!isOpen) return null;  // same as friend's conditional rendering

    return (
        <div
            className={Styles.overlay}
            onClick={() => setIsOpen(false)}
        >
            <div
                className={Styles.sideBar}
                onClick={(e) => e.stopPropagation()}
            >
                <RxCross2
                    className={Styles.icon}
                    onClick={() => setIsOpen(false)}
                />

                {categories.map((item) => (
                    <p key={item.id}>
                        {item.categoryName}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default SideBar