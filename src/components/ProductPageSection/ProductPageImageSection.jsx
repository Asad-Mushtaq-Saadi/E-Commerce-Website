import React from 'react'
import Styles from './ProductPageImageSection.module.css'
import Image from '../../assets/Images/Shoes Image.jpg'

const ProductPageImageSection = () => {
  return (
    <div className={Styles.pPImageParent}>

      <div className={Styles.pPMainImage}>
        <img src={Image} alt="product" className={Styles.mainImage}/>
      </div>

      <div className={Styles.allImages}>
        <img src={Image} alt="product" className={Styles.pPImage} tabIndex={0}/>
        <img src={Image} alt="product" className={Styles.pPImage} tabIndex={0}/>
        <img src={Image} alt="product" className={Styles.pPImage} tabIndex={0}/>
      </div>

    </div>
  )
}

export default ProductPageImageSection