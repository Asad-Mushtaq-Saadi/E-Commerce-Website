import React, { useRef } from 'react'
import Styles from './ReviewCardsList.module.css'
import ReviewCard from '../ReviewCard/ReviewCard'
import SquareButton from '../../Building Blocks/Buttons/SquareButton'

const ReviewCardsList = () => {

  const reviewsRef = useRef(null)

  const scrollLeft = () => {
    reviewsRef.current.scrollBy({
      left: -330,
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    reviewsRef.current.scrollBy({
      left: 330,
      behavior: 'smooth'
    })
  }

  const reviews = [
    {
      id: 1,
      name: "Asad Khan",
      cast: "Rajput",
      text: "Amazing product and great build quality. Highly recommended!",
      rating: 5,
      image: "https://xsgames.co/randomusers/assets/avatars/male/15.jpg"
    },
    {
      id: 2,
      name: "Ali Shah",
      cast: "Syed",
      text: "Good service and fast delivery. Worth the money.",
      rating: 4,
      image: "https://xsgames.co/randomusers/assets/avatars/male/22.jpg"
    },
    {
      id: 3,
      name: "Ahmed Raza",
      cast: "Pathan",
      text: "Great experience. Product quality is really impressive.",
      rating: 4,
      image: "https://xsgames.co/randomusers/assets/avatars/male/30.jpg"
    },
    {
      id: 4,
      name: "Usman Malik",
      cast: "Mughal",
      text: "Very satisfied. Design and performance both are excellent.",
      rating: 5,
      image: "https://xsgames.co/randomusers/assets/avatars/male/40.jpg"
    },
    {
      id: 5,
      name: "Bilal Jutt",
      cast: "Jutt",
      text: "Excellent product. Smooth performance and good value.",
      rating: 5,
      image: "https://xsgames.co/randomusers/assets/avatars/male/50.jpg"
    }
  ]

  return (
    <div>

      {/* Left Button */}
      <SquareButton onClick={scrollLeft}>
        ←
      </SquareButton>

      {/* Scrollable Cards */}
      <div
        className={Styles.reviewCardsList}
        ref={reviewsRef}
      >
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            text={review.text}
            rating={review.rating}
            image={review.image}
          />
        ))}
      </div>

      {/* Right Button */}
      <SquareButton onClick={scrollRight}>
        →
      </SquareButton>

    </div>
  )
}

export default ReviewCardsList