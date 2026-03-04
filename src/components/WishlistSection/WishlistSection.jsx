import React from 'react'
import Styles from './WishlistSection.module.css'
import WishlistCard from './WishlistCard'

const WishlistSection = () => {
  return (
    <div className={Styles.wlSection}>
       <WishlistCard />
    </div>
  )
}

export default WishlistSection
