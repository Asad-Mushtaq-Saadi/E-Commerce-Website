import React from 'react'
import Styles from './ButtonsStyles.module.css'

const SquareButton = ({ children, onClick }) => {
  return (
    <div className={Styles.roundedButtonParent}>
        <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default SquareButton