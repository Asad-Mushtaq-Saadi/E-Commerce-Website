import React, { useEffect } from 'react'
import Styles from './SideBar.module.css'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const SideBar = ({ categories, isOpen, setIsOpen, onCategoryClick }) => {

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
                    <Link
                        key={item.id}
                        to={'/product-list'}
                        onClick={() => {
                            onCategoryClick(item.categoryName);
                            setIsOpen(false);
                             window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <p>{item.categoryName}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideBar;