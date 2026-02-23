import React from 'react'
import Styles from './ButtonsStyles.module.css'

const SquareButton = ({children}) => {
  return (
    <div className={Styles.roundedButtonParent}>
        <button>{children}</button>
      
    </div>
  )
}

export default SquareButton
