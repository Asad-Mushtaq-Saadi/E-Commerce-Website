import React from 'react'
import Styles from './ProductPageSection.module.css'
import Container from '../Building Blocks/Container/Container'
import ProductPageImageSection from './ProductPageImageSection'
import ProductDetails from './ProductDetails'
import SectionGap from '../Building Blocks/SectionGap/SectionGap'

const ProductPageSection = () => {
    return (
        <>
        <SectionGap />
        <div className={Styles.pPSectionParent}>
            
            <Container>
                <div className={Styles.pPSectionContentt}>
                    <ProductPageImageSection />
                    <ProductDetails />
                </div>

            </Container>
        </div>
        <SectionGap />
        </>
    )
}

export default ProductPageSection
