import React from 'react'
import Styles from './Reviews.module.css'
import SectionHeading from '../../Building Blocks/SectionHeadings/SectionHeading'
import Container from '../../Building Blocks/Container/Container'
import { FaStar, FaStarHalf, FaRegUser } from "react-icons/fa";
import SectionGap from '../../Building Blocks/SectionGap/SectionGap';
import ReviewCardsList from '../ReviewCardsList/ReviewCardsList';


const Reviews = () => {
    return (
        <>
        <div className={Styles.ReviewsParent}>
            <SectionHeading subHeading="TESTIMONIALS" heading="What Customers Say?" />
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

      <ReviewCardsList />
                

            </Container>

        </div>
        <SectionGap />
    </>
    )
}

export default Reviews
