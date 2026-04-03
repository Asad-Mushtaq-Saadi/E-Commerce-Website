import React, { useState } from 'react'
import Styles from './CategoryBar.module.css'
import RoundedButton from '../../Building Blocks/Buttons/RoundedButton'
import Categories from '../../Building Blocks/Categories/Categories'
import Container from '../../Building Blocks/Container/Container'
import { Link } from 'react-router-dom'
import selectedCategoryService from '../../../services/selectedCategory' // Import the service

const CategoryBar = () => {
    const [allCategories, setAllCategories] = useState('All')

    const handleShopClick = () => {
        // Set category to 'All' in the service when Shop button is clicked
        selectedCategoryService.setCategory('All')
        setAllCategories('All')
    }

    return (
        <div className={Styles.categoryBarParent}>
            <Container>
                <div className={Styles.categoryBarContent}>
                    <Link to={'/product-list'} onClick={() => {
                        handleShopClick();
                         window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>
                        <RoundedButton>Shop</RoundedButton>
                    </Link>
                    <Categories />
                </div>
            </Container>
        </div>
    )
}

export default CategoryBar