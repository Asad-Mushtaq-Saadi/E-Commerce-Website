import React, { useState } from 'react'
import Styles from './Categories.module.css'
import { MdOutlineMenu } from "react-icons/md";

const Categories = () => {

    const [categories, setCategories] = useState([
        { id: 1, categoryName: "Wifi" },
        { id: 2, categoryName: "Zigbee" },
        { id: 3, categoryName: "Gateway" },
        { id: 4, categoryName: "Home Essentials" },
        { id: 5, categoryName: "Accessories" }
    ]);

    return (
        <div className={Styles.categoriesParent}>
            {categories.map((item) => (
                <p key={item.id}>{item.categoryName}</p>
            ))}
            <MdOutlineMenu className={Styles.icon} />
        </div>
    )
}

export default Categories