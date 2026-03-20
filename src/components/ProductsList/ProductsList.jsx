import React, { useState, useEffect } from 'react'
import Container from '../Building Blocks/Container/Container'
import Product from '../Building Blocks/ProductCard/ProductCard'
import Styles from './ProductsList.module.css'
import ProductImage from '../../assets/Images/Shoes Image.jpg'
import SectionHeading from '../Building Blocks/SectionHeadings/SectionHeadingWithButton'
import SectionGap from '../Building Blocks/SectionGap/SectionGap'
import selectedCategory from '../../services/selectedCategory'
import ProductService from '../../services/productService'

const ProductsList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  const selected = selectedCategory.getCategory()
  const formattedCategory = selected.toLowerCase().replace(/ /g, '-')
  console.log(formattedCategory)

  // Get all products on component mount
  useEffect(() => {
    const service = new ProductService()
    
    // Wait for products to load
    setTimeout(() => {
      const allProducts = service.getAllProducts()
      setProducts(allProducts)
      console.log('Products loaded:', allProducts)
    }, 500)
  }, [])


  return (
    <>
      <div className={Styles.homePeoductsHeading}>
        <SectionHeading subHeading="HOT DEALS" heading="Our Best Selling Products" buttonText="Order Now"/>
      </div>

      <Container>
        <div className={Styles.productCollection}>
          {products.slice(0, 8).map((item) => (
            <Product
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image || ProductImage}
              logotext={item.logotext}
            />
          ))}
        </div>
      </Container>
      <SectionGap />
    </>
  )
}

export default ProductsList