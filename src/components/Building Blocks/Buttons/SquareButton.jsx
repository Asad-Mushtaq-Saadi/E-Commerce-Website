import React from 'react'
import Styles from './ButtonsStyles.module.css'

const SquareButton = ({children, onClick }) => {
  return (
    <div className={Styles.squareButtonParent} onClick={onClick}>
        <button>{children}</button>
      
    </div>
  )
}

export default SquareButton
