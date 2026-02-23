import React, { useState } from 'react'
import Styles from './Categories.module.css'
import { MdOutlineMenu } from "react-icons/md";
import SideBar from '../../HeaderSection/SideBar/SideBar';

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

    const [categories, setCategories] = useState([
        { id: 1, categoryName: "Wifi" },
        { id: 2, categoryName: "Zigbee" },
        { id: 3, categoryName: "Gateway" },
        { id: 4, categoryName: "Home Essentials" },
        { id: 5, categoryName: "Accessories" }
    ]);


    return (
        <>
            <div className={Styles.categoriesParent}>
                {categories.map((item) => (
                    <p key={item.id}>{item.categoryName}</p>
                ))}
                <MdOutlineMenu className={Styles.icon} onClick={() => setIsOpen(true)}/>
            </div>
            <SideBar categories = {categories}  isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}

export default Categories