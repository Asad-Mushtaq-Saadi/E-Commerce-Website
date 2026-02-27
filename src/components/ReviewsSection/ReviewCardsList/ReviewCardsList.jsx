import React, { useState } from 'react'
import Styles from './ReviewCardsList.module.css'
import ReviewCard from '../ReviewCard/ReviewCard'
import SquareButton from '../../Building Blocks/Buttons/SquareButton'

const ReviewCardsList = () => {

  const [index, setIndex] = useState(0)

  const reviews = [
    { id: 1, name: "Asad Khan", cast: "Rajput", text: "Amazing product and great build quality. Highly recommended!", rating: 5, image: "https://xsgames.co/randomusers/assets/avatars/male/15.jpg" },
    { id: 2, name: "Ali Shah", cast: "Syed", text: "Good service and fast delivery. Worth the money.", rating: 4, image: "https://xsgames.co/randomusers/assets/avatars/male/22.jpg" },
    { id: 1, name: "Asad Khan", cast: "Rajput", text: "Amazing product and great build quality. Highly recommended!", rating: 5, image: "https://xsgames.co/randomusers/assets/avatars/male/15.jpg" },
    { id: 2, name: "Ali Shah", cast: "Syed", text: "Good service and fast delivery. Worth the money.", rating: 4, image: "https://xsgames.co/randomusers/assets/avatars/male/22.jpg" },
    { id: 3, name: "Ahmed Raza", cast: "Pathan", text: "Great experience. Product quality is really impressive.", rating: 4, image: "https://xsgames.co/randomusers/assets/avatars/male/30.jpg" },
    { id: 4, name: "Usman Malik", cast: "Mughal", text: "Very satisfied. Design and performance both are excellent.", rating: 5, image: "https://xsgames.co/randomusers/assets/avatars/male/40.jpg" },
    { id: 5, name: "Bilal Jutt", cast: "Jutt", text: "Excellent product. Smooth performance and good value.", rating: 5, image: "https://xsgames.co/randomusers/assets/avatars/male/50.jpg" }
  ]

  const next = () => {
    if (index < reviews.length - 1) {
      setIndex(index + 1)
    }
  }

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  const cardWidth = 900 // same width as ReviewCard

  return (
    <div className={Styles.reviewCardsList}>

      <SquareButton onClick={prev}>
        &lt;
      </SquareButton>

      <div
        className={Styles.sliderTrack}
        style={{ transform: `translateX(-${index * cardWidth}px)` }}
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

      <SquareButton onClick={next}>
        &gt;
      </SquareButton>

    </div>
  )
}

export default ReviewCardsList