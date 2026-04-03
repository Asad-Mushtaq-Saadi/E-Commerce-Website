import React from 'react';
import { useLocation } from 'react-router-dom';
import Styles from './ProductPageSection.module.css';
import Container from '../Building Blocks/Container/Container';
import ProductPageImageSection from './ProductPageImageSection';
import ProductDetails from './ProductDetails';
import SectionGap from '../Building Blocks/SectionGap/SectionGap';

const ProductPageSection = () => {
  const location = useLocation();
  const productData = location.state || {};

  console.log("Product Data received:", productData);

  return (
    <>
      <SectionGap />
      <div className={Styles.pPSectionParent}>
        <Container>
          <div className={Styles.pPSectionContentt}>
            <ProductPageImageSection productData={productData} />
            <ProductDetails productData={productData} />
          </div>
        </Container>
      </div>
      <SectionGap />
    </>
  );
};

export default ProductPageSection;