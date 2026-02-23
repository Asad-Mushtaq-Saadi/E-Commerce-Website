import React from 'react'
import Styles from './RightReservedBar.module.css'

const RightReservedBar = () => {
  return (
    <div className={Styles.rParent}>
           <p>Asad Mushtaq Saadi &copy; all rights reserved</p>
           <div className={Styles.profileLinks}>
           <a href="#">LinkedIn</a>
           <a href="#">Github</a>
           </div>
    </div>
  )
}

export default RightReservedBar
