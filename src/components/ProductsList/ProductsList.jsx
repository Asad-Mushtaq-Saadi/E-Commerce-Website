import React from 'react'
import Container from '../Building Blocks/Container/Container'
import Product from '../Building Blocks/ProductCard/ProductCard'
import Styles from './ProductsList.module.css'
import ProductImage from '../../assets/Images/Shoes Image.jpg'
import SectionHeading from '../Building Blocks/SectionHeadings/SectionHeadingWithButton'
import SectionGap from '../Building Blocks/SectionGap/SectionGap'

const products = [
  { id: 1, title: "Running Shoes Pro", price: 2500, image: ProductImage, logotext: "ZENTRIX" },
  { id: 2, title: "Sports Sneaker X", price: 3200, image: ProductImage, logotext: "ZENTRIX" },
  { id: 3, title: "Casual Walkers", price: 1800, image: ProductImage, logotext: "ZENTRIX" },
  { id: 4, title: "Gym Trainer Plus", price: 4000, image: ProductImage, logotext: "ZENTRIX" },
  { id: 5, title: "Lightweight Runner", price: 2200, image: ProductImage, logotext: "ZENTRIX" },
  { id: 6, title: "Urban Style Shoes", price: 2800, image: ProductImage, logotext: "ZENTRIX" },
  { id: 7, title: "Comfort Walkers", price: 1500, image: ProductImage, logotext: "ZENTRIX" },
  { id: 8, title: "Premium Sneakers", price: 5000, image: ProductImage, logotext: "ZENTRIX" },
  { id: 9, title: "Daily Use Shoes", price: 2000, image: ProductImage, logotext: "ZENTRIX" },
  { id: 10, title: "Running Elite", price: 3500, image: ProductImage, logotext: "ZENTRIX" },
  { id: 11, title: "Classic Sneakers", price: 2700, image: ProductImage, logotext: "ZENTRIX" },
  { id: 12, title: "Street Style Pro", price: 3100, image: ProductImage, logotext: "ZENTRIX" }
];

const ProductsList= () => {
  return (

    <>
    <div className={Styles.homePeoductsHeading}>
      <SectionHeading subHeading="HOT DEALS"  heading="Our Best Selling Products" buttonText="Order Now"/>
    </div>

    <Container>
      <div className={Styles.productCollection}>
        {products.slice(0, 8).map((item) => (
          <Product
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            logotext={item.logotext}
          />
        ))}
      </div>
    </Container>
    <SectionGap />
    </>
  );
}

export default ProductsList