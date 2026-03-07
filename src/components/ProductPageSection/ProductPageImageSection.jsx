import React from 'react'
import Styles from './ProductPageImageSection.module.css'
import Image from '../../assets/Images/Shoes Image.jpg'

const ProductPageImageSection = () => {
  return (
    <div className={Styles.pPImageParent}>
        <div className={Styles.pPMainImage}>
            <img src={Image} alt="" width='700px' className={Styles.mainImage}/>
        </div>
        <div className={Styles.allImages}>
            <img src={Image} alt="" className={Styles.pPImage}/>
            <img src={Image} alt="" className={Styles.pPImage}/>
            <img src={Image} alt="" className={Styles.pPImage}/>
        </div>
      
    </div>
  )
}

export default ProductPageImageSection
