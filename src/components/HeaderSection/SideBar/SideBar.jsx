import React, { useEffect } from 'react'
import Styles from './SideBar.module.css'
import { RxCross2 } from "react-icons/rx";

const SideBar = ({ categories, isOpen, setIsOpen }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

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