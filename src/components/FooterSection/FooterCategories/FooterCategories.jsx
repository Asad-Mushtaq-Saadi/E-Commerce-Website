import React, { useContext } from 'react'
import Styles from './FooterCategories.module.css'
import { CategoriesContext } from '../../../context/CategoriesContext'
import { Link } from 'react-router-dom'
import selectedCategory from '../../../services/selectedCategory' // Import the service

const FooterCategories = () => {

    const { categories } = useContext(CategoriesContext)

    const handleCategoryClick = (categoryName) => {
        selectedCategory.setCategory(categoryName); // Update service class
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <div className={Styles.fCatoriesContent}>
            <h1>Categories</h1>

            {categories.map((category) => (
                <Link 
                    to={'/product-list'}
                    onClick={() => handleCategoryClick(category.categoryName)}
                    key={category.id} 
                    className={Styles.fCategory}
                >
                    {category.categoryName}
                </Link>
            ))}

        </div>
    )
}

export default FooterCategories