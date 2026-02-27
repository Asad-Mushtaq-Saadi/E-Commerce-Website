import React from 'react'
import Styles from './ReviewCard.module.css'
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ name, text, rating, image }) => {

  return (
    <div className={Styles.reviewCard}>

      <img
        src={image}
        alt={name}
        className={Styles.reviewImage}
      />

      <div className={Styles.reviewsContent}>

        <h3 className={Styles.userName}>{name}</h3>

        <div className={Styles.ratings}>
          {[...Array(rating)].map((_, index) => (
            <FaStar key={index} className={Styles.starIcon} />
          ))}
        </div>

        <p className={Styles.reviewText}>{text}</p>

      </div>

    </div>
  )
}

export default ReviewCard 