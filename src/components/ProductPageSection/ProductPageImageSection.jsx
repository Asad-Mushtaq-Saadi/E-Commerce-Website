import React, { useState } from 'react'
import Styles from './ProductPageImageSection.module.css'
import Image from '../../assets/Images/Shoes Image.jpg'

const ProductPageImageSection = ({ productData }) => {
  const [mainImage, setMainImage] = useState(productData?.image || Image);
  
  const { image } = productData || {};
  
  // Create an array of images (main image + 3 placeholders)
  const allProductImages = [
    image || Image,
    Image,
    Image,
    Image
  ];

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  return (
    <div className={Styles.pPImageParent}>
      <div className={Styles.pPMainImage}>
        <img src={mainImage} alt="product" className={Styles.mainImage}/>
      </div>

      <div className={Styles.allImages}>
        {allProductImages.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`product ${index + 1}`} 
            className={`${Styles.pPImage} ${mainImage === img ? Styles.activeImage : ''}`}
            tabIndex={0}
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductPageImageSection