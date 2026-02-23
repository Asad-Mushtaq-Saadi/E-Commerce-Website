import React, { useContext } from 'react'
import Styles from './FooterCategories.module.css'
import { CategoriesContext } from '../../../context/CategoriesContext'

const FooterCategories = () => {

    const { categories } = useContext(CategoriesContext)

    return (
        <div className={Styles.fCatoriesContent}>
            <h1>Pages</h1>

            {categories.map((category) => (
                <p 
                    key={category.id} 
                    className={Styles.fCategory}
                >
                    {category.categoryName}
                </p>
            ))}

        </div>
    )
}

export default FooterCategories