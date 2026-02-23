import React, { useState } from 'react'
import Styles from './SideBar.module.css'
import { RxCross2 } from "react-icons/rx";

const SideBar = () => {

    const [categories, setCategories] = useState([
        { id: 1, categoryName: "Wifi" },
        { id: 2, categoryName: "Zigbee" },
        { id: 3, categoryName: "Gateway" },
        { id: 4, categoryName: "Home Essentials" },
        { id: 5, categoryName: "Accessories" }
    ]);

    return (
        <div className={Styles.overlay}>
            <div className={Styles.sideBar}>
                <RxCross2 className={Styles.icon} />
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