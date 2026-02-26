import React from 'react'
import Styles from './Reviews.module.css'
import SectionHeading from '../../Building Blocks/SectionHeadings/SectionHeading'
import Container from '../../Building Blocks/Container/Container'
import { FaStar, FaStarHalf, FaRegUser } from "react-icons/fa";


const Reviews = () => {
    return (
        <div className={Styles.ReviewsParent}>
            <SectionHeading subHeading="Testimonials" heading="What Customers Say?" />
            <Container>
                <div className={Styles.totalReviews}>
                    <h1 >Let customers speak for us</h1>
                    <div className={Styles.totalStars}>
                        <FaStar className={Styles.starIcon} />
                        <FaStar className={Styles.starIcon} />
                        <FaStar className={Styles.starIcon} />
                        <FaStar className={Styles.starIcon} />
                        <FaStarHalf className={Styles.StarIcon} />
                    </div>
                    <p>1000 reviews</p>
                </div>
            </Container>

        </div>
    )
}

export default Reviews
