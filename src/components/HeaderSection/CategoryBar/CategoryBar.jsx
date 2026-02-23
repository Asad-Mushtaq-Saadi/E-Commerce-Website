import React from 'react'
import Styles from './CategoryBar.module.css'
import RoundedButton from '../../Building Blocks/Buttons/RoundedButton'
import Categories from '../../Building Blocks/Categories/Categories'
import Container from '../../Building Blocks/Container/Container'
import SideBar from '../SideBar/SideBar'


const CategoryBar = () => {
    return (
        <div className={Styles.categoryBarParent}>
            <Container>
                <div className={Styles.categoryBarContent}>
                <RoundedButton>Shop</RoundedButton>
                <Categories />
                </div>
            </Container>

        </div>
    )
}

export default CategoryBar
